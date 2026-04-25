import React from 'react'
import { RenderFields, splitHalves } from './Row.jsx'
import { SymbolRenderer } from '../components/SymbolPicker.jsx'
import { OrnateFrame, DividerOrnament, SectionHeader } from '../components/Ornaments.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function ClassicGold({ data, order, photo, symbol }) {
  const [pL, pR] = splitHalves(order.personal, FIELD_CATALOG, data)
  const [fL, fR] = splitHalves(order.family, FAMILY_CATALOG, data)

  return (
    <div
      className="biodata-page"
      style={{
        background: 'radial-gradient(ellipse at top, #fffaee 0%, #fdf2dc 100%)',
        padding: '60px 64px',
      }}
    >
      <OrnateFrame color="#b8860b" />

      <div className="relative">
        <div className="text-center pt-2 pb-3">
          {symbol && symbol !== 'none' && (
            <div className="w-20 h-20 mx-auto mb-1 flex items-center justify-center">
              <SymbolRenderer id={symbol} className="w-full h-full" />
            </div>
          )}
          <DividerOrnament color="#b8860b" width={220} />
        </div>

        <div className="flex gap-5 items-start">
          <div className="flex-1 min-w-0">
            <SectionHeader title="Personal Details" />
            <div className="grid grid-cols-2 gap-x-6">
              <div><RenderFields order={pL} catalog={FIELD_CATALOG} data={data} dense /></div>
              <div><RenderFields order={pR} catalog={FIELD_CATALOG} data={data} dense /></div>
            </div>
          </div>
          {photo && (
            <div className="w-[170px] shrink-0">
              <div
                className="p-[3px] rounded-sm"
                style={{ background: 'linear-gradient(135deg,#f4cf6e,#b8860b 50%,#f4cf6e)' }}
              >
                <div className="bg-white p-1 rounded-sm">
                  <div className="photo-frame">
                    <img src={photo} alt="" />
                  </div>
                </div>
              </div>
              {data.fullName && (
                <div
                  className="text-center mt-2 font-serif text-[14px] font-semibold"
                  style={{ color: '#7a1226' }}
                >
                  {data.fullName}
                </div>
              )}
            </div>
          )}
        </div>

        <SectionHeader title="Family Details" />
        <div className="grid grid-cols-2 gap-x-6">
          <div><RenderFields order={fL} catalog={FAMILY_CATALOG} data={data} dense /></div>
          <div><RenderFields order={fR} catalog={FAMILY_CATALOG} data={data} dense /></div>
        </div>

        <SectionHeader title="Contact Details" />
        <RenderFields order={order.contact} catalog={CONTACT_CATALOG} data={data} dense />
      </div>
    </div>
  )
}
