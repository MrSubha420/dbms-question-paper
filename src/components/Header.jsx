import { institute, paper } from '../data.js'

export default function Header() {
  const pdfHref = import.meta.env.BASE_URL + paper.pdf
  return (
    <header className="bar">
      <div className="id">
        <p className="inst">{institute.name}</p>
        <p className="acc">
          {institute.accreditation} <i>|</i> {institute.ranking}
        </p>
      </div>
      <div className="actions">
        <a className="btn" href={pdfHref} download>Download PDF</a>
        <button className="btn ghost" type="button" onClick={() => window.print()}>Print</button>
      </div>
    </header>
  )
}
