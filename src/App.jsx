// import "./App.css";
import "./style.css";
import photo from "./assets/profilePhoto.png";

function App() {
  return (
    <>
      {/* HEADER */}
      {/* PORTFOLIO */}
      <section id="headline">
        <header class="blue">PORTFOLIO</header>
        <div>
          <table class="table table-bordered border-primary">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td style={{ fontSize: 24 }}>
                  <b>RAJADURAI</b>
                </td>
                <th>Total Experience</th>
                <td>15.9 years</td>
              </tr>
              <tr>
                <th scope="row">Mobile</th>
                <td>+91 759***4272</td>
                <th>Singapore Experience</th>
                <td>12.6 years</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>k.rajadurai***@hotmail.com</td>
                <th>Japan Experience</th>
                <td>1.3 years</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src={photo}
                    alt="Profile_Photo"
                    width={200}
                    height={200}
                  />
                </th>
                <th colSpan={3}>
                  <div>
                    <b>React Frontend Developer</b> | 3 Years Relevant
                    Experience
                    <hr />
                    <label style={{ fontSize: 16 }}>
                      <b>KEY SKILLS:</b> REACT | JS (ES6+) | REDUX | HOOKS |
                      CSS3 | HTML <br />
                      <em>
                        <mark>
                          *** Immediate Joiner | Open to Work | Available within
                          7 days ***
                        </mark>
                      </em>
                      <hr />
                      <b>PREFERED LOCATION: </b>CHENNAI / BANGALORE / COIMBATORE
                      / REMOTE / OVERSEAS <br /> ACTIVELY ATTENDING INTERVIEWS
                    </label>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* PROFESSIONAL SUMMARY */}
      <section id="summary">
        <header class="blue">PROFESSIONAL SUMMARY</header>
        <div>
          <p
            style={{ textAlign: "justify", paddingLeft: 50, paddingRight: 50 }}
          >
            <mark>React Frontend Developer</mark> with <b>15+ years</b> of
            overall IT experience, including <b>3+ years</b> of hands-on
            experience in React.js development (2 years of professional
            experience and 1 year of freelance experience). Skilled in building
            modern, responsive, and user-friendly web applications using
            React.js, JavaScript (ES6+), Next.js, JSX, Bootstrap. Experienced in
            developing reusable UI components, implementing React Hooks,
            managing application state, and creating responsive user interfaces
            with a focus on performance and usability.
          </p>
        </div>
        <div>
          <p
            style={{ textAlign: "justify", paddingLeft: 50, paddingRight: 50 }}
          >
            Brings a strong engineering background from product development and
            system-level programming at Lenovo, along with international project
            experience in Singapore and Japan. Also contributed to research
            application development for the CBmE department at the National
            University of Singapore. Demonstrates strong problem-solving
            abilities, technical ownership, adaptability, and a commitment to
            delivering reliable, high-quality software solutions across diverse
            technology environments.
          </p>
        </div>
      </section>
      {/* TECHNICAL SKILL */}
      <section id="skill">
        <header class="green">TECHNICAL SKILL</header>

        <div class="row g-3">
          <div class="sm:col">
            <label>Primary Skill</label>
            <p>
              React.js, Next.js, JavaScript (ES6+), HTML5, Bootstrap, Responsive
              Design, Hooks, React Route
            </p>
          </div>
        </div>
        <div class="row g-3">
          <div class="sm:col">
            <label>State Management</label>
            <p>Context API, Redux</p>
          </div>
        </div>
        <div class="row g-3">
          <div class="sm:col">
            <label>API & INTEGRATION </label>
            <p>REST API, Fetch API, Axios, JSON, JWT Authentication</p>
          </div>
        </div>
        <div class="row g-3">
          <div class="sm:col">
            <label>Secondary Skill</label>
            <p>Express JS, MongoDB, Supabase</p>
          </div>
        </div>
      </section>
      {/* EDUCATION */}
      <section id="education">
        <header class="green">EDUCATION</header>
        🚧🚧🚧 ✨<b>Coming Soon</b>✨ 🚧🚧🚧
      </section>
      {/* CAREER HISTORY */}
      <section id="career">
        <header class="green">CAREER HISTORY</header>
        🚧🚧🚧 ✨<b>Coming Soon</b>✨ 🚧🚧🚧
      </section>
      {/* PROJECT WORKS */}
      <section id="project">
        <header class="green">PROJECT WORKS</header>
        🚧🚧🚧 ✨<b>Coming Soon</b>✨ 🚧🚧🚧
      </section>
      {/* WORK EXPERIENCE */}
      <section id="experience">
        <header class="green">WORK EXPERIENCE</header>
        🚧🚧🚧 ✨<b>Coming Soon</b>✨ 🚧🚧🚧
      </section>
      {/* FOOTER PAGE */}
      <footer>
        <a href="#headline">Portfolio</a>
        <a href="#summary">Professional Summary</a>
        <a href="#skill">Technical Skill</a>
        <a href="#education">Education</a>
        <a href="#career">Career History</a>
        <a href="#project">Project Works</a>
        <a href="#experience">Work Experience</a>
      </footer>
    </>
  );
}

export default App;
