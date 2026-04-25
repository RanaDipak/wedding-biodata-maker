import React from 'react'
import { templates } from '../templates/index.js'

export default function TemplatePicker({ selectedId, onSelect, onPreview }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-amber-500 text-lg">★</span>
        <h2 className="font-serif text-lg text-maroon font-bold">Popular Templates</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {templates.map((t) => {
          const selected = selectedId === t.id
          return (
            <div
              key={t.id}
              className={`group relative border-2 rounded-md overflow-hidden bg-white transition cursor-pointer ${
                selected ? 'border-saffron shadow-md' : 'border-gray-200 hover:border-gray-400'
              }`}
              onClick={() => onSelect(t.id)}
            >
              <div className="absolute top-1 left-1 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
                #{t.num}
              </div>
              <div className="h-28" style={{ background: t.gradient }} />
              <div className="px-2 py-1.5 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-700">{t.name}</span>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); onPreview?.(t.id) }}
                  className="text-[10px] text-saffron hover:underline font-semibold"
                >
                  Preview
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
