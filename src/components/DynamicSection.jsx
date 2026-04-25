import React, { useState } from 'react'

function FieldInput({ def, value, onChange }) {
  const common = 'w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron'
  if (def.type === 'textarea') {
    return <textarea className={common} rows={2} value={value || ''} onChange={(e) => onChange(e.target.value)} />
  }
  if (def.type === 'select') {
    return (
      <select className={common} value={value || ''} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select…</option>
        {def.options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    )
  }
  return <input className={common} type={def.type || 'text'} value={value || ''} onChange={(e) => onChange(e.target.value)} />
}

function IconBtn({ title, onClick, children, tone = 'gray' }) {
  const tones = {
    gray: 'text-gray-500 hover:text-gray-800',
    red: 'text-red-500 hover:text-red-700',
  }
  return (
    <button type="button" title={title} onClick={onClick} className={`p-1 ${tones[tone]}`}>
      {children}
    </button>
  )
}

const ArrowUp = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 15l6-6 6 6"/></svg>
const ArrowDown = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
const Trash = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg>
const Plus = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg>

export default function DynamicSection({ title, catalog, order, data, onChange, onOrderChange }) {
  const [picker, setPicker] = useState(false)

  const setField = (key, val) => onChange({ ...data, [key]: val })
  const removeField = (key) => {
    const next = order.filter((k) => k !== key)
    onOrderChange(next)
  }
  const move = (key, delta) => {
    const i = order.indexOf(key)
    const j = i + delta
    if (i < 0 || j < 0 || j >= order.length) return
    const next = [...order]
    ;[next[i], next[j]] = [next[j], next[i]]
    onOrderChange(next)
  }
  const addField = (key) => {
    if (order.includes(key)) return
    onOrderChange([...order, key])
    setPicker(false)
  }
  const addCustom = () => {
    const label = prompt('Custom field label (e.g., "Favorite Food")')
    if (!label) return
    const key = 'custom_' + label.toLowerCase().replace(/\s+/g, '_') + '_' + Date.now()
    catalog[key] = { label, type: 'text', custom: true }
    onOrderChange([...order, key])
    setPicker(false)
  }

  const available = Object.keys(catalog).filter((k) => !order.includes(k))

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-maroon uppercase tracking-wider border-b border-gold/40 pb-1 flex-1 mr-2">{title}</h3>
        <button
          type="button"
          onClick={() => setPicker((v) => !v)}
          className="text-xs font-semibold text-saffron hover:text-orange-600 flex items-center gap-1"
        >
          <Plus /> Add Field
        </button>
      </div>

      {picker && (
        <div className="mt-2 p-2 bg-orange-50 border border-orange-200 rounded-md">
          <div className="flex flex-wrap gap-1 mb-2">
            {available.length === 0 && <div className="text-xs text-gray-500">All fields added</div>}
            {available.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => addField(k)}
                className="text-xs px-2 py-1 bg-white border border-gray-300 rounded hover:border-saffron"
              >
                + {catalog[k].label}
              </button>
            ))}
          </div>
          <button type="button" onClick={addCustom} className="text-xs font-semibold text-saffron">
            + Add Custom Field
          </button>
        </div>
      )}

      <div className="space-y-2 mt-2">
        {order.map((key, idx) => {
          const def = catalog[key]
          if (!def) return null
          return (
            <div key={key} className="flex items-start gap-2">
              <div className="flex-1">
                <label className="label flex items-center justify-between">
                  <span>{def.label}</span>
                </label>
                <FieldInput def={def} value={data[key]} onChange={(v) => setField(key, v)} />
              </div>
              <div className="flex flex-col pt-5 gap-0.5">
                <IconBtn title="Move up" onClick={() => move(key, -1)}>
                  <ArrowUp />
                </IconBtn>
                <IconBtn title="Remove" tone="red" onClick={() => removeField(key)}>
                  <Trash />
                </IconBtn>
                <IconBtn title="Move down" onClick={() => move(key, 1)}>
                  <ArrowDown />
                </IconBtn>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
