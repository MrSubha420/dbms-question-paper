import { coKey, btKey } from '../data.js'

function Row({ tagClass, code, label }) {
  return (
    <>
      <dt className={`tag ${tagClass}`}>{code}</dt>
      <dd>{label}</dd>
    </>
  )
}

export default function Key() {
  return (
    <section className="panel key" id="p-key" aria-label="CO and BT key">
      <h2>Key</h2>
      <h3>Course Outcomes</h3>
      <dl className="kl">
        {coKey.map(({ code, label }) => (
          <Row key={code} tagClass="co" code={code} label={label} />
        ))}
      </dl>
      <h3>Bloom's Taxonomy</h3>
      <dl className="kl two">
        {btKey.map(({ code, label }) => (
          <Row key={code} tagClass="bt" code={code} label={label} />
        ))}
      </dl>
    </section>
  )
}
