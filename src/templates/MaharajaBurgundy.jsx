import React from 'react'
import { RenderFields, splitHalves } from './Row.jsx'
import { SymbolRenderer } from '../components/SymbolPicker.jsx'
import { OrnateFrame, DividerOrnament, SectionHeader } from '../components/Ornaments.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function MaharajaBurgundy({ data, order, photo, symbol }) {
  const [pL, pR] = splitHalves(order.personal, FIELD_CATALOG, data)
  const [fL, fR] = splitHalves(order.family, FAMILY_CATALOG, data)

  return (
    <div className="biodata-page" style={{ background: 'radial-gradient(ellipse at top,#fbeae0,#f3d4c0)', padding: '60px 64px' }}>
      <OrnateFrame color="#5a0814" />
      <div className="relative">
        <div className="text-center pb-2">
          {symbol && symbol !== 'none' && (
            <div className="w-20 h-20 mx-auto mb-1"><SymbolRenderer id={symbol} className="w-full h-full" /></div>
          )}
          <DividerOrnament color="#b8860b" width={220} />
        </div>
        <div className="flex gap-5 items-start mt-1">
          {photo && (
            <div className="w-[160px] shrink-0">
              <div className="p-[3px]" style={{ background: 'linear-gradient(135deg,#f4cf6e,#5a0814)' }}>
                <div className="bg-white p-1">
                  <div className="photo-frame"><img src={photo} alt="" /></div>
                </div>
              </div>
              {data.fullName && (
                <div className="text-center mt-2 font-serif text-[13px] font-semibold" style={{ color: '#5a0814' }}>{data.fullName}</div>
              )}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <SectionHeader title="Personal Details" color="#5a0814" accent="#b8860b" />
            <div className="grid grid-cols-2 gap-x-5">
              <div><RenderFields order={pL} catalog={FIELD_CATALOG} data={data} dense /></div>
              <div><RenderFields order={pR} catalog={FIELD_CATALOG} data={data} dense /></div>
            </div>
          </div>
        </div>
        <SectionHeader title="Family Details" color="#5a0814" accent="#b8860b" />
        <div className="grid grid-cols-2 gap-x-5">
          <div><RenderFields order={fL} catalog={FAMILY_CATALOG} data={data} dense /></div>
          <div><RenderFields order={fR} catalog={FAMILY_CATALOG} data={data} dense /></div>
        </div>
        <SectionHeader title="Contact Details" color="#5a0814" accent="#b8860b" />
        <RenderFields order={order.contact} catalog={CONTACT_CATALOG} data={data} dense />
      </div>
    </div>
  )
}
