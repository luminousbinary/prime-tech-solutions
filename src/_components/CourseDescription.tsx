import { Flex } from '@mantine/core'
// import Link from "react-router-dom"
const CourseDescription = () => {
  return (
    <div className="w-full md:pl-16 space-y-10 ">
    <h1 className="lg:text-lg md:text-base font-medium text-black font-serif">
      Our Game Development course covers the core principles of designing
      and creating interactive games. Youll learn about game mechanics,
      storytelling, level design, and programming using popular game
      engines. This course provides the skills to develop immersive gaming
      experiences from concept to completion.
    </h1>
    <Flex className="gap-6 items-center">
       <a href={"/course"}> <button className="bg-gradient-to-r from-[#100866] to-[#2011CC] rounded-[2rem] bg-[#100866] text-white py-2 px-6 shadow-md font-semibold md:text-base lg:text-lg">Enroll now</button>
       
       </a> <span className="font-bold text-black md:text-lg lg:text-2xl">$150.00</span>
    </Flex>
  </div>
  )
}

export default CourseDescription