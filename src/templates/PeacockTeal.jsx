import React from 'react'
import { RenderFields, splitHalves } from './Row.jsx'
import { SymbolRenderer } from '../components/SymbolPicker.jsx'
import { FloralCorner, BorderStrip, SectionHeader, DividerOrnament } from '../components/Ornaments.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function PeacockTeal({ data, order, photo, symbol }) {
  const [pL, pR] = splitHalves(order.personal, FIELD_CATALOG, data)
  const [fL, fR] = splitHalves(order.family, FAMILY_CATALOG, data)

  return (
    <div className="biodata-page" style={{ background: '#f7fcfb', padding: '40px 48px' }}>
      <div className="absolute top-0 left-0 right-0"><BorderStrip color="#0f766e" /></div>
      <div className="absolute bottom-0 left-0 right-0"><BorderStrip color="#0f766e" /></div>
      <div className="absolute top-1 left-1"><FloralCorner color="#0f766e" size={110} /></div>
      <div className="absolute top-1 right-1"><FloralCorner color="#0f766e" size={110} rotate={90} /></div>
      <div className="absolute bottom-1 right-1"><FloralCorner color="#0f766e" size={110} rotate={180} /></div>
      <div className="absolute bottom-1 left-1"><FloralCorner color="#0f766e" size={110} rotate={270} /></div>

      <div className="relative">
        <div className="text-center pt-1 pb-2">
          {symbol && symbol !== 'none' && (
            <div className="w-16 h-16 mx-auto mb-1"><SymbolRenderer id={symbol} className="w-full h-full" /></div>
          )}
          <DividerOrnament color="#fbbf24" width={200} />
        </div>

        <div className="grid grid-cols-3 gap-5 mt-2">
          <div className="col-span-1">
            {photo && (
              <div className="p-[3px]" style={{ background: 'linear-gradient(135deg,#fbbf24,#0f766e)' }}>
                <div className="bg-white p-1">
                  <div className="photo-frame"><img src={photo} alt="" /></div>
                </div>
              </div>
            )}
            {data.fullName && (
              <div className="mt-2 bg-teal-50 border-l-4 border-teal-700 p-2 text-[12px]">
                <div className="font-semibold text-teal-900">{data.fullName}</div>
                {data.occupation && <div className="text-teal-800">{data.occupation}</div>}
                {data.education && <div className="text-teal-800">{data.education}</div>}
              </div>
            )}
          </div>
          <div className="col-span-2 min-w-0">
            <SectionHeader title="Personal Details" color="#0f766e" accent="#fbbf24" />
            <div className="grid grid-cols-2 gap-x-4">
              <div><RenderFields order={pL} catalog={FIELD_CATALOG} data={data} dense /></div>
              <div><RenderFields order={pR} catalog={FIELD_CATALOG} data={data} dense /></div>
            </div>
            <SectionHeader title="Family Details" color="#0f766e" accent="#fbbf24" />
            <div className="grid grid-cols-2 gap-x-4">
              <div><RenderFields order={fL} catalog={FAMILY_CATALOG} data={data} dense /></div>
              <div><RenderFields order={fR} catalog={FAMILY_CATALOG} data={data} dense /></div>
            </div>
            <SectionHeader title="Contact Details" color="#0f766e" accent="#fbbf24" />
            <RenderFields order={order.contact} catalog={CONTACT_CATALOG} data={data} dense />
          </div>
        </div>
      </div>
    </div>
  )
}
