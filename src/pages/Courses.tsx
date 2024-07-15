import { Box } from '@mantine/core'
// import React from 'react'
import CourseHeader from '../_components/courses/CourseHeader.tsx'
import CourseItems from '../_components/courses/CourseItem.tsx'
// import CourseHeader from '../_components/courses/c-courses-header'
// import CourseItems from '../_components/courses/c-course-item'

const Courses = () => {
  return (
    <Box className="bg-[#E7E6F0] min-h-screen  md:py-24 space-y-10">
        <CourseHeader />
        <div className='space-y-4'>
        <CourseItems />
        <CourseItems />
        <CourseItems />
        </div>
        
    </Box>
  )
}

export default Courses