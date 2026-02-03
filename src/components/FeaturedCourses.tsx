import {courses} from "@/src/data/music_courses.json"
import { NoiseBackground } from "@/src/components/ui/noise-background";
import Link from "next/link";


function FeaturedCourses() {
  return (
    <div className="py-12 bg-gray-900">
        <div className="text-center" >
           <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2> 
           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>            
        </div>
        <div>2</div>
        <div className="flex justify-center"> 
          <Link href={"/courses"}>
          <NoiseBackground
        containerClassName="w-fit p-2 rounded-full mx-auto"
        gradientColors={[
          "rgb(255, 100, 150)",
          "rgb(100, 150, 255)",
          "rgb(255, 200, 100)",
        ]}
      >
        <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
          View All courses  &rarr;
        </button>
        </NoiseBackground>
          </Link>  
            
        </div>
      
    </div>
  )
}

export default FeaturedCourses
