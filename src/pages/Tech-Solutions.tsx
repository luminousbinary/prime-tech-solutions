import CourseImages from "../_components/CourseImages";
// import CourseHeader from "../_components/courses/CourseHeader";


export default function TechSolutions() {
    return (
        <>
            <div className=" tsolm flex flex-col text-center align-middle justify-center px-20 py-20 mx-auto">
                <div className="w-full flex flex-col justify-center items-center space-y-4">
                    <h1 className="capitalize font-bold text-4xl  text-[#2011CC] text-center w-full">
                        Tech Solutions
                    </h1>
                    <span className="text-center md:w-[80%]  md:text-lg  text-xs w-[100%]">
                        Explore our comprehensive range of solutions, meticulously designed to address every challenge you encounter.
                        Our services cater to companies, scho
                        ols, homes, and private individuals, ensuring tailored support for all your needs
                    </span>
                </div>          
                <div className="pt-row p-20 md:p-12 lg:flex-nowrap md:flex-wrap flex-wrap flex gap-8 md:gap-20 ">
                <CourseImages  nom={"true"} />
          <CourseImages  icn={"./icons/Frame (5).svg"} tcard={"Game Development"} texts={"The best experience elarning from expaerts from diverse location."} nom={"true"} />
          <CourseImages  icn={"./icons/Frame (8).svg"} tcard={"Data Analysis"} texts={"Learn to traverse data in unique and graphycal ways, by experst with years of experience in the industry."} nom={"true"}/>

                </div>
            </div>
        </>
    )
}