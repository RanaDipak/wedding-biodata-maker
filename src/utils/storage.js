const KEY = 'wbm:data:v2'

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (error) {
    console.error('Error loading state from localStorage:', error)
    return null
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch (error) {
    console.error('Error saving state to localStorage:', error)
  }
}
