import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Add debugging
console.log('🚀 Wedding Biodata Maker - Loading...')
console.log('React version:', React.version)

// Show a loading message immediately
const rootElement = document.getElementById('root')
if (rootElement) {
  rootElement.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: 'Playfair Display', Georgia, serif; background: #efe4d2;">
      <div style="width: 50px; height: 50px; border: 4px solid #d4af37; border-top: 4px solid transparent; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 20px;"></div>
      <div style="color: #800020; font-size: 18px; font-weight: bold;">Loading Wedding Biodata Maker...</div>
      <style>
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      </style>
    </div>
  `
}

// Error boundary to catch and display errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // Hide loading screen on error
    const loading = document.getElementById('loading')
    if (loading) {
      loading.classList.add('hidden')
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#800020' }}>Something went wrong</h1>
          <p style={{ color: '#666' }}>Please refresh the page or try again later.</p>
          {this.state.error && (
            <details style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5' }}>
              <summary>Error details</summary>
              <pre style={{ marginTop: '10px', fontSize: '12px' }}>
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
