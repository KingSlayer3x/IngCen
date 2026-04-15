# Ingenium - مركز التدريب المهني

Professional Training Center in Tartous, Syria

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescript.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind CSS-4-38bdf8)](https://tailwindcss.com)

## حول المركز

Ingenium هو مركز تدريب مهني متخصص في طرطوس، سوريا. يوفر المركز دورات تدريبية متخصصة في:

- **الهندسة المدنية** - برامج BIM والتحليل الإنشائي
- **التصميم المعماري** - النمذجة والتصور
- **تطوير الويب** - تطبيقات الويب الحديثة

## التقنيات

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI**: Radix UI + Tailwind CSS 4
- **State**: Zustand
- **Animation**: Framer Motion
- **Form**: React Hook Form + Zod

##开始使用

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Start production
npm run start
```

## هيكل المشروع

```
app/                    # Next.js App Router pages
├── page.tsx            # Home page
├── about/              # About page
├── courses/            # Courses catalog
│   └── [slug]/        # Course detail
├── cart/              # Shopping cart
├── checkout/          # Checkout flow
├── contact/           # Contact page
├── login/            # Login page
├── signup/           # Signup page
└── dashboard/        # User dashboard

components/            # React components
├── home/             # Home page sections
├── ui/               # Radix UI components
├── header.tsx
├── footer.tsx
└── course-card.tsx

lib/                   # Utilities and data
├── data.ts            # Courses, team, testimonials
├── translations.ts    # AR/EN translations
└── utils.ts           # Helper functions

store/                 # Zustand state
├── app-store.ts        # Language, theme, user
└── cart-store.ts     # Shopping cart
```

## الفريق

| المدرب | التخصص |
|--------|--------|
| أ. نديم يوسف | ETABS, SAFE, Revit |
| م. أكرم محفوض | BIM, Robot, Revit Structure |
| م. زينب يونس | Primavera P6, الحسابات اليدوية |
| م. هلا محمود | 3ds Max, SketchUp, AI |
| م. منى وسوف | SketchUp, Revit,Garden Planner |
| م. علي العمر | HTML/CSS, JavaScript, React, Next.js |

## الصفحات

- `/` - الصفحة الرئيسية
- `/courses` - الدورات التدريبية
- `/courses/[slug]` - تفاصيل الدورة
- `/about` - من نحن
- `/contact` - اتصل بنا
- `/cart` - السلة
- `/checkout` - إتمام الشراء
- `/login` - تسجيل الدخول
- `/signup` - إنشاء حساب
- `/dashboard` - لوحة التحكم

## الإ Enrollment

Students contact via WhatsApp for enrollment. The checkout flow generates a pre-filled message with course details.

## الترخيص

مركز Ingenium للتدريب المهني - جميع الحقوق محفوظة 2026

---

Built with Next.js & Tailwind CSS