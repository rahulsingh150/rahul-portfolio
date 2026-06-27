function App() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        <div className="col-md-6">

          <h5 className="text-primary">
            Hello, I'm
          </h5>

          <h1 className="display-3 fw-bold">
            Rahul Kumar
          </h1>

          <h3 className="text-secondary">
            Frontend Developer
          </h3>

          <p className="mt-4">
            Passionate Frontend Developer with experience in
            HTML, CSS, JavaScript, Bootstrap, React.js,
            .NET and SQL.
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
            src="https://via.placeholder.com/350"
            className="img-fluid rounded-circle"
            alt="Profile"
          />

        </div>

      </div>

    </div>
  );
}

export default App;