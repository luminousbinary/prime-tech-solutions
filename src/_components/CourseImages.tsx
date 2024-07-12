// import React from 'react'
import { Image } from '@mantine/core'
import { CodeXml } from 'lucide-react'

const CourseImages = ({ nom }: { nom?: string }) => {


  return (
    <div className ="">
    <div className="lg:w-[260px] h-[350px] border border-purple-500 rounded-lg flex flex-col shadow-sm min-w-[260px]">
    <Image
      styles={{
        root: {
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
        },
      }}
      className="rounded-lg"
      src={"/images/hero image.png"}
      h={130}
      alt="courseLogo"
      fit="cover"
    />
    <div className="w-full bg-black grow rounded-tr-3xl  py-2 space-y-4 content-center">
      <div className="p-3 bg-slate-50 w-[40px] h-[40px] rounded-[50%] grid place-content-center mx-auto">
        <CodeXml size={26} />
      </div>
      <h1 className="text-white font-bold whitespace-nowrap capitalize text-center">
        fullstack development
      </h1>
      <h6 className="text-sm font-light text-white text-center leading-4">
        Get our our expert solutions on code related problems and learn from
        our professionals on board.
      </h6></div>
      
  </div>{
        nom?       < div className=" py-4 flex w-full flex-col justify-center items-center text-center">  <div className="  text-blue-600 border-b-4 w-max border-blue-600 ">
     Learn more about our offer
    </div> </div> :null
    }
  </div>
  )
}

export default CourseImages