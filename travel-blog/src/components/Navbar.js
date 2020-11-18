const Navbar = () => {
  return (
    <nav className="nav--primary-light">
      <ul className="nav__bar--between">
        <li>
          <div className="logo">
            <span className="logo__main">Travelize</span>
            <span className="logo__detail">My traveling experiences</span>
          </div>
        </li>
        <li>
          <ul className="nav__bar--end">
            <li>
              <a className="tab-link" href="#">Home</a>
            </li>
            <li>
              <a className="tab-link" href="#">Blog</a>
            </li>
            <li>
              <a className="tab-link--active" href="#">About</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;