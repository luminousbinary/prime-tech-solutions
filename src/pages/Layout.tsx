import { Image } from "@mantine/core";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="md:justify-space-evenly justify-center gap-2 px-4 flex w-full text-[10px]  items-center md:px-24" >
        <div className="logo w-8">
          <Image src={"/images/Frame 6.svg"} h={"100%"}/>
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