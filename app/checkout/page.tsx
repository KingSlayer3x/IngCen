'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ShoppingCart, ArrowRight, CheckCircle, Loader2, CreditCard, Smartphone } from 'lucide-react'
import * as Icons from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { useAppStore } from '@/store/app-store'
import { useCartStore } from '@/store/cart-store'
import { translations } from '@/lib/translations'
import { courseIcons } from '@/lib/data'

type PaymentMethod = 'cash' | 'whatsapp'

export default function CheckoutPage() {
  const router = useRouter()
  const { language, user, login } = useAppStore()
  const { items, getTotal, clearCart } = useCartStore()
  const t = translations[language]
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('whatsapp')
  const [contactInfo, setContactInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    notes: ''
  })

  useEffect(() => {
    setMounted(true)
    if (user) {
      setContactInfo({
        name: user.name,
        email: user.email,
        phone: user.phone,
        notes: ''
      })
    }
  }, [user])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-SY' : 'en-US').format(price)
  }

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin border-4 border-primary border-t-transparent" />
        </div>
      </div>
    )
  }

  if (items.length === 0 && step === 'form') {
    return (
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-md text-center"
        >
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center bg-muted text-muted-foreground">
            <ShoppingCart className="h-12 w-12" />
          </div>
          <h1 className="text-2xl font-bold">{t.cart.empty}</h1>
          <p className="mt-2 text-muted-foreground">{t.cart.emptyDescription}</p>
          <Link href="/courses" className="mt-6 inline-block">
            <Button className="gap-2 bg-primary text-primary-foreground">
              {t.cart.browseCourses}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (paymentMethod === 'whatsapp') {
      const total = getTotal()
      const coursesList = items.map(item => `• ${item.course.name[language]}`).join('\n')
      const message = encodeURIComponent(
        language === 'ar'
          ? `مرحباً، أريد التسجيل في الدورات التالية:\n\n${coursesList}\n\nالإجمالي: ${formatPrice(total)} ${t.courses.currency}\n\nالاسم: ${contactInfo.name}\nالبريد: ${contactInfo.email}\nالهاتف: ${contactInfo.phone}`
          : `Hello, I want to enroll in the following courses:\n\n${coursesList}\n\nTotal: ${formatPrice(total)} ${t.courses.currency}\n\nName: ${contactInfo.name}\nEmail: ${contactInfo.email}\nPhone: ${contactInfo.phone}`
      )
      window.open(`https://wa.me/963987562678?text=${message}`, '_blank')
    }

    setStep('success')
    setIsLoading(false)
  }

  if (step === 'success') {
    return (
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto max-w-md"
        >
          <Card className="border-primary/20 bg-card text-center">
            <CardContent className="pt-12 pb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center bg-primary/10 text-primary"
              >
                <CheckCircle className="h-10 w-10" />
              </motion.div>
              <h2 className="text-2xl font-bold">
                {paymentMethod === 'whatsapp'
                  ? language === 'ar' ? 'تم إرسال طلبك!' : 'Order Submitted!'
                  : language === 'ar' ? 'تم تأكيد طلبك!' : 'Order Confirmed!'}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {paymentMethod === 'whatsapp'
                  ? language === 'ar'
                    ? 'سيتم التواصل معك عبر واتساب لإتمام عملية الدفع'
                    : 'We will contact you via WhatsApp to complete the payment'
                  : language === 'ar'
                    ? 'شكراً لك! سيتم إرسال تفاصيل الدفع إلى بريدك'
                    : 'Thank you! Payment details will be sent to your email'}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 pb-8">
              <Link href="/courses">
                <Button variant="outline" className="gap-2">
                  <ArrowRight className="h-4 w-4" />
                  {t.cart.continueShopping}
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="gap-2 bg-primary text-primary-foreground">
                  {language === 'ar' ? 'الذهاب للوحة التحكم' : 'Go to Dashboard'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-3xl font-bold">
          {language === 'ar' ? 'إتمام الشراء' : 'Checkout'}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact & Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>
                    {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'ar'
                      ? 'أدخل بياناتك للتواصل معك'
                      : 'Enter your details so we can contact you'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                      </Label>
                      <Input
                        id="name"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        required
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      required
                      dir="ltr"
                      placeholder="+963 xxx xxx xxx"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">
                      {language === 'ar' ? 'ملاحظات (اختياري)' : 'Notes (Optional)'}
                    </Label>
                    <Input
                      id="notes"
                      value={contactInfo.notes}
                      onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                      placeholder={language === 'ar' ? 'أي ملاحظات إضافية...' : 'Any additional notes...'}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>
                    {language === 'ar' ? 'طريقة الدفع' : 'Payment Method'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'ar'
                      ? 'اختر طريقة الدفع المناسبة'
                      : 'Choose your preferred payment method'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <div>
                      <RadioGroupItem value="whatsapp" id="whatsapp" className="peer sr-only" />
                      <Label
                        htmlFor="whatsapp"
                        className="flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-border p-4 peer-checked:border-primary peer-checked:bg-primary/5 transition-colors"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </div>
                        <span className="font-semibold">
                          {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {language === 'ar' ? 'الدفع عند التسليم' : 'Pay on delivery'}
                        </span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="cash" id="cash" className="peer sr-only" />
                      <Label
                        htmlFor="cash"
                        className="flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-border p-4 peer-checked:border-primary peer-checked:bg-primary/5 transition-colors"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          <CreditCard className="h-6 w-6" />
                        </div>
                        <span className="font-semibold">
                          {language === 'ar' ? 'تحويل بنكي' : 'Bank Transfer'}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {language === 'ar' ? 'عبر الحساب البنكي' : 'Via bank account'}
                        </span>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-border/50">
                <CardHeader>
                  <CardTitle>
                    {language === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => {
                      const IconComponent = courseIcons[item.course.icon] || Icons.BookOpen
                      return (
                        <div key={item.course.id} className="flex gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary text-primary">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="truncate font-medium text-sm">{item.course.name[language]}</p>
                            <p className="text-xs text-muted-foreground">{item.course.software}</p>
                          </div>
                          <div className="text-sm font-semibold">
                            {formatPrice(item.course.price)} {t.courses.currency}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t.cart.subtotal}</span>
                      <span>{formatPrice(getTotal())} {t.courses.currency}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === 'ar' ? 'الضريبة' : 'Tax'}
                      </span>
                      <span className="text-muted-foreground">
                        {language === 'ar' ? 'غير مشمولة' : 'Not included'}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">{t.cart.total}</span>
                    <span className="text-xl font-bold text-primary">
                      {formatPrice(getTotal())} {t.courses.currency}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-3">
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
                    ) : paymentMethod === 'whatsapp' ? (
                      <>
                        <Smartphone className="me-2 h-4 w-4" />
                        {language === 'ar' ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}
                      </>
                    ) : (
                      <>
                        <CreditCard className="me-2 h-4 w-4" />
                        {language === 'ar' ? 'تأكيد الطلب' : 'Confirm Order'}
                      </>
                    )}
                  </Button>
                  <Link href="/cart" className="w-full">
                    <Button variant="ghost" className="w-full gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4" />
                      {language === 'ar' ? 'العودة للسلة' : 'Back to Cart'}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
