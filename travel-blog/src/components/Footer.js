import '../App.scss';

const Footer = () => {
  return (
    <footer className="footer--primary">
      <ul className="bar--between">
        <li>
          <a href="#">@2020 Travelize</a>
        </li>
        <li>
          <ul className="bar--end">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;