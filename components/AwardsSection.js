export default function AwardsSection({ awards }) {
  return (
    <section className="section" id="awards">
      <h2>Awards</h2>
      <div className="row-list">
        {awards.map((award) => (
          <div key={award.title}>
            <p className="row-title">{award.title}</p>
            <p className="row-meta">
              {award.issuer} — {award.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
