import React from 'react'
import { RenderFields, splitHalves } from './Row.jsx'
import { SymbolRenderer } from '../components/SymbolPicker.jsx'
import { FloralCorner, BorderStrip, SectionHeader, DividerOrnament } from '../components/Ornaments.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function RoyalMaroon({ data, order, photo, symbol }) {
  const [pL, pR] = splitHalves(order.personal, FIELD_CATALOG, data)
  const [fL, fR] = splitHalves(order.family, FAMILY_CATALOG, data)

  return (
    <div className="biodata-page" style={{ background: '#fffaf3', padding: '40px 48px' }}>
      <div className="absolute inset-3 border pointer-events-none rounded" style={{ borderColor: '#7a1226' }} />
      <div className="absolute top-0 left-0 right-0"><BorderStrip color="#7a1226" /></div>
      <div className="absolute bottom-0 left-0 right-0"><BorderStrip color="#7a1226" /></div>
      <div className="absolute top-1 left-1"><FloralCorner color="#7a1226" size={110} /></div>
      <div className="absolute top-1 right-1"><FloralCorner color="#7a1226" size={110} rotate={90} /></div>
      <div className="absolute bottom-1 right-1"><FloralCorner color="#7a1226" size={110} rotate={180} /></div>
      <div className="absolute bottom-1 left-1"><FloralCorner color="#7a1226" size={110} rotate={270} /></div>

      <div className="relative">
        <div className="text-center pt-1 pb-2">
          {symbol && symbol !== 'none' && (
            <div className="w-20 h-20 mx-auto mb-1"><SymbolRenderer id={symbol} className="w-full h-full" /></div>
          )}
          <DividerOrnament color="#b8860b" width={200} />
        </div>

        <div className="flex gap-5 items-start mt-1">
          {photo && (
            <div className="w-[160px] shrink-0">
              <div className="p-[3px]" style={{ background: 'linear-gradient(135deg,#f4cf6e,#b8860b)' }}>
                <div className="bg-white p-1">
                  <div className="photo-frame"><img src={photo} alt="" /></div>
                </div>
              </div>
              {data.fullName && (
                <div className="text-center mt-2 font-serif text-[13px] font-semibold text-[#7a1226]">{data.fullName}</div>
              )}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <SectionHeader title="Personal Details" />
            <div className="grid grid-cols-2 gap-x-5">
              <div><RenderFields order={pL} catalog={FIELD_CATALOG} data={data} dense /></div>
              <div><RenderFields order={pR} catalog={FIELD_CATALOG} data={data} dense /></div>
            </div>
          </div>
        </div>

        <SectionHeader title="Family Details" />
        <div className="grid grid-cols-2 gap-x-5">
          <div><RenderFields order={fL} catalog={FAMILY_CATALOG} data={data} dense /></div>
          <div><RenderFields order={fR} catalog={FAMILY_CATALOG} data={data} dense /></div>
        </div>

        <SectionHeader title="Contact Details" />
        <RenderFields order={order.contact} catalog={CONTACT_CATALOG} data={data} dense />
      </div>
    </div>
  )
}
