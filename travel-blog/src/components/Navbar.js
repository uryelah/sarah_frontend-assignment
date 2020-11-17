import '../App.scss';

const Navbar = () => {
  return (
    <nav className="nav--primary-light">
      <ul className="bar--between">
        <li>
          <div>
            <span>Travelize</span>
            <span>My traveling experiences</span>
          </div>
        </li>
        <li>
          <ul className="bar--end">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;