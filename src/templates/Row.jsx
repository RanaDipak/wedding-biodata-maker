import React from 'react'

export default function Row({ label, value, dense = false }) {
  if (!value) return null
  return (
    <div className={`row-kv ${dense ? 'row-kv-dense' : ''}`}>
      <div className="k">{label}</div>
      <div className="v">{value}</div>
    </div>
  )
}

export function RenderFields({ order, catalog, data, dense = false }) {
  return order.map((key) => {
    const def = catalog[key]
    if (!def) return null
    return <Row key={key} label={def.label} value={data[key]} dense={dense} />
  })
}

// Split fields, accounting for which fields actually have values,
// so left and right columns end up balanced.
export function splitHalves(order, catalog, data) {
  const visible = order.filter((k) => catalog[k] && data[k])
  const mid = Math.ceil(visible.length / 2)
  const leftSet = new Set(visible.slice(0, mid))
  const rightSet = new Set(visible.slice(mid))
  return [
    order.filter((k) => leftSet.has(k)),
    order.filter((k) => rightSet.has(k)),
  ]
}
