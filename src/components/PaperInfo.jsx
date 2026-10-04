import { paper, questions } from '../data.js'

export default function PaperInfo() {
  const each = questions[0].marks
  const total = questions.reduce((sum, q) => sum + q.marks, 0)
  const facts = [
    ['Time', paper.time],
    ['Questions', questions.length],
    ['Marks each', each],
    ['Total marks', total],
  ]
  return (
    <section className="panel" id="p-paper" aria-label="Paper details">
      <h1>{paper.subject}</h1>
      <p className="lead">{paper.title}</p>
      <dl className="facts">
        {facts.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p className="instr">{paper.instructions}</p>
    </section>
  )
}
