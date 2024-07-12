import { Box, Flex, Image } from "@mantine/core";
// import { CodeXml } from "lucide-react";
// import React from "react";
import CourseImages from "../CourseImages.tsx";

const CourseItems = () => {
  return (
    <Box className="w-full px-8 flex my-12 gap-4 items-center">
      <CourseImages />
      <div className="w-full lg:px-16">
        <h1 className="text-lg font-medium text-black">
          Our Game Development course covers the core principles of designing
          and creating interactive games. Youll learn about game mechanics,
          storytelling, level design, and programming using popular game
          engines. This course provides the skills to develop immersive gaming
          experiences from concept to completion.
        </h1>
        <Flex className="gap-2 items-center">
            <button className="rounded-[2rem] bg-[#100866] text-white py-3 px-2 shadow-md font-bold text-xl">Enroll now</button>
            <span className="font-bold text-black text-xl">$150.00</span>
        </Flex>
      </div>
    </Box>
  );
};

export default CourseItems;