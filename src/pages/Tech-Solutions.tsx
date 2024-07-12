import CourseImages from "../_components/CourseImages";
// import CourseHeader from "../_components/courses/CourseHeader";


export default function TechSolutions() {
    return (
        <>
        <div className=" tsolm flex flex-col text-center align-middle justify-center px-20 py-20 mx-auto">
        <div className="w-full flex flex-col justify-center items-center space-y-4">
        <h1 className= "capitalize font-bold text-4xl  text-[#2011CC] text-center w-full">
        Tech Solutions
              </h1>
      <span className="text-center md:w-[80%]  md:text-lg  text-xs w-[100%]">
      Explore our comprehensive range of solutions, meticulously designed to address every challenge you encounter.
 Our services cater to companies, schools, homes, and private individuals, ensuring tailored support for all your needs
      </span>
    </div>            <div className="p-20 flex gap-8 tsolu">
                
            <CourseImages nom="true" />
            <CourseImages nom="true" />
            <CourseImages nom="true" />
            </div>
        </div>
        </>
    )
}