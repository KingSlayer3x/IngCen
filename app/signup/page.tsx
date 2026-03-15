import type { Metadata } from 'next'
import { SignupForm } from './signup-form'

export const metadata: Metadata = {
  title: 'إنشاء حساب | Sign Up',
}

export default function SignupPage() {
  return <SignupForm />
}
