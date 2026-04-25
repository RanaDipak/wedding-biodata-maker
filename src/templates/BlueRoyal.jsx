import React from 'react'
import { RenderFields, splitHalves } from './Row.jsx'
import { SymbolRenderer } from '../components/SymbolPicker.jsx'
import { OrnateFrame, DividerOrnament, SectionHeader } from '../components/Ornaments.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function BlueRoyal({ data, order, photo, symbol }) {
  const [pL, pR] = splitHalves(order.personal, FIELD_CATALOG, data)
  const [fL, fR] = splitHalves(order.family, FAMILY_CATALOG, data)

  return (
    <div className="biodata-page" style={{ background: 'linear-gradient(180deg,#f0f6ff,#ffffff)', padding: '60px 64px' }}>
      <OrnateFrame color="#1e3a8a" />
      <div className="relative">
        <div className="text-center pb-2">
          {symbol && symbol !== 'none' && (
            <div className="w-16 h-16 mx-auto mb-1"><SymbolRenderer id={symbol} className="w-full h-full" /></div>
          )}
          <DividerOrnament color="#1e3a8a" width={200} />
        </div>
        <div className="flex gap-5 items-start">
          {photo && (
            <div className="w-[150px] shrink-0">
              <div className="border-4 p-1 bg-white" style={{ borderColor: '#1e3a8a' }}>
                <div className="photo-frame"><img src={photo} alt="" /></div>
              </div>
              {data.fullName && (
                <div className="text-center mt-2 font-serif text-[13px] font-semibold text-blue-900">{data.fullName}</div>
              )}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <SectionHeader title="Personal Details" color="#1e3a8a" accent="#3b82f6" />
            <div className="grid grid-cols-2 gap-x-5">
              <div><RenderFields order={pL} catalog={FIELD_CATALOG} data={data} dense /></div>
              <div><RenderFields order={pR} catalog={FIELD_CATALOG} data={data} dense /></div>
            </div>
          </div>
        </div>
        <SectionHeader title="Family Details" color="#1e3a8a" accent="#3b82f6" />
        <div className="grid grid-cols-2 gap-x-5">
          <div><RenderFields order={fL} catalog={FAMILY_CATALOG} data={data} dense /></div>
          <div><RenderFields order={fR} catalog={FAMILY_CATALOG} data={data} dense /></div>
        </div>
        <SectionHeader title="Contact Details" color="#1e3a8a" accent="#3b82f6" />
        <RenderFields order={order.contact} catalog={CONTACT_CATALOG} data={data} dense />
      </div>
    </div>
  )
}
