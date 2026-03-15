'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'

export function LoginForm() {
  const router = useRouter()
  const { language, login } = useAppStore()
  const t = translations[language]
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock login - in production, this would be a real API call
    if (formData.email && formData.password) {
      login({
        id: '1',
        name: language === 'ar' ? 'محمد أحمد' : 'Mohammad Ahmad',
        email: formData.email,
        phone: '+963 123 456 789',
        enrolledCourses: [
          {
            courseId: 'revit-fundamentals',
            progress: 65,
            enrolledAt: '2024-01-15',
            nextSession: '2024-02-15 18:00',
          },
          {
            courseId: 'react-complete',
            progress: 30,
            enrolledAt: '2024-02-01',
            nextSession: '2024-02-17 17:00',
          },
        ],
        certificates: [],
      })
      router.push('/dashboard')
    } else {
      setError(language === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill all fields')
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-border/50 bg-card">
          <CardHeader className="text-center">
            {/* Logo */}
            <Link href="/" className="mx-auto mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center bg-primary">
                <span className="font-mono text-xl font-bold text-primary-foreground">I</span>
              </div>
            </Link>
            <CardTitle className="text-2xl">{t.auth.login}</CardTitle>
            <CardDescription>
              {language === 'ar' 
                ? 'أدخل بياناتك للوصول إلى حسابك'
                : 'Enter your credentials to access your account'}
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <div className="bg-destructive/10 p-3 text-center text-sm text-destructive">
                  {error}
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">{t.auth.email}</Label>
                <div className="relative">
                  <Mail className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="ps-10"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{t.auth.password}</Label>
                  <Link href="#" className="text-xs text-primary hover:underline">
                    {t.auth.forgotPassword}
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="ps-10 pe-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="me-2 h-4 w-4 animate-spin" />
                    {t.common.loading}
                  </>
                ) : (
                  t.auth.loginButton
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                {t.auth.noAccount}{' '}
                <Link href="/signup" className="text-primary hover:underline">
                  {t.auth.signup}
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}
