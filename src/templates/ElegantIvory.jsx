import React from 'react'
import { RenderFields, splitHalves } from './Row.jsx'
import { SymbolRenderer } from '../components/SymbolPicker.jsx'
import { FloralCorner, DividerOrnament, SectionHeader } from '../components/Ornaments.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function ElegantIvory({ data, order, photo, symbol }) {
  const [pL, pR] = splitHalves(order.personal, FIELD_CATALOG, data)
  const [fL, fR] = splitHalves(order.family, FAMILY_CATALOG, data)

  return (
    <div className="biodata-page" style={{ background: '#fbf7ee', padding: '50px 56px' }}>
      <div className="absolute inset-4 border pointer-events-none rounded" style={{ borderColor: 'rgba(122,90,26,0.55)' }} />
      <div className="absolute inset-6 border pointer-events-none rounded" style={{ borderColor: 'rgba(122,90,26,0.3)' }} />
      <div className="absolute top-1 left-1"><FloralCorner color="#7a5a1a" size={120} /></div>
      <div className="absolute top-1 right-1"><FloralCorner color="#7a5a1a" size={120} rotate={90} /></div>
      <div className="absolute bottom-1 right-1"><FloralCorner color="#7a5a1a" size={120} rotate={180} /></div>
      <div className="absolute bottom-1 left-1"><FloralCorner color="#7a5a1a" size={120} rotate={270} /></div>

      <div className="relative">
        <div className="text-center pb-2">
          {symbol && symbol !== 'none' && (
            <div className="w-16 h-16 mx-auto mb-1"><SymbolRenderer id={symbol} className="w-full h-full" /></div>
          )}
          <DividerOrnament color="#7a5a1a" width={200} />
        </div>
        <div className="flex gap-5 items-start">
          <div className="flex-1 min-w-0">
            <SectionHeader title="Personal Details" color="#5a3a14" accent="#7a5a1a" />
            <div className="grid grid-cols-2 gap-x-5">
              <div><RenderFields order={pL} catalog={FIELD_CATALOG} data={data} dense /></div>
              <div><RenderFields order={pR} catalog={FIELD_CATALOG} data={data} dense /></div>
            </div>
          </div>
          {photo && (
            <div className="w-[150px] shrink-0">
              <div className="border-2 p-1 bg-white" style={{ borderColor: '#7a5a1a' }}>
                <div className="photo-frame"><img src={photo} alt="" /></div>
              </div>
              {data.fullName && (
                <div className="text-center mt-2 font-serif text-[13px] font-semibold text-amber-900">{data.fullName}</div>
              )}
            </div>
          )}
        </div>
        <SectionHeader title="Family Details" color="#5a3a14" accent="#7a5a1a" />
        <div className="grid grid-cols-2 gap-x-5">
          <div><RenderFields order={fL} catalog={FAMILY_CATALOG} data={data} dense /></div>
          <div><RenderFields order={fR} catalog={FAMILY_CATALOG} data={data} dense /></div>
        </div>
        <SectionHeader title="Contact Details" color="#5a3a14" accent="#7a5a1a" />
        <RenderFields order={order.contact} catalog={CONTACT_CATALOG} data={data} dense />
      </div>
    </div>
  )
}
