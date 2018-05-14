class Nav extends React.Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <a className="navbar-brand text-white" href="#">Applied.</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Logout</a>
            </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
