import BigHeader from "../_components/About/BigHeader";
import CourseImages from "../_components/CourseImages";
// import ImageDefaults from "../_components/ImageDefaults";
import { Image } from '@mantine/core'
import About from "../_components/About/About";
import { Flex } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// import CourseItems from "../_components/courses/CourseItem";

const Home = () => {
  return <main>
    {/* <!-- Hero starts here --> */}
    <section id="hero-container" className="">
      <div className="pt-container">
        <div className="pt-row">
          <div className="pt-col-lg-12 pt-hero">
            <h1 className="md:text-6xl text-lg text-white font-bold">Prime tech solutions</h1>
            <p className="md:text-xl text-sm text-white w-2/4">
              Ignite Your Tech Journey. From coding to networking, explore
              engaging programs for all ages and unlock your full potential
              today.
            </p>
            <Flex className="gap-2 items-center justify-center">
              <Link to="/courses">
              <button className=" hover:bg-[#2011cc] flex items-center gap-2 bg-gradient-to-r from-[#100866] to-[#2011CC] rounded-[2rem] bg-[#100866] text-white py-2 px-6 shadow-md font-semibold text-base md:text-lg">
                Start a class now <span>
                <ArrowRight size={16} />
              </span></button>
              </Link>
              
            </Flex>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- hero ends here  --> */}

    {/* <!-- tech solutions starts here --> */}
    <section id="pt-tech-solution">
      <div className="pt-container">
        <div className="pt-row pt-section-header">
          <div className="pt-col-md-12 pt-12">
            <div className="pt-section-title">
              <h2 className="text-3xl text-[#0000FF] font-bold">Tech Solutions</h2>
            </div>
            <div className="pt-section-text pt-sub-title">
              <p>
                Explore our comprehensive range of solutions, meticulously
                designed to address every challenge you encounter.
              </p>
              <p>
                Our services cater to companies, schools, homes, and private
                individuals, ensuring tailored support for all your needs
              </p>
            </div>
          </div>
        </div>

        <div className="pt-row p-20 md:p-12 lg:flex-nowrap md:flex-wrap flex-wrap flex gap-8 md:gap-20 ">
          <CourseImages nom={"true"} />
          <CourseImages  icn={"./icons/Frame (7).svg"} nom={"true"} />
          <CourseImages  nom={"true"}/>

        </div>
      </div>
    </section>
    {/* <!-- tech solutions end here --> */}

    {/* <!-- tech courses starts here  --> */}
    <section id="tech-course">
      <div className="pt-container">
        <div className="pt-row">
          <BigHeader />
        </div>
        <div className="pt-row pt-section-body flex-col px-6 tcrs-container">
          <div className="pt-col-md-12 flex gap-14 pt-[20px] md:items-center md:flex-row flex-col" >
            <div>
              <Image
                styles={{
                  root: {
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  },
                }}
                className="rounded-lg md:h-[280px] imgDflt"
                src={"/images/hero image.png"}
                // h={330}
                alt="courseLogo"
                fit="cover"
              />
            </div>
            <div className="pt-col-md-6 ">
              <ul className="md:text-2xl items-start text-sm lg:leading-[3.5rem]">
                <li>

                  <p className="flex md:text-base lg:text-2xl text-sm gap-4 md:gap-5 ">
                                         <span><img className="w-8" src="/icons/Frame 75.svg" alt="icon" /></span>

                    Remote and onsite<span><img src="/icons/Frame (1).svg" alt="icon" /></span>
                  </p>
                </li>
                <li>

                  <p className="flex md:text-base lg:text-2xl text-sm gap-4 md:gap-5">
                    <span><img className="w-8" src="/icons/Frame 75.svg" alt="icon" /></span>
                    Kids & Beginners courses<span
                    ><img src="/icons/Frame (2).svg" alt="icon"
                      /></span>
                  </p>
                </li>
                <li>

                  <p className="flex md:text-base lg:text-2xl text-sm gap-4 md:gap-5">
                    <span><img className="w-8" src="/icons/Frame 75.svg" alt="icon" /></span>
                    Professional courses<span><img src="/icons/Frame (3).svg" alt="icon" /></span>
                  </p>
                </li>
                <li>

                  <p className="flex md:text-base lg:text-2xl text-sm gap-4 md:gap-5">
                    <span><img className="w-8" src="/icons/Frame 75.svg" alt="icon" /></span>
                    Recognized certificates
                    <span><img src="/icons/Frame (4).svg" alt="icon" /></span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <Flex className="gap-2 items-center justify-center">
          <Link to={"/courses"}>
          <button className=" hover:bg-[#2011cc] flex items-center gap-2 bg-gradient-to-r from-[#100866] to-[#2011CC] rounded-[2rem] bg-[#100866] text-white py-2 px-6 shadow-md font-semibold text-base md:text-lg">
              Learn more about our programs <span><ArrowRight/></span></button>
      
          </Link>
              </Flex>

        </div>
      </div>
    </section>

    {/* <!-- tech courses ends here  --> */}

    {/* <!-- about us starts here  --> */}
    <About />
    {/* <!-- about us ends here  --> */}

    {/* <!-- clients starts here  --> */}
    {/* <div className="clients">
      <div className="pt-container">
        <div className="pt-row">
          <div className="pt-col-md-12">
            <div className="pt-section-title">
              <h2>About us</h2>
            </div>
          </div>

          <div className="col-md-7">
            <div
              id="lum-carousel"
              className="lum-carousel lum-slide lum-clients_Carousel"
              data-ride="lum-carousel"
            >
              <ol className="lum-carousel-indicators">
                <li
                  data-target="#lum-carousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#lum-carousel" data-slide-to="1"></li>
                <li data-target="#lum-carousel" data-slide-to="2"></li>
              </ol>
              <div className="lum-carousel-inner">
                <div className="lum-carousel-item active">
                  <div className="pt-container">
                    <div className="carousel-caption">
                      <div className="pt-row">
                        <div className="pt-col-md-12">
                          <div className="carol-img">
                            <figure>
                              <img src="images/client.png" alt="#" />
                            </figure>
                          </div>
                          <div className="carol-text_box">
                            <p>
                              “Getting certified by prime netbridge has
                              improved my life, I know more complex things and
                              I confidently charge for my services”
                            </p>
                            <i><img src="" alt="star images" /></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <button>Learn more about our services</button>
            <span>arrow right</span>
          </div>
        </div>
      </div>
    </div> */}
    {/* <!-- clients ends here  --> */}
  </main>

};

export default Home;