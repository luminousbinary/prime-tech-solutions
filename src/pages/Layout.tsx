import { Image } from "@mantine/core";
import { Outlet, Link } from "react-router-dom";
import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
// import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
// import classes from '../App.css';
// import { InstagramIcon, Twitter, XCircle, YoutubeIcon } from "lucide-react";

// const data = [
//   {
//     title: 'About',
//     links: [
//       { label: 'Features', link: '#' },
//       { label: 'Pricing', link: '#' },
//       { label: 'Support', link: '#' },
//       { label: 'Forums', link: '#' },
//     ],
//   },
//   {
//     title: 'Project',
//     links: [
//       { label: 'Contribute', link: '#' },
//       { label: 'Media assets', link: '#' },
//       { label: 'Changelog', link: '#' },
//       { label: 'Releases', link: '#' },
//     ],
//   },
//   {
//     title: 'Community',
//     links: [
//       { label: 'Join Discord', link: '#' },
//       { label: 'Follow on Twitter', link: '#' },
//       { label: 'Email newsletter', link: '#' },
//       { label: 'GitHub discussions', link: '#' },
//     ],
//   },
// ];

const Layout = () => {

  // const groups = data.map((group) => {
  //   const links = group.links.map((link, index) => (
  //     <Text<'a'>
  //       key={index}
  //       className={"link"}
  //       component="a"
  //       href={link.link}
  //       onClick={(event) => event.preventDefault()}
  //     >
  //       {link.label}
  //     </Text>
  //   ));

  //   return (
  //     <div className={"wrapper"} key={group.title}>
  //       <Text className={"title"}>{group.title}</Text>
  //       {links}
  //     </div>
  //   );
  // });

  return (
    <>
      <nav className="md:justify-space-evenly justify-center gap-2 px-4 flex w-full text-[10px] md:text-xl  items-center md:px-24" >
        <Link to={'/'}>
        <div className="logo md:w-16 w-8">
          <Image src={"/images/Frame 6.svg"} h={"100%"} />
        </div>
        </Link>
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


      {/* <footer className="footer">
        <Container className="inner">

          <div className="groups">{groups}</div>
          <div className="logo">
            <XCircle size={30} />
            <Text size="xs" c="dimmed" className="description">
              Build fully functional accessible web applications faster than ever
            </Text>
          </div>
        </Container>
        <Container className="afterFooter">
          <Group gap={0} className="social" justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <Twitter style={{ width: rem(18), height: rem(18) }} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <YoutubeIcon style={{ width: rem(18), height: rem(18) }} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <InstagramIcon style={{ width: rem(18), height: rem(18) }} />
            </ActionIcon>
          </Group> <Text c="dimmed" size="sm">
            © 2020 mantine.dev. All rights reserved.
          </Text>


        </Container>
      </footer> */}

      {/* <footer className="footer">
        <div className="footer-container">
            <div className="footer-column lon1">
                <h3>Quick access</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Classes</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className="footer-column lon2">
                <h3>Courses</h3>
                <ul>
                    <li><a href="#">Game design</a></li>
                    <li><a href="#">Mobile app development</a></li>
                    <li><a href="#">Graphics design</a></li>
                    <li><a href="#">Video editing</a></li>
                    <li><a href="#">Data science</a></li>
                    <li><a href="#">Computer networking</a></li>
                    <li><a href="#">Cyber security</a></li>
                    <li><a href="#">Robotics</a></li>
                    <li><a href="#">Frontend development</a></li>
                    <li><a href="#">Backend development</a></li>
                </ul>
            </div>
            <div className="footer-column lon3">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">IT solutions</a></li>
                    <li><a href="#">Coding & Robotics</a></li>
                    <li><a href="#">Tech academy</a></li>
                </ul>
            </div>
            <div className="footer-column contact-column">
                <h3>Contact us</h3>
                <div className="social-icons">
                    <a href="#"><img src="facebook-icon.png" alt="Facebook"/></a>
                    <a href="#"><img src="twitter-icon.png" alt="Twitter"/></a>
                    <a href="#"><img src="email-icon.png" alt="Email"/></a>
                </div>
                <div className="newsletter">
                    <p>Subscribe to our newsletter</p>
                    <form action="#" method="post">
                        <input type="email" placeholder="Enter your Email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </footer> */}

      <footer className="footer md:flex">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Quick access</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Tech Solutions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Courses</h3>
            <ul>
              <li><a href="#">Game design</a></li>
              <li><a href="#">Mobile app development</a></li>
              <li><a href="#">Graphics design</a></li>
              <li><a href="#">Video editing</a></li>
              <li><a href="#">Data science</a></li>
              <li><a href="#">Computer networking</a></li>
              <li><a href="#">Cyber security</a></li>
              <li><a href="#">Robotics</a></li>
              <li><a href="#">Frontend development</a></li>
              <li><a href="#">Backend development</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">IT solutions</a></li>
              <li><a href="#">Tech academy</a></li>
            </ul>
          </div>

          {/* <div className="newsletter">
                    <p>Subscribe to our newsletter</p>
                    <form action="#" method="post">
                        <input type="email" placeholder="Enter your Email" required/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div> */}
        </div><div className="footer-column contact-column">
          <h3>Contact us</h3>
          <div className="social-icons">
            <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="email-icon.png" alt="Email" /></a>
          </div>
          <div className="newsletter overflow-x-hidden">
            <p>Subscribe to our newsletter</p>
            <form action="#" className="" method="post">
              <input className="w-2 md:" type="email" placeholder="Enter your Email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Layout;