import React from 'react'
import { RenderFields, splitHalves } from './Row.jsx'
import { SymbolRenderer } from '../components/SymbolPicker.jsx'
import { OrnateFrame, DividerOrnament, SectionHeader } from '../components/Ornaments.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function FloralPink({ data, order, photo, symbol }) {
  const [pL, pR] = splitHalves(order.personal, FIELD_CATALOG, data)
  const [fL, fR] = splitHalves(order.family, FAMILY_CATALOG, data)

  return (
    <div className="biodata-page" style={{ background: 'linear-gradient(135deg,#fff5f7 0%,#fde8ef 100%)', padding: '60px 64px' }}>
      <OrnateFrame color="#c54683" />
      <div className="relative">
        <div className="text-center pb-2">
          {symbol && symbol !== 'none' && (
            <div className="w-16 h-16 mx-auto mb-1"><SymbolRenderer id={symbol} className="w-full h-full" /></div>
          )}
          <DividerOrnament color="#c54683" width={200} />
        </div>
        <div className="flex gap-5 items-start mt-1">
          {photo && (
            <div className="w-[150px] shrink-0">
              <div className="p-[3px] rounded-full" style={{ background: 'linear-gradient(135deg,#f7c8d8,#c54683)' }}>
                <div className="bg-white p-1 rounded-full">
                  <div className="photo-frame rounded-full"><img src={photo} alt="" className="rounded-full" /></div>
                </div>
              </div>
              {data.fullName && (
                <div className="text-center mt-2 font-serif text-[13px] font-semibold text-rose-800">{data.fullName}</div>
              )}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <SectionHeader title="Personal Details" color="#9d174d" accent="#c54683" />
            <div className="grid grid-cols-2 gap-x-5">
              <div><RenderFields order={pL} catalog={FIELD_CATALOG} data={data} dense /></div>
              <div><RenderFields order={pR} catalog={FIELD_CATALOG} data={data} dense /></div>
            </div>
          </div>
        </div>
        <SectionHeader title="Family Details" color="#9d174d" accent="#c54683" />
        <div className="grid grid-cols-2 gap-x-5">
          <div><RenderFields order={fL} catalog={FAMILY_CATALOG} data={data} dense /></div>
          <div><RenderFields order={fR} catalog={FAMILY_CATALOG} data={data} dense /></div>
        </div>
        <SectionHeader title="Contact Details" color="#9d174d" accent="#c54683" />
        <RenderFields order={order.contact} catalog={CONTACT_CATALOG} data={data} dense />
      </div>
    </div>
  )
}
