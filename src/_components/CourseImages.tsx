// // import React from 'react'
// import { Image } from '@mantine/core'
// import { CodeXml } from 'lucide-react'

// import React from 'react'
import { Image } from '@mantine/core'
import { CodeXml } from 'lucide-react'


const CourseImages = ({ nom, imggs, icn, texts, tcard}: { nom?: string, imggs?: string, icn?: string, texts?: string, tcard?:string }) => {


  return (
    <div className="md:max-w-[40%] lg:max-w-[260px]">
      <div className="lg:w-[260px]   max-h-[350px] border border-purple-500 rounded-lg flex flex-col shadow-sm min-w-[260px]">
        <Image
          styles={{
            root: {
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
            },
          }}
          className="rounded-lg"
          src={imggs ? imggs : "/images/hero image.png"}
          h={130}
          alt="courseLogo"
          fit="cover"
        />
        <div className="w-full bg-black grow rounded-tr-3xl  py-2 space-y-4 content-center">
          {icn ?   <div className="p-3  w-[54px] h-[54px] rounded-[50%] grid place-content-center mx-auto">
          <Image className='fill-black text-black' h={25} w={25} src={icn} alt={"icon"} /> 
          </div> : 
          <div className="p-3 bg-slate-50 w-[35px] h-[35px] rounded-[50%] grid place-content-center mx-auto">
            <CodeXml size={26} />
          </div>}
          <h1 className="text-white font-bold whitespace-nowrap capitalize text-center">
          {tcard?  tcard :  "fullstack development"}
          </h1>

          {texts ? <h6 className="text-sm font-light text-white text-center leading-4"> {texts}     </h6> :

            <h6 className="text-sm font-light text-white text-center leading-4">
              Get our our expert solutions on code related problems and learn from
              our professionals on board.
            </h6>
          }
        </div>

      </div>{
        nom ? < div className=" py-4 flex w-full flex-col justify-center items-center text-center">  <div className="  text-blue-600 border-b-4 w-max border-blue-600 ">
          Learn more about our offer
        </div> </div> : null
      }
    </div>
  )
}

export default CourseImages