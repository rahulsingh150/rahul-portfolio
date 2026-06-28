import Navbar from "./components/Navbar";
import profile from "./assets/profile.png";

function App() {
  return (
    <>
      <Navbar />

      <div className="container py-5 mt-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h5 className="text-primary">Hello, I'm</h5>

            <h1 className="display-3 fw-bold">
              Rahul Kumar
            </h1>

            <h3 className="text-secondary">
              Frontend Developer
            </h3>

            <p className="mt-4">
              Passionate Frontend Developer with experience in HTML, CSS,
              JavaScript, Bootstrap, React.js, .NET and SQL.
            </p>

            <button className="btn btn-primary me-3">
              Hire Me
            </button>

            <button className="btn btn-outline-dark">
              Download Resume
            </button>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={profile}
              alt="Rahul Kumar"
              className="img-fluid rounded-circle shadow-lg"
              width="350"
            />
          </div>

        </div>
      </div>

      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>

          <p className="text-center fs-5">
            I am Rahul Kumar, a Frontend Developer with experience in HTML,
            CSS, JavaScript, Bootstrap, React.js, .NET and SQL Server.
            I enjoy building responsive and user-friendly web applications.
          </p>
        </div>
      </section>
 <section id="skills" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5">My Skills</h2>

    <div className="row">

      <div className="col-md-6 mb-4">
        <h5>HTML</h5>
        <div className="progress">
          <div className="progress-bar bg-primary" style={{ width: "95%" }}>
            95%
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <h5>CSS</h5>
        <div className="progress">
          <div className="progress-bar bg-success" style={{ width: "90%" }}>
            90%
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <h5>JavaScript</h5>
        <div className="progress">
          <div className="progress-bar bg-warning" style={{ width: "85%" }}>
            85%
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <h5>Bootstrap</h5>
        <div className="progress">
          <div className="progress-bar bg-info" style={{ width: "90%" }}>
            90%
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <h5>React.js</h5>
        <div className="progress">
          <div className="progress-bar bg-danger" style={{ width: "80%" }}>
            80%
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <h5>.NET</h5>
        <div className="progress">
          <div className="progress-bar bg-dark" style={{ width: "75%" }}>
            75%
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <h5>SQL Server</h5>
        <div className="progress">
          <div className="progress-bar bg-secondary" style={{ width: "80%" }}>
            80%
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <h5>Git & GitHub</h5>
        <div className="progress">
          <div className="progress-bar bg-success" style={{ width: "85%" }}>
            85%
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
}

export default App;