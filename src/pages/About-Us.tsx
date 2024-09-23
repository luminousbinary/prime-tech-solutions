import AbtHeader from "../_components/About/AbtHeader";
// import MinHeader from "../_components/About/MinHead";
import ImageDefaults from "../_components/ImageDefaults";

export default function AboutUs() {

  return (
    <>


      <div id="aboutus" >
        <AbtHeader />
        <div className="first ">
          <ImageDefaults hit={414} />      <p className="leading-loose  	">
            Welcome to Prime Netbridge Solutions! We are dedicated to empowering
            individuals of all ages with cutting-edge technology education. Our
            mission is to foster innovation and creativity through our
            comprehensive programs in coding, robotics, game design, data science,
            graphics, and computer networking. With a team of passionate experts,
            we offer a blend of online and physical classes, after-school clubs,
            and specialized training. Whether you’re a beginner or looking to
            advance your skills, we have the right program for you.
          </p>
        </div>

        <div className="succes-metric ">
          <h3 className="text-3xl ">Our Success Metrics:</h3>
          <ul>
            <li>500+ students successfully trained</li>
            <li>95% student satisfaction rate</li>
            <li>
              80% of our graduates pursuing tech careers or advanced studies
            </li>
            <li>
              100+ successful project completions in coding, robotics, and
              networking
            </li>
          </ul>
          <p className="text-[16px]">
            Join us on a journey to discover your potential, enhance your skills,
            and unlock exciting career opportunities in the tech world. At Prime
            Netbridge Solutions, we’re not just teaching technology – we’re
            shaping the future.
          </p>
        </div>
      </div></>
  )
}