'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Phone, Lock, Eye, EyeOff, Loader2, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'

type Step = 'form' | 'otp' | 'success'

export function SignupForm() {
  const router = useRouter()
  const { language, login } = useAppStore()
  const t = translations[language]
  
  const [step, setStep] = useState<Step>('form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [otp, setOtp] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const BackIcon = language === 'ar' ? ArrowRight : ArrowLeft

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError(language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match')
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setStep('otp')
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (otp.length !== 6) {
      setError(language === 'ar' ? 'يرجى إدخال الرمز كاملاً' : 'Please enter the complete code')
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // Mock verification - in production, this would verify with backend
    if (otp === '123456' || otp.length === 6) {
      setStep('success')
      setTimeout(() => {
        login({
          id: '1',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          enrolledCourses: [],
          certificates: [],
        })
        router.push('/dashboard')
      }, 2000)
    } else {
      setError(language === 'ar' ? 'رمز التحقق غير صحيح' : 'Invalid verification code')
    }
    setIsLoading(false)
  }

  const handleResendOtp = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Show success message
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <AnimatePresence mode="wait">
          {/* Registration Form */}
          {step === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <Card className="border-border/50 bg-card">
                <CardHeader className="text-center">
                  <Link href="/" className="mx-auto mb-4 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center bg-primary">
                      <span className="font-mono text-xl font-bold text-primary-foreground">I</span>
                    </div>
                  </Link>
                  <CardTitle className="text-2xl">{t.auth.signup}</CardTitle>
                  <CardDescription>
                    {language === 'ar' 
                      ? 'أنشئ حسابك للبدء في رحلة التعلم'
                      : 'Create your account to start your learning journey'}
                  </CardDescription>
                </CardHeader>

                <form onSubmit={handleFormSubmit}>
                  <CardContent className="space-y-4">
                    {error && (
                      <div className="bg-destructive/10 p-3 text-center text-sm text-destructive">
                        {error}
                      </div>
                    )}

                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.auth.name}</Label>
                      <div className="relative">
                        <User className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="ps-10"
                          required
                        />
                      </div>
                    </div>

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

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.auth.phone}</Label>
                      <div className="relative">
                        <Phone className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+963 xxx xxx xxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="ps-10"
                          dir="ltr"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <Label htmlFor="password">{t.auth.password}</Label>
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

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">{t.auth.confirmPassword}</Label>
                      <div className="relative">
                        <Lock className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          className="ps-10"
                          required
                        />
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
                        t.auth.signupButton
                      )}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      {t.auth.hasAccount}{' '}
                      <Link href="/login" className="text-primary hover:underline">
                        {t.auth.login}
                      </Link>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </motion.div>
          )}

          {/* OTP Verification */}
          {step === 'otp' && (
            <motion.div
              key="otp"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="border-border/50 bg-card">
                <CardHeader className="text-center">
                  <button
                    onClick={() => setStep('form')}
                    className="mb-4 flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <BackIcon className="h-4 w-4" />
                    {t.common.back}
                  </button>
                  <CardTitle className="text-2xl">{t.auth.otpTitle}</CardTitle>
                  <CardDescription>
                    {t.auth.otpSubtitle}
                    <br />
                    <span className="font-medium text-foreground" dir="ltr">{formData.phone}</span>
                  </CardDescription>
                </CardHeader>

                <form onSubmit={handleOtpSubmit}>
                  <CardContent className="space-y-6">
                    {error && (
                      <div className="bg-destructive/10 p-3 text-center text-sm text-destructive">
                        {error}
                      </div>
                    )}

                    <div className="flex justify-center">
                      <InputOTP
                        maxLength={6}
                        value={otp}
                        onChange={setOtp}
                        className="gap-2"
                      >
                        <InputOTPGroup className="gap-2">
                          {[0, 1, 2, 3, 4, 5].map((index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="h-12 w-12 border-border bg-secondary text-lg"
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </div>

                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="w-full text-center text-sm text-primary hover:underline"
                      disabled={isLoading}
                    >
                      {t.auth.otpResend}
                    </button>
                  </CardContent>

                  <CardFooter>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isLoading || otp.length !== 6}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="me-2 h-4 w-4 animate-spin" />
                          {t.common.loading}
                        </>
                      ) : (
                        t.auth.otpVerify
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </motion.div>
          )}

          {/* Success */}
          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Card className="border-primary/20 bg-card">
                <CardContent className="py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center bg-primary/10 text-primary"
                  >
                    <CheckCircle className="h-10 w-10" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">
                    {language === 'ar' ? 'تم إنشاء الحساب بنجاح!' : 'Account Created Successfully!'}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'ar' 
                      ? 'جاري توجيهك إلى لوحة التحكم...'
                      : 'Redirecting you to the dashboard...'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
