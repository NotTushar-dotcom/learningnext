import {courses} from "@/src/data/music_courses.json"
import { NoiseBackground } from "@/src/components/ui/noise-background";
import Link from "next/link";
import React from "react";
import { cn } from "@/src/lib/utils";

interface Course{
   id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}


function FeaturedCourses() {
  const featuredCourses = courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center" >
           <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {featuredCourses.map((course:Course)=> (
            <NoiseBackground
              key={course.id}
              gradientColors={[
                "rgb(255, 100, 150)",
                "rgb(100, 150, 255)",
                "rgb(255, 200, 100)",
              ]}
            >
              <Card>
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-left text-lg font-semibold text-balance text-neutral-800 dark:text-neutral-200">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-left text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <p className="mt-2 text-left text-sm text-neutral-600 dark:text-neutral-400">
                    Instructor: {course.instructor}
                  </p>
                  <p className="mt-2 text-left text-sm text-neutral-600 dark:text-neutral-400">
                    Price: ₹{course.price}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link href="/courses">
                    <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
                      Learn More
                    </button>
                  </Link>
                </div>
              </Card>
            </NoiseBackground>
          ))}
        </div>
        <div className="flex justify-center mt-10">
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
    </div>
  )
}

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex h-full min-h-80 flex-col overflow-hidden rounded-lg bg-white text-center dark:bg-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default FeaturedCourses
