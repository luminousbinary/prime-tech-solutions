import { Flex, Image } from "@mantine/core";
import ImageDefaults from "../ImageDefaults";
import { ArrowRight  } from "lucide-react";

export default function About() {


  return (

    <section id="about ">
      <div className="pt-container lg:h-screen">
        <div className="pt-row px-28 flex flex-col gap-4  ">

          <div className="pt-col-md-12 tcrs leading-loose">
            <div className=" h-[50%]">
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
              <h1 className="text-3xl text-[#0000ff] font-bold capitalize w-full">
     About us        </h1>
                              </div>
              <div className="pt-section-text">
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
 <button className=" flex hover:bg-[#4335d8] items-center justify-center gap-3 rounded-[2rem] bg-[#100866] text-white py-4 px-5 shadow-md font-bold text-xl">Learn about our services <span><ArrowRight/></span></button>
          </Flex>
        </div>
       
      </div>
    </section>
  )
}