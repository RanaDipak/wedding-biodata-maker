import React, { useEffect, useMemo, useRef, useState } from 'react'
import BiodataForm from './components/BiodataForm.jsx'
import TemplatePicker from './components/TemplatePicker.jsx'
import PreviewModal from './components/PreviewModal.jsx'
import { templates, getTemplate } from './templates/index.js'
import { DEFAULT_PERSONAL_ORDER, DEFAULT_FAMILY_ORDER, DEFAULT_CONTACT_ORDER } from './data/fieldDefs.js'
import { downloadPdf, downloadImage } from './utils/pdf.js'
import { loadState, saveState } from './utils/storage.js'

const SAMPLE = {
  fullName: 'Rahul Sharma',
  gender: 'Male',
  dob: '1995-08-14',
  tob: '10:45',
  pob: 'Mumbai',
  height: `5' 9" (175 cm)`,
  complexion: 'Fair',
  maritalStatus: 'Single',
  religion: 'Hindu',
  caste: 'Brahmin',
  gotra: 'Kashyap',
  manglik: 'No',
  rashi: 'Vrishabh',
  nakshatra: 'Rohini',
  education: 'B.Tech, M.Tech',
  occupation: 'Software Engineer',
  company: 'Infosys',
  income: '12-15 LPA',
  hobbies: 'Reading, Cricket, Traveling',
  father: 'Mr. Ramesh Sharma',
  fatherOcc: 'Business',
  mother: 'Mrs. Sunita Sharma',
  motherOcc: 'Home Maker',
  brothers: '1',
  sisters: '0',
  phone: '+91 98765 43210',
  email: 'rahul@example.com',
  address: 'Mumbai, Maharashtra',
}

const DEFAULT_STATE = {
  data: {},
  order: {
    personal: [...DEFAULT_PERSONAL_ORDER],
    family: [...DEFAULT_FAMILY_ORDER],
    contact: [...DEFAULT_CONTACT_ORDER],
  },
  photo: '',
  symbol: 'om',
  templateId: 'classic',
}

export default function App() {
  const persisted = loadState()
  const [state, setState] = useState(() => persisted || DEFAULT_STATE)
  const [busy, setBusy] = useState(false)
  const [previewTplId, setPreviewTplId] = useState(null)
  const [fullPreview, setFullPreview] = useState(false)
  const previewRef = useRef(null)

  useEffect(() => { saveState(state) }, [state])

  const Template = useMemo(
    () => getTemplate(state.templateId).component,
    [state.templateId],
  )

  const PreviewTemplate = useMemo(
    () => (previewTplId ? getTemplate(previewTplId).component : null),
    [previewTplId],
  )

  const onDownloadPdf = async () => {
    setBusy(true)
    try {
      await downloadPdf(previewRef.current, `${state.data.fullName || 'biodata'}.pdf`)
    } finally {
      setBusy(false)
    }
  }

  const onDownloadPng = async () => {
    setBusy(true)
    try {
      await downloadImage(previewRef.current, `${state.data.fullName || 'biodata'}.png`)
    } finally {
      setBusy(false)
    }
  }

  const onReset = () => {
    if (confirm('Clear all fields?')) setState(DEFAULT_STATE)
  }

  const onLoadSample = () => {
    setState((s) => ({ ...s, data: { ...SAMPLE } }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 no-print sticky top-0 z-20">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div>
            <div className="text-xl font-serif font-bold text-maroon">💍 Wedding Biodata Maker</div>
            <div className="text-[11px] text-gray-500">All premium features — 100% free · No signup · No watermark</div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button className="btn-ghost text-xs" onClick={onLoadSample}>Load Sample</button>
            <button className="btn-ghost text-xs" onClick={onReset}>Reset</button>
            <button className="btn-ghost text-xs" onClick={() => setFullPreview(true)}>👁 Preview</button>
            <button className="btn-ghost text-xs" onClick={onDownloadPng} disabled={busy}>PNG</button>
            <button className="btn-primary" onClick={onDownloadPdf} disabled={busy}>
              {busy ? 'Preparing…' : '⬇ Download PDF'}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] w-full mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-6">
        <section className="no-print preview-scroll space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <TemplatePicker
              selectedId={state.templateId}
              onSelect={(id) => setState((s) => ({ ...s, templateId: id }))}
              onPreview={(id) => setPreviewTplId(id)}
            />
          </div>

          <BiodataForm state={state} setState={setState} />
        </section>

        <section className="flex items-start justify-center overflow-auto preview-scroll">
          <div className="preview-scale-wrap" style={{ transform: 'scale(0.92)' }}>
            <div ref={previewRef}>
              <Template data={state.data} order={state.order} photo={state.photo} symbol={state.symbol} />
            </div>
          </div>
        </section>
      </main>

      <footer className="no-print text-center text-xs text-gray-500 py-4">
        Free forever · No signup · No watermark · Works offline · Built with React + Tailwind
      </footer>

      <PreviewModal
        open={!!previewTplId && !!PreviewTemplate}
        onClose={() => setPreviewTplId(null)}
        title={previewTplId ? `Preview · ${getTemplate(previewTplId).name}` : ''}
      >
        {PreviewTemplate && (
          <PreviewTemplate data={state.data} order={state.order} photo={state.photo} symbol={state.symbol} />
        )}
      </PreviewModal>

      <PreviewModal open={fullPreview} onClose={() => setFullPreview(false)} title="Biodata Preview">
        <Template data={state.data} order={state.order} photo={state.photo} symbol={state.symbol} />
      </PreviewModal>
    </div>
  )
}
