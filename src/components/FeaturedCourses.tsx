"use client"
import courseData from "../data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}

const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With The Best</p>
                </div>
            </div>
            <div className="mt-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {
                        featuredCourses.map((course:Course)=>(
                            <div key={course.id} className="flex justify-center">
                                <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm overflow-hidden h-full bg-white dark:bg-zinc-900">
                                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">+
                                        <h2 className="text-lg sm:text-2xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</h2>
                                        <p>{course.description}</p>
                                        <Link href={'/course'}>{course.slug}</Link>
                                        <span className="text-lg my-2">Learn More</span>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={'/course'} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View All Course
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses