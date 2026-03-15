'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  BookOpen, Calendar, Award, Settings, User, 
  Clock, Play, Download, ChevronLeft, ChevronRight 
} from 'lucide-react'
import * as Icons from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'
import { courses } from '@/lib/data'

export function DashboardContent() {
  const router = useRouter()
  const { language, user, isAuthenticated, setUser } = useAppStore()
  const t = translations[language]
  const [mounted, setMounted] = useState(false)
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const ArrowIcon = language === 'ar' ? ChevronLeft : ChevronRight

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !isAuthenticated) {
      router.push('/login')
    }
  }, [mounted, isAuthenticated, router])

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name,
        email: user.email,
        phone: user.phone,
      })
    }
  }, [user])

  if (!mounted || !isAuthenticated || !user) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin border-4 border-primary border-t-transparent" />
        </div>
      </div>
    )
  }

  const enrolledCoursesData = user.enrolledCourses.map((enrolled) => {
    const course = courses.find((c) => c.id === enrolled.courseId)
    return { ...enrolled, course }
  }).filter((item) => item.course)

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    setUser({
      ...user,
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone,
    })
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-primary">
              <AvatarFallback className="bg-primary/10 text-2xl text-primary">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">
                {t.dashboard.welcome}، {user.name.split(' ')[0]}!
              </h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="w-full justify-start bg-secondary/50">
            <TabsTrigger value="courses" className="gap-2">
              <BookOpen className="h-4 w-4" />
              {t.dashboard.enrolledCourses}
            </TabsTrigger>
            <TabsTrigger value="certificates" className="gap-2">
              <Award className="h-4 w-4" />
              {t.dashboard.certificates}
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="h-4 w-4" />
              {t.dashboard.settings}
            </TabsTrigger>
          </TabsList>

          {/* Enrolled Courses */}
          <TabsContent value="courses" className="space-y-6">
            {enrolledCoursesData.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {enrolledCoursesData.map((item, index) => {
                  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[item.course!.icon] || Icons.BookOpen
                  return (
                    <motion.div
                      key={item.courseId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-border/50 transition-all hover:border-primary/50">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            {/* Icon */}
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-primary/10 text-primary">
                              <IconComponent className="h-8 w-8" />
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                              <h3 className="font-semibold">
                                {item.course!.name[language]}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {item.course!.software}
                              </p>

                              {/* Progress */}
                              <div className="mt-3">
                                <div className="mb-1 flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">{t.dashboard.progress}</span>
                                  <span className="font-medium text-primary">{item.progress}%</span>
                                </div>
                                <Progress value={item.progress} className="h-2" />
                              </div>

                              {/* Next Session */}
                              {item.nextSession && (
                                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4 text-primary" />
                                  <span>
                                    {language === 'ar' ? 'الجلسة القادمة:' : 'Next session:'}{' '}
                                    {item.nextSession}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="mt-4 flex gap-2 border-t border-border pt-4">
                            <Button size="sm" className="flex-1 gap-2 bg-primary text-primary-foreground">
                              <Play className="h-4 w-4" />
                              {language === 'ar' ? 'متابعة التعلم' : 'Continue Learning'}
                            </Button>
                            <Link href={`/courses/${item.course!.slug}`}>
                              <Button size="sm" variant="outline" className="gap-2">
                                {t.courses.viewDetails}
                                <ArrowIcon className="h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            ) : (
              <Card className="border-border/50">
                <CardContent className="py-12 text-center">
                  <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="text-lg font-medium">{t.dashboard.noEnrolledCourses}</p>
                  <Link href="/courses" className="mt-4 inline-block">
                    <Button className="bg-primary text-primary-foreground">
                      {t.cart.browseCourses}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* Upcoming Sessions */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {t.dashboard.upcomingSessions}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {enrolledCoursesData.some((item) => item.nextSession) ? (
                  <div className="space-y-3">
                    {enrolledCoursesData
                      .filter((item) => item.nextSession)
                      .map((item) => (
                        <div
                          key={item.courseId}
                          className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                        >
                          <div>
                            <p className="font-medium">{item.course!.name[language]}</p>
                            <p className="text-sm text-muted-foreground">{item.nextSession}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            <Calendar className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground">{t.dashboard.noSession}</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates */}
          <TabsContent value="certificates">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {t.dashboard.certificates}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'شهاداتك من الدورات المكتملة'
                    : 'Your certificates from completed courses'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {user.certificates.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {user.certificates.map((cert) => (
                      <div
                        key={cert.id}
                        className="flex items-center justify-between border border-border p-4"
                      >
                        <div>
                          <p className="font-medium">{cert.courseName}</p>
                          <p className="text-sm text-muted-foreground">
                            {language === 'ar' ? 'صدرت في:' : 'Issued:'} {cert.issuedAt}
                          </p>
                        </div>
                        <Button size="sm" variant="outline" className="gap-2">
                          <Download className="h-4 w-4" />
                          {t.dashboard.download}
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <Award className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                    <p className="text-muted-foreground">{t.dashboard.noCertificates}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {language === 'ar' 
                        ? 'أكمل دوراتك للحصول على الشهادات'
                        : 'Complete your courses to earn certificates'}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  {t.dashboard.profile}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'تحديث معلومات حسابك'
                    : 'Update your account information'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="profile-name">{t.auth.name}</Label>
                      <Input
                        id="profile-name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="profile-email">{t.auth.email}</Label>
                      <Input
                        id="profile-email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="profile-phone">{t.auth.phone}</Label>
                      <Input
                        id="profile-phone"
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="bg-primary text-primary-foreground">
                    {t.dashboard.updateProfile}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
