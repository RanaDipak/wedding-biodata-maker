import React from 'react'
import DynamicSection from './DynamicSection.jsx'
import SymbolPicker from './SymbolPicker.jsx'
import { FIELD_CATALOG, FAMILY_CATALOG, CONTACT_CATALOG } from '../data/fieldDefs.js'

export default function BiodataForm({ state, setState }) {
  const onPhoto = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setState((s) => ({ ...s, photo: reader.result }))
    reader.readAsDataURL(file)
  }

  const updateData = (data) => setState((s) => ({ ...s, data }))
  const updateOrder = (section) => (order) =>
    setState((s) => ({ ...s, order: { ...s.order, [section]: order } }))

  return (
    <div className="space-y-5">
      {/* Religious Symbol */}
      <details open className="bg-white border border-gray-200 rounded-lg">
        <summary className="cursor-pointer px-3 py-2.5 flex items-center justify-between">
          <span className="font-bold text-gray-800">Religious Symbol</span>
          <span className="text-gray-400">▾</span>
        </summary>
        <div className="px-3 pb-3">
          <SymbolPicker
            value={state.symbol}
            onChange={(v) => setState((s) => ({ ...s, symbol: v }))}
          />
        </div>
      </details>

      {/* Photo */}
      <details open className="bg-white border border-gray-200 rounded-lg">
        <summary className="cursor-pointer px-3 py-2.5 font-bold text-gray-800">Profile Photo</summary>
        <div className="px-3 pb-3 flex items-center gap-3">
          {state.photo && (
            <img src={state.photo} alt="preview" className="w-20 h-20 rounded object-cover border" />
          )}
          <input type="file" accept="image/*" onChange={onPhoto} className="text-sm" />
          {state.photo && (
            <button
              type="button"
              className="text-xs text-red-600 underline"
              onClick={() => setState((s) => ({ ...s, photo: '' }))}
            >
              Remove
            </button>
          )}
        </div>
      </details>

      {/* Personal */}
      <details open className="bg-white border border-gray-200 rounded-lg">
        <summary className="cursor-pointer px-3 py-2.5 font-bold text-gray-800">Personal Details</summary>
        <div className="px-3 pb-3">
          <DynamicSection
            title="Fields"
            catalog={FIELD_CATALOG}
            order={state.order.personal}
            data={state.data}
            onChange={updateData}
            onOrderChange={updateOrder('personal')}
          />
        </div>
      </details>

      {/* Family */}
      <details open className="bg-white border border-gray-200 rounded-lg">
        <summary className="cursor-pointer px-3 py-2.5 font-bold text-gray-800">Family Details</summary>
        <div className="px-3 pb-3">
          <DynamicSection
            title="Fields"
            catalog={FAMILY_CATALOG}
            order={state.order.family}
            data={state.data}
            onChange={updateData}
            onOrderChange={updateOrder('family')}
          />
        </div>
      </details>

      {/* Contact */}
      <details open className="bg-white border border-gray-200 rounded-lg">
        <summary className="cursor-pointer px-3 py-2.5 font-bold text-gray-800">Contact Details</summary>
        <div className="px-3 pb-3">
          <DynamicSection
            title="Fields"
            catalog={CONTACT_CATALOG}
            order={state.order.contact}
            data={state.data}
            onChange={updateData}
            onOrderChange={updateOrder('contact')}
          />
        </div>
      </details>
    </div>
  )
}
