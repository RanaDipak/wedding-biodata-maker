import React from 'react'
import { religiousSymbols } from '../data/symbols.js'

export default function SymbolPicker({ value, onChange }) {
  return (
    <div>
      <div className="text-xs text-gray-600 mb-2">
        Select a religious symbol to display at the top of your marriage biodata:
      </div>
      <div className="grid grid-cols-4 gap-2">
        {religiousSymbols.map((s) => {
          const selected = value === s.id
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onChange(s.id)}
              title={s.name}
              className={`aspect-square rounded-md border-2 bg-white flex items-center justify-center p-2 transition ${
                selected
                  ? 'border-saffron ring-2 ring-saffron/30 bg-orange-50'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              {s.svg ? (
                <span className="w-full h-full flex items-center justify-center" dangerouslySetInnerHTML={{ __html: s.svg }} />
              ) : (
                <span className="text-xs text-gray-400">None</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function SymbolRenderer({ id, className = '' }) {
  const s = religiousSymbols.find((x) => x.id === id)
  if (!s || !s.svg) return null
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      dangerouslySetInnerHTML={{ __html: s.svg }}
    />
  )
}
