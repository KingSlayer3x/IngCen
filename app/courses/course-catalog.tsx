'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CourseCard } from '@/components/course-card'
import { SectionHeader } from '@/components/section-header'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'
import { courses } from '@/lib/data'
import type { CourseCategory } from '@/types'

const filters: Array<{ key: 'all' | CourseCategory; labelKey: 'filterAll' | 'filterCivil' | 'filterArchitecture' | 'filterWebdev' }> = [
  { key: 'all', labelKey: 'filterAll' },
  { key: 'civil', labelKey: 'filterCivil' },
  { key: 'architecture', labelKey: 'filterArchitecture' },
  { key: 'webdev', labelKey: 'filterWebdev' },
]

export function CourseCatalog() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') as CourseCategory | null
  
  const { language } = useAppStore()
  const t = translations[language]
  
  const [activeFilter, setActiveFilter] = useState<'all' | CourseCategory>(initialCategory || 'all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = activeFilter === 'all' || course.category === activeFilter
      const matchesSearch = searchQuery === '' || 
        course.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.software.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeFilter, searchQuery, language])

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={t.courses.title} 
          subtitle={t.courses.subtitle} 
        />

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter.key)}
                className={activeFilter === filter.key 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-border hover:bg-primary/10 hover:text-primary'}
              >
                {t.courses[filter.labelKey]}
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t.common.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ps-10"
            />
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <p className="text-lg text-muted-foreground">{t.common.noResults}</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setActiveFilter('all')
                setSearchQuery('')
              }}
            >
              {language === 'ar' ? 'مسح الفلاتر' : 'Clear Filters'}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
