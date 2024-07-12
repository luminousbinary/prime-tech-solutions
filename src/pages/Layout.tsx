import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">courses</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/tech-solutions">Tech Soluttion</Link>
          </li>
          {/* <li>
            <Link to="/about">About Us</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;