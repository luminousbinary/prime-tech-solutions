import { Box } from "@mantine/core";
import CourseImages from "../CourseImages.tsx";

import CourseDescription from "../CourseDescription";

const CourseItems = () => {
  return (
    <Box className="w-full lg:px-16 flex lg:flex-row flex-col gap-4 items-center justify-center">
      <CourseImages />
      <CourseDescription />      
    </Box>
  );
};


export default CourseItems;