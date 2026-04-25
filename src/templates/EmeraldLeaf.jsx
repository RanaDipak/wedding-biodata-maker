import React from 'react'
import { RenderFields, splitHalves } from './Row.jsx'
import { SymbolRenderer } from '../components/SymbolPicker.jsx'
import { FloralCorner, SectionHeader, DividerOrnament } from '../components/Ornaments.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function EmeraldLeaf({ data, order, photo, symbol }) {
  const [pL, pR] = splitHalves(order.personal, FIELD_CATALOG, data)
  const [fL, fR] = splitHalves(order.family, FAMILY_CATALOG, data)

  return (
    <div className="biodata-page" style={{ background: '#f3faf3', padding: '50px 56px' }}>
      <div className="absolute inset-3 border-[3px] border-double pointer-events-none rounded" style={{ borderColor: '#065f46' }} />
      <div className="absolute top-1 left-1"><FloralCorner color="#065f46" size={120} /></div>
      <div className="absolute top-1 right-1"><FloralCorner color="#065f46" size={120} rotate={90} /></div>
      <div className="absolute bottom-1 right-1"><FloralCorner color="#065f46" size={120} rotate={180} /></div>
      <div className="absolute bottom-1 left-1"><FloralCorner color="#065f46" size={120} rotate={270} /></div>

      <div className="relative">
        <div className="text-center pb-2">
          {symbol && symbol !== 'none' && (
            <div className="w-16 h-16 mx-auto mb-1"><SymbolRenderer id={symbol} className="w-full h-full" /></div>
          )}
          <DividerOrnament color="#10b981" width={200} />
        </div>
        <div className="flex gap-5 items-start">
          {photo && (
            <div className="w-[150px] shrink-0">
              <div className="border-4 p-1 bg-white shadow-md" style={{ borderColor: '#047857' }}>
                <div className="photo-frame"><img src={photo} alt="" /></div>
              </div>
              {data.fullName && (
                <div className="text-center mt-2 font-serif text-[13px] font-semibold text-emerald-800">{data.fullName}</div>
              )}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <SectionHeader title="Personal Details" color="#065f46" accent="#10b981" />
            <div className="grid grid-cols-2 gap-x-5">
              <div><RenderFields order={pL} catalog={FIELD_CATALOG} data={data} dense /></div>
              <div><RenderFields order={pR} catalog={FIELD_CATALOG} data={data} dense /></div>
            </div>
          </div>
        </div>
        <SectionHeader title="Family Details" color="#065f46" accent="#10b981" />
        <div className="grid grid-cols-2 gap-x-5">
          <div><RenderFields order={fL} catalog={FAMILY_CATALOG} data={data} dense /></div>
          <div><RenderFields order={fR} catalog={FAMILY_CATALOG} data={data} dense /></div>
        </div>
        <SectionHeader title="Contact Details" color="#065f46" accent="#10b981" />
        <RenderFields order={order.contact} catalog={CONTACT_CATALOG} data={data} dense />
      </div>
    </div>
  )
}
