import { Box } from "@mantine/core";
import CourseImages from "../CourseImages.tsx";

import CourseDescription from "../CourseDescription";

const CourseItems = () => {
  return (
    <Box className="w-full md:px-16 flex md:flex-row flex-col md:gap-2 lg:gap-4 items-center justify-center">
     <div className="">
     <CourseImages />
     </div>
      <CourseDescription />      
    </Box>
  );
};


export default CourseItems;