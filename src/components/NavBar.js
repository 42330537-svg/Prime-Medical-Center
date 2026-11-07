import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
      <h2>Prime Medical Center</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/departments">Department</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* <button className="login-btn">Login</button> */}
    </nav>
  );
}

export default Navbar;