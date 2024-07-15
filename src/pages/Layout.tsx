import { Image } from "@mantine/core";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="justify-space-evenly flex w-full items-center px-24" >
        <div className="logo">
          <Image src={"/images/Frame 6.svg"} h={40}/>
        </div>
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