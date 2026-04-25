import React from 'react'
import { RenderFields, splitHalves } from './Row.jsx'
import { SymbolRenderer } from '../components/SymbolPicker.jsx'
import { OrnateFrame, DividerOrnament, SectionHeader } from '../components/Ornaments.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function MehendiGreen({ data, order, photo, symbol }) {
  const [pL, pR] = splitHalves(order.personal, FIELD_CATALOG, data)
  const [fL, fR] = splitHalves(order.family, FAMILY_CATALOG, data)

  return (
    <div className="biodata-page" style={{ background: 'linear-gradient(135deg,#f4f1e1,#e8e0c4)', padding: '60px 64px' }}>
      <OrnateFrame color="#5b6e2c" />
      <div className="relative">
        <div className="text-center pb-2">
          {symbol && symbol !== 'none' && (
            <div className="w-20 h-20 mx-auto mb-1"><SymbolRenderer id={symbol} className="w-full h-full" /></div>
          )}
          <DividerOrnament color="#5b6e2c" width={220} />
        </div>
        <div className="flex gap-5 items-start mt-1">
          <div className="flex-1 min-w-0">
            <SectionHeader title="Personal Details" color="#3f4d1f" accent="#5b6e2c" />
            <div className="grid grid-cols-2 gap-x-5">
              <div><RenderFields order={pL} catalog={FIELD_CATALOG} data={data} dense /></div>
              <div><RenderFields order={pR} catalog={FIELD_CATALOG} data={data} dense /></div>
            </div>
          </div>
          {photo && (
            <div className="w-[160px] shrink-0">
              <div className="p-[3px]" style={{ background: 'linear-gradient(135deg,#cdb45a,#5b6e2c)' }}>
                <div className="bg-white p-1">
                  <div className="photo-frame"><img src={photo} alt="" /></div>
                </div>
              </div>
              {data.fullName && (
                <div className="text-center mt-2 font-serif text-[13px] font-semibold" style={{ color: '#3f4d1f' }}>{data.fullName}</div>
              )}
            </div>
          )}
        </div>
        <SectionHeader title="Family Details" color="#3f4d1f" accent="#5b6e2c" />
        <div className="grid grid-cols-2 gap-x-5">
          <div><RenderFields order={fL} catalog={FAMILY_CATALOG} data={data} dense /></div>
          <div><RenderFields order={fR} catalog={FAMILY_CATALOG} data={data} dense /></div>
        </div>
        <SectionHeader title="Contact Details" color="#3f4d1f" accent="#5b6e2c" />
        <RenderFields order={order.contact} catalog={CONTACT_CATALOG} data={data} dense />
      </div>
    </div>
  )
}
