export type Language = 'ar' | 'en'

export type Theme = 'light' | 'dark'

export type CourseCategory = 'civil' | 'architecture' | 'webdev'

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced'

export interface Course {
  id: string
  slug: string
  name: {
    ar: string
    en: string
  }
  description: {
    ar: string
    en: string
  }
  category: CourseCategory
  software: string
  icon: string
  duration: string
  level: CourseLevel
  price: number
  currency: string
  instructor: Instructor
  syllabus: SyllabusItem[]
  schedule: string
  image: string
}

export interface SyllabusItem {
  title: {
    ar: string
    en: string
  }
  description: {
    ar: string
    en: string
  }
}

export interface Instructor {
  id: string
  name: {
    ar: string
    en: string
  }
  title: {
    ar: string
    en: string
  }
  bio: {
    ar: string
    en: string
  }
  image: string
}

export interface CartItem {
  course: Course
  quantity: number
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
  enrolledCourses: EnrolledCourse[]
  certificates: Certificate[]
}

export interface EnrolledCourse {
  courseId: string
  progress: number
  enrolledAt: string
  nextSession?: string
}

export interface Certificate {
  id: string
  courseId: string
  courseName: string
  issuedAt: string
  downloadUrl: string
}

export interface Testimonial {
  id: string
  name: {
    ar: string
    en: string
  }
  role: {
    ar: string
    en: string
  }
  content: {
    ar: string
    en: string
  }
  image: string
  rating: number
}

export interface TeamMember {
  id: string
  name: {
    ar: string
    en: string
  }
  role: {
    ar: string
    en: string
  }
  bio: {
    ar: string
    en: string
  }
  image: string
}
