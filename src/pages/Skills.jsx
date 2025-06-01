import mentoring from "../assets/mentoring.png";
import fullstack from "../assets/fullstack.png";

function Skills() {
  return (
    <div className="skills">
      <div className="container">
        {/* Full Stack Developer Card */}
        <div className="fullstack">
          <img src={fullstack} alt="fullstack" />
          <h1>Full Stack Developer</h1>
          <p>
            I build digital products end-to-end, from idea to deployment—websites, SaaS, mobile apps, and AI-powered tools.
          </p>
          <div className="skills-body">
            <h2>Languages:</h2>
            <p>JavaScript (ES6+), TypeScript, Python, PHP, HTML, CSS</p>

            <h2>Frameworks & Libraries:</h2>
            <p>
              React, Next.js, React Native, Node.js, Express, FastAPI, CodeIgniter 4, WordPress (custom themes & plugins)
            </p>

            <h2>Databases:</h2>
            <p>MySQL, MongoDB</p>

            <h2>Machine Learning:</h2>
            <p>Pandas, scikit-learn, XGBoost, NumPy, Matplotlib, FastAPI (as API backend)</p>

            <h2>API Integrations:</h2>
            <p>
              OpenAI/ChatGPT, Stripe, Twilio, Calendly, Google APIs, custom REST APIs
            </p>

            <div>
              <h2>Tools & Platforms:</h2>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Docker</li>
                <li>Postman</li>
                <li>Firebase, Heroku, Netlify, Render</li>
                <li>WordPress hosting, cPanel, domain management</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Mentor Card */}
        <div className="mentor">
          <img src={mentoring} alt="mentoring" />
          <h1>Mentor</h1>
          <p>
            I love helping others grow. My approach is hands-on, practical, and focused on confidence-building—whether in coding, problem-solving, or launching real projects.
          </p>
          <div className="skills-body">
            <h2>What I Teach:</h2>
            <p>
              JavaScript, React, TypeScript, Python, FastAPI, React Native, Next.js, Node.js, Express, MongoDB, MySQL, HTML, CSS, WordPress, API integration, and AI tools.
            </p>

            <h2>Mentor Stats:</h2>
            <ul>
              <li><span>300+</span> 1-on-1 mentees</li>
              <li><span>2,000+</span> mentoring hours</li>
              <li><span>65+</span> verified reviews (avg. 5/5)</li>
              <li><span>Dozens</span> of coding bootcamps & workshops</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
