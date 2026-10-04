import { questions } from '../data.js'

function Schema({ relations }) {
  const pad = Math.max(...relations.map((r) => r.name.length))
  return (
    <pre className="schema">
      {relations.map((r, i) => (
        <span key={r.name}>
          <span className="rel">{r.name}</span>
          {' '.repeat(pad - r.name.length + 1)}(
          {r.attrs.map((a, j) => (
            <span key={a.n + j}>
              {a.pk ? <u>{a.n}</u> : a.n}
              {j < r.attrs.length - 1 ? ', ' : ''}
            </span>
          ))}
          ){i < relations.length - 1 ? '\n' : ''}
        </span>
      ))}
    </pre>
  )
}

function Question({ q }) {
  return (
    <li className="q">
      <div className="qbody">
        <p>{q.text}</p>
        {q.schema && <Schema relations={q.schema} />}
        {q.parts && (
          <ol className="parts" type="a">
            {q.parts.map((p) => <li key={p}>{p}</li>)}
          </ol>
        )}
      </div>
      <div className="tags">
        <span className="tag co">{q.co}</span>
        <span className="tag bt">{q.bt}</span>
        <span className="tag mk">{q.marks} marks</span>
      </div>
    </li>
  )
}

export default function Questions() {
  return (
    <main className="panel qs" id="p-q" aria-label="Questions">
      <ol className="qlist">
        {questions.map((q) => <Question key={q.id} q={q} />)}
      </ol>
    </main>
  )
}
