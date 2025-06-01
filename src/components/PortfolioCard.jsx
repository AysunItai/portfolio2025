function PortfolioCard({ name, description, live, bcolor }) {
  return (
    <div
      className="project-card"
      style={{ backgroundColor: bcolor, minHeight: '180px', padding: '24px', borderRadius: '16px', margin: '12px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <div>
        <p className="projectTitle" style={{ fontWeight: 600, fontSize: "1.2rem", marginBottom: "8px" }}>{name}</p>
        <p className="projectDescription" style={{ fontSize: "1rem", color: "#444" }}>{description}</p>
      </div>
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="animated-button2"
          style={{
            marginTop: '16px',
            padding: '8px 20px',
            borderRadius: '8px',
            background: '#0fa5e9',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 500,
            display: 'inline-block',
            alignSelf: 'flex-start'
          }}
        >
          Visit Site
        </a>
      )}
      {!live && <span style={{ marginTop: '16px', color: '#bbb' }}>Coming soon</span>}
    </div>
  );
}
export default PortfolioCard;
