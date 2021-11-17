import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="nav justify-content-center my-5">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/react">
          React
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/redux">
          Redux
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/context">
          Context
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/recoil">
          Recoil
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/user-without-dedupe">
          User (no dedupe)
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/user-with-dedupe">
          User (dedupe)
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/user-with-race-condition">
          User (race condition)
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
