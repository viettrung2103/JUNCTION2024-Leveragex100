import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/companies">Companies</Link>
    </div>
  );
};
export default Navbar;
