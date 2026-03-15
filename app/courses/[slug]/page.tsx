import { notFound } from 'next/navigation'
import { courses } from '@/lib/data'
import { CourseDetail } from './course-detail'

interface CoursePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)
  
  if (!course) {
    return {
      title: 'Course Not Found',
    }
  }

  return {
    title: `${course.name.ar} | ${course.name.en}`,
    description: course.description.en,
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)

  if (!course) {
    notFound()
  }

  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3)

  return <CourseDetail course={course} relatedCourses={relatedCourses} />
}
