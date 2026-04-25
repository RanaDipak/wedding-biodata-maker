import React from 'react'
import { RenderFields } from './Row.jsx'
import { SymbolRenderer } from '../components/SymbolPicker.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function ModernMinimal({ data, order, photo, symbol }) {
  return (
    <div className="biodata-page" style={{ background: '#fff', padding: '40px 48px' }}>
      <div className="flex items-start gap-6 pb-4 border-b-2 border-gray-900">
        <div className="flex-1">
          {symbol && symbol !== 'none' && (
            <div className="w-10 h-10 mb-2"><SymbolRenderer id={symbol} className="w-full h-full" /></div>
          )}
          <div className="text-[10px] tracking-[0.35em] text-gray-500 uppercase">Marriage Biodata</div>
          <h1 className="font-serif text-[36px] font-bold mt-1 text-gray-900 leading-tight">
            {data.fullName || 'Your Name'}
          </h1>
          <div className="mt-1 text-gray-600 text-[12px]">
            {[data.occupation, data.education].filter(Boolean).join(' · ')}
          </div>
        </div>
        {photo && (
          <div className="w-28">
            <div className="photo-frame rounded-full border border-gray-200">
              <img src={photo} alt="" className="rounded-full" />
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-x-8 mt-5">
        <section>
          <h2 className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-2 font-bold">Personal</h2>
          <RenderFields order={order.personal} catalog={FIELD_CATALOG} data={data} dense />
        </section>
        <section>
          <h2 className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-2 font-bold">Family</h2>
          <RenderFields order={order.family} catalog={FAMILY_CATALOG} data={data} dense />
          <h2 className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mt-5 mb-2 font-bold">Contact</h2>
          <RenderFields order={order.contact} catalog={CONTACT_CATALOG} data={data} dense />
        </section>
      </div>
    </div>
  )
}
