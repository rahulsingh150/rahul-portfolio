function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Rahul Kumar
        </a>

        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Skills</a>
          <a className="nav-link" href="#">Projects</a>
          <a className="nav-link" href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;