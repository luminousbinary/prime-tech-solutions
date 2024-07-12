import { Box } from '@mantine/core'
// import React from 'react'
import CourseHeader from '../_components/courses/CourseHeader.tsx'
import CourseItems from '../_components/courses/CourseItem.tsx'

const Courses = () => {
  return (
    <Box className="bg-[#E7E6F0] min-h-screen">
        <CourseHeader />
        <CourseItems />
        <CourseItems />
        <CourseItems />
        <CourseItems />
    </Box>
  )
}

export default Courses