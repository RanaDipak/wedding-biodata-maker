import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const A4_MM = { w: 210, h: 297 }

const PRINT_STYLE = `
  * {
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
    word-spacing: 0.06em !important;
    letter-spacing: normal !important;
    font-feature-settings: "kern" 0, "liga" 0, "calt" 0 !important;
    font-kerning: none !important;
  }
  .biodata-page, .biodata-page * {
    font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif !important;
  }
  .row-kv .k, .row-kv .v, .label, .input, body, button, summary {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
  }
  .biodata-page h1, .biodata-page h2, .biodata-page h3,
  .biodata-page .font-serif, .biodata-page .font-script {
    font-family: 'Playfair Display', 'Georgia', serif !important;
  }
  img { image-rendering: -webkit-optimize-contrast; }
`

async function renderCanvas(element, scale = 3) {
  await document.fonts?.ready
  return html2canvas(element, {
    scale,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
    letterRendering: true,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
    onclone: (clonedDoc) => {
      const style = clonedDoc.createElement('style')
      style.textContent = PRINT_STYLE
      clonedDoc.head.appendChild(style)
    },
  })
}

export async function downloadPdf(element, filename = 'biodata.pdf') {
  if (!element) return
  const canvas = await renderCanvas(element, 3)
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true })

  let imgWmm = A4_MM.w
  let imgHmm = (canvas.height * imgWmm) / canvas.width
  const imgData = canvas.toDataURL('image/jpeg', 0.97)

  // If content slightly overflows, scale down to fit single page (avoid orphan-line page 2)
  if (imgHmm > A4_MM.h) {
    const scale = A4_MM.h / imgHmm
    imgWmm = A4_MM.w * scale
    imgHmm = A4_MM.h
    const offsetX = (A4_MM.w - imgWmm) / 2
    pdf.addImage(imgData, 'JPEG', offsetX, 0, imgWmm, imgHmm, undefined, 'SLOW')
  } else {
    pdf.addImage(imgData, 'JPEG', 0, 0, imgWmm, imgHmm, undefined, 'SLOW')
  }
  pdf.save(filename)
}

export async function downloadImage(element, filename = 'biodata.png') {
  if (!element) return
  const canvas = await renderCanvas(element, 3)
  const link = document.createElement('a')
  link.download = filename
  link.href = canvas.toDataURL('image/png')
  link.click()
}
