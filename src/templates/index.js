import ClassicGold from './ClassicGold.jsx'
import RoyalMaroon from './RoyalMaroon.jsx'
import ModernMinimal from './ModernMinimal.jsx'
import FloralPink from './FloralPink.jsx'
import PeacockTeal from './PeacockTeal.jsx'
import ElegantIvory from './ElegantIvory.jsx'
import EmeraldLeaf from './EmeraldLeaf.jsx'
import BlueRoyal from './BlueRoyal.jsx'
import MaharajaBurgundy from './MaharajaBurgundy.jsx'
import MehendiGreen from './MehendiGreen.jsx'

export const templates = [
  { id: 'classic', num: '01', name: 'Classic Gold', component: ClassicGold, gradient: 'linear-gradient(135deg,#fff3c4,#f6b93b)' },
  { id: 'maharaja', num: '02', name: 'Maharaja Burgundy', component: MaharajaBurgundy, gradient: 'linear-gradient(135deg,#fbeae0,#5a0814)' },
  { id: 'royal', num: '03', name: 'Royal Maroon', component: RoyalMaroon, gradient: 'linear-gradient(135deg,#fffaf3,#7a1226)' },
  { id: 'floral', num: '04', name: 'Floral Pink', component: FloralPink, gradient: 'linear-gradient(135deg,#fde8ef,#c54683)' },
  { id: 'mehendi', num: '05', name: 'Mehendi Green', component: MehendiGreen, gradient: 'linear-gradient(135deg,#f4f1e1,#5b6e2c)' },
  { id: 'ivory', num: '06', name: 'Elegant Ivory', component: ElegantIvory, gradient: 'linear-gradient(135deg,#fbf7ee,#7a5a1a)' },
  { id: 'emerald', num: '07', name: 'Emerald Leaf', component: EmeraldLeaf, gradient: 'linear-gradient(135deg,#f3faf3,#065f46)' },
  { id: 'blue', num: '08', name: 'Blue Royal', component: BlueRoyal, gradient: 'linear-gradient(135deg,#f0f6ff,#1e3a8a)' },
  { id: 'peacock', num: '09', name: 'Peacock Teal', component: PeacockTeal, gradient: 'linear-gradient(135deg,#f7fcfb,#0f766e)' },
  { id: 'modern', num: '10', name: 'Modern Minimal', component: ModernMinimal, gradient: 'linear-gradient(135deg,#f5f5f5,#1f2937)' },
]

export function getTemplate(id) {
  return templates.find((t) => t.id === id) || templates[0]
}
