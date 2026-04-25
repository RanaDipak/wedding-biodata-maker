import React, { useEffect } from 'react'

export default function PreviewModal({ open, onClose, children, title }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-start md:items-center justify-center p-4 overflow-auto no-print" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl max-w-[860px] w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="font-serif text-lg text-maroon">{title || 'Preview'}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 text-xl leading-none">×</button>
        </div>
        <div className="p-4 bg-gray-100 flex justify-center overflow-auto" style={{ maxHeight: '80vh' }}>
          <div style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
