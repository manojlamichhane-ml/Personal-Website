export default function CVSection({ experience }) {
  return (
    <section className="section" id="timeline">
      <h2>Timeline</h2>
      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={item.role + item.period}>
            <div className="period">{item.period}</div>
            <div>
              <h3>{item.role}</h3>
              <div className="org">{item.organization}</div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
