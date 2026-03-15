import type { Metadata } from 'next'
import { CartContent } from './cart-content'

export const metadata: Metadata = {
  title: 'سلة التسوق | Shopping Cart',
}

export default function CartPage() {
  return <CartContent />
}
