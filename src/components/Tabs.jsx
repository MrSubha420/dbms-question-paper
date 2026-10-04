const TABS = [
  { id: 'paper', label: 'Paper' },
  { id: 'q', label: 'Questions' },
  { id: 'key', label: 'Key' },
]

export default function Tabs({ tab, onChange }) {
  return (
    <nav className="tabs" aria-label="Sections">
      {TABS.map(({ id, label }) => (
        <button key={id} type="button" aria-pressed={tab === id} onClick={() => onChange(id)}>
          {label}
        </button>
      ))}
    </nav>
  )
}
