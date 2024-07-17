import { Flex, Image } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function About() {


  return (

    <section id="about ">
      <div className="pt-container lg:h-screen">
        <div className="pt-row px-6 text-center md:px-28 flex flex-col gap-4  ">

          <div className="pt-col-md-12 tcrs flex-col-reverse md:flex-row leading-loose">
            <div className="h-2/5 md:h-[50%]">
              <Image
                styles={{
                  root: {
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  },
                }}
                className="rounded-lg imgDflt"
                src={"/images/hero image.png"}
                w={"100%"}
                alt="courseLogo"
                fit="cover"
              />
            </div>
            <div className="">
              <div className="pt-section-title ">
                <h1 className="md:text-3xl md:text-start text-md text-[#0000ff] font-bold capitalize w-full">
                  About us        </h1>
              </div>
              <div className="pt-section-text md:text-start text-center lg:text-lg text-xs">
                Welcome to Prime Netbridge Solutions! We are dedicated to
                empowering individuals of all ages with cutting-edge technology
                education. Our mission is to foster innovation and creativity
                through our comprehensive programs in coding, robotics, game
                design, data science, graphics, and computer networking. With a
                team of passionate experts, we offer a blend of online and
                physical classes, after-school clubs, and specialized training.
                Whether you’re a beginner or looking to advance your skills, we
                have the right program for you.
              </div>
            </div>
          </div>
          <Flex className="gap-2 items-center">
            <Link to={"/about"}><button className=" hover:bg-[#2011cc] flex items-center gap-2 bg-gradient-to-r from-[#100866] to-[#2011CC] rounded-[2rem] bg-[#100866] text-white py-2 px-6 shadow-md font-semibold text-xs md:text-lg">Learn about our services <span><ArrowRight /></span></button>
         
            </Link>  </Flex>
        </div>

      </div>
    </section>
  )
}