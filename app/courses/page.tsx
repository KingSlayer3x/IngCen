import { Suspense } from 'react'
import { CourseCatalog } from './course-catalog'

export const metadata = {
  title: 'الدورات التدريبية | Courses',
  description: 'تصفح جميع الدورات التدريبية في الهندسة المدنية، التصميم المعماري، وتطوير الويب',
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<CourseCatalogSkeleton />}>
      <CourseCatalog />
    </Suspense>
  )
}

function CourseCatalogSkeleton() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-12 text-center">
        <div className="mx-auto h-10 w-64 animate-pulse bg-muted" />
        <div className="mx-auto mt-3 h-6 w-96 animate-pulse bg-muted" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-96 animate-pulse bg-muted" />
        ))}
      </div>
    </div>
  )
}
