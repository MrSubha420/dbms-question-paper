import { useState } from 'react'
import Header from './components/Header.jsx'
import PaperInfo from './components/PaperInfo.jsx'
import Key from './components/Key.jsx'
import Questions from './components/Questions.jsx'
import Tabs from './components/Tabs.jsx'

export default function App() {
  // On narrow screens only one panel shows at a time; on desktop all are visible.
  const [tab, setTab] = useState('paper')
  return (
    <div className="app" data-tab={tab}>
      <Header />
      <div className="stage">
        <aside className="side">
          <PaperInfo />
          <Key />
        </aside>
        <Questions />
      </div>
      <Tabs tab={tab} onChange={setTab} />
    </div>
  )
}
