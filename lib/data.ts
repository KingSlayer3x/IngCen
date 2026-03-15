import type { Course, Testimonial, TeamMember } from '@/types'

export const courses: Course[] = [
  // Civil Engineering Software
  {
    id: 'revit-fundamentals',
    slug: 'revit-fundamentals',
    name: {
      ar: 'أساسيات Revit للهندسة المدنية',
      en: 'Revit Fundamentals for Civil Engineering'
    },
    description: {
      ar: 'تعلم أساسيات برنامج Revit لتصميم المباني والهياكل الإنشائية. يغطي هذا الدورة جميع الأدوات الأساسية والتقنيات المطلوبة للمشاريع الهندسية.',
      en: 'Learn the fundamentals of Revit for building and structural design. This course covers all essential tools and techniques required for engineering projects.'
    },
    category: 'civil',
    software: 'Autodesk Revit',
    icon: 'Building2',
    duration: '40 ساعة',
    level: 'beginner',
    price: 450000,
    currency: 'SYP',
    instructor: {
      id: 'inst-1',
      name: { ar: 'م. أحمد الخطيب', en: 'Eng. Ahmad Al-Khatib' },
      title: { ar: 'مهندس إنشائي أول', en: 'Senior Structural Engineer' },
      bio: { ar: 'خبرة أكثر من 10 سنوات في التصميم الإنشائي باستخدام برامج BIM', en: 'Over 10 years of experience in structural design using BIM software' },
      image: '/instructors/ahmad.jpg'
    },
    syllabus: [
      { title: { ar: 'مقدمة في Revit', en: 'Introduction to Revit' }, description: { ar: 'التعرف على واجهة البرنامج والأدوات الأساسية', en: 'Getting familiar with the interface and basic tools' } },
      { title: { ar: 'إنشاء المشروع', en: 'Project Setup' }, description: { ar: 'إعداد المشروع والمستويات والشبكات', en: 'Setting up projects, levels, and grids' } },
      { title: { ar: 'العناصر الإنشائية', en: 'Structural Elements' }, description: { ar: 'إنشاء الأعمدة والجسور والبلاطات', en: 'Creating columns, beams, and slabs' } },
      { title: { ar: 'التوثيق والإخراج', en: 'Documentation & Output' }, description: { ar: 'إعداد اللوحات والجداول والتصدير', en: 'Preparing sheets, schedules, and exporting' } }
    ],
    schedule: 'السبت والاثنين - 6:00 مساءً',
    image: '/courses/revit.jpg'
  },
  {
    id: 'etabs-structural',
    slug: 'etabs-structural',
    name: {
      ar: 'التحليل الإنشائي باستخدام ETABS',
      en: 'Structural Analysis with ETABS'
    },
    description: {
      ar: 'دورة متقدمة في التحليل والتصميم الإنشائي للمباني متعددة الطوابق باستخدام برنامج ETABS.',
      en: 'Advanced course in structural analysis and design of multi-story buildings using ETABS software.'
    },
    category: 'civil',
    software: 'CSI ETABS',
    icon: 'Layers',
    duration: '50 ساعة',
    level: 'intermediate',
    price: 550000,
    currency: 'SYP',
    instructor: {
      id: 'inst-2',
      name: { ar: 'م. سارة العلي', en: 'Eng. Sara Al-Ali' },
      title: { ar: 'مهندسة تحليل إنشائي', en: 'Structural Analysis Engineer' },
      bio: { ar: 'متخصصة في التحليل الإنشائي للمباني العالية', en: 'Specialized in structural analysis of high-rise buildings' },
      image: '/instructors/sara.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات النمذجة', en: 'Modeling Fundamentals' }, description: { ar: 'إنشاء النموذج الإنشائي وتعريف العناصر', en: 'Creating structural models and defining elements' } },
      { title: { ar: 'الأحمال والتحليل', en: 'Loads & Analysis' }, description: { ar: 'تطبيق الأحمال وإجراء التحليل', en: 'Applying loads and performing analysis' } },
      { title: { ar: 'التصميم', en: 'Design' }, description: { ar: 'تصميم العناصر الخرسانية والفولاذية', en: 'Designing concrete and steel elements' } }
    ],
    schedule: 'الأحد والثلاثاء - 5:00 مساءً',
    image: '/courses/etabs.jpg'
  },
  {
    id: 'autocad-civil',
    slug: 'autocad-civil',
    name: {
      ar: 'AutoCAD للرسم الهندسي',
      en: 'AutoCAD for Engineering Drawing'
    },
    description: {
      ar: 'إتقان AutoCAD للرسم الهندسي ثنائي وثلاثي الأبعاد مع التركيز على التطبيقات المدنية.',
      en: 'Master AutoCAD for 2D and 3D engineering drawing with focus on civil applications.'
    },
    category: 'civil',
    software: 'Autodesk AutoCAD',
    icon: 'PenTool',
    duration: '35 ساعة',
    level: 'beginner',
    price: 350000,
    currency: 'SYP',
    instructor: {
      id: 'inst-1',
      name: { ar: 'م. أحمد الخطيب', en: 'Eng. Ahmad Al-Khatib' },
      title: { ar: 'مهندس إنشائي أول', en: 'Senior Structural Engineer' },
      bio: { ar: 'خبرة أكثر من 10 سنوات في التصميم الإنشائي باستخدام برامج BIM', en: 'Over 10 years of experience in structural design using BIM software' },
      image: '/instructors/ahmad.jpg'
    },
    syllabus: [
      { title: { ar: 'الأساسيات', en: 'Basics' }, description: { ar: 'أدوات الرسم والتعديل الأساسية', en: 'Basic drawing and modification tools' } },
      { title: { ar: 'الرسم ثنائي الأبعاد', en: '2D Drawing' }, description: { ar: 'إنشاء المخططات الهندسية', en: 'Creating engineering plans' } },
      { title: { ar: 'الرسم ثلاثي الأبعاد', en: '3D Drawing' }, description: { ar: 'النمذجة ثلاثية الأبعاد', en: '3D modeling techniques' } }
    ],
    schedule: 'الأربعاء والخميس - 6:00 مساءً',
    image: '/courses/autocad.jpg'
  },
  {
    id: 'sap2000-advanced',
    slug: 'sap2000-advanced',
    name: {
      ar: 'SAP2000 المتقدم',
      en: 'Advanced SAP2000'
    },
    description: {
      ar: 'دورة متقدمة في التحليل الإنشائي للجسور والهياكل الخاصة باستخدام SAP2000.',
      en: 'Advanced course in structural analysis of bridges and special structures using SAP2000.'
    },
    category: 'civil',
    software: 'CSI SAP2000',
    icon: 'GitBranch',
    duration: '45 ساعة',
    level: 'advanced',
    price: 600000,
    currency: 'SYP',
    instructor: {
      id: 'inst-2',
      name: { ar: 'م. سارة العلي', en: 'Eng. Sara Al-Ali' },
      title: { ar: 'مهندسة تحليل إنشائي', en: 'Structural Analysis Engineer' },
      bio: { ar: 'متخصصة في التحليل الإنشائي للمباني العالية', en: 'Specialized in structural analysis of high-rise buildings' },
      image: '/instructors/sara.jpg'
    },
    syllabus: [
      { title: { ar: 'الهياكل المعقدة', en: 'Complex Structures' }, description: { ar: 'نمذجة الهياكل غير المنتظمة', en: 'Modeling irregular structures' } },
      { title: { ar: 'التحليل الديناميكي', en: 'Dynamic Analysis' }, description: { ar: 'تحليل الزلازل والرياح', en: 'Seismic and wind analysis' } }
    ],
    schedule: 'السبت - 4:00 مساءً',
    image: '/courses/sap2000.jpg'
  },

  // Architecture & Design
  {
    id: '3dsmax-visualization',
    slug: '3dsmax-visualization',
    name: {
      ar: 'التصور المعماري باستخدام 3ds Max',
      en: 'Architectural Visualization with 3ds Max'
    },
    description: {
      ar: 'تعلم إنشاء تصورات معمارية احترافية باستخدام 3ds Max و V-Ray.',
      en: 'Learn to create professional architectural visualizations using 3ds Max and V-Ray.'
    },
    category: 'architecture',
    software: 'Autodesk 3ds Max',
    icon: 'Box',
    duration: '60 ساعة',
    level: 'intermediate',
    price: 650000,
    currency: 'SYP',
    instructor: {
      id: 'inst-3',
      name: { ar: 'م. ليلى حسن', en: 'Arch. Layla Hassan' },
      title: { ar: 'مصممة معمارية', en: 'Architectural Designer' },
      bio: { ar: 'فنانة تصور معماري مع خبرة في المشاريع الدولية', en: 'Architectural visualization artist with international project experience' },
      image: '/instructors/layla.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات 3ds Max', en: '3ds Max Basics' }, description: { ar: 'واجهة البرنامج والنمذجة الأساسية', en: 'Interface and basic modeling' } },
      { title: { ar: 'المواد والإضاءة', en: 'Materials & Lighting' }, description: { ar: 'إنشاء المواد الواقعية والإضاءة', en: 'Creating realistic materials and lighting' } },
      { title: { ar: 'الرندر', en: 'Rendering' }, description: { ar: 'إعدادات V-Ray للإخراج النهائي', en: 'V-Ray settings for final output' } }
    ],
    schedule: 'الأحد والثلاثاء والخميس - 7:00 مساءً',
    image: '/courses/3dsmax.jpg'
  },
  {
    id: 'sketchup-modeling',
    slug: 'sketchup-modeling',
    name: {
      ar: 'النمذجة المعمارية بـ SketchUp',
      en: 'Architectural Modeling with SketchUp'
    },
    description: {
      ar: 'دورة شاملة في النمذجة ثلاثية الأبعاد للمشاريع المعمارية باستخدام SketchUp.',
      en: 'Comprehensive course in 3D modeling for architectural projects using SketchUp.'
    },
    category: 'architecture',
    software: 'SketchUp Pro',
    icon: 'Boxes',
    duration: '30 ساعة',
    level: 'beginner',
    price: 300000,
    currency: 'SYP',
    instructor: {
      id: 'inst-3',
      name: { ar: 'م. ليلى حسن', en: 'Arch. Layla Hassan' },
      title: { ar: 'مصممة معمارية', en: 'Architectural Designer' },
      bio: { ar: 'فنانة تصور معماري مع خبرة في المشاريع الدولية', en: 'Architectural visualization artist with international project experience' },
      image: '/instructors/layla.jpg'
    },
    syllabus: [
      { title: { ar: 'أدوات الرسم', en: 'Drawing Tools' }, description: { ar: 'أدوات الرسم والدفع/السحب', en: 'Drawing tools and push/pull' } },
      { title: { ar: 'المكونات', en: 'Components' }, description: { ar: 'إنشاء واستخدام المكونات', en: 'Creating and using components' } }
    ],
    schedule: 'الاثنين والأربعاء - 5:00 مساءً',
    image: '/courses/sketchup.jpg'
  },
  {
    id: 'lumion-rendering',
    slug: 'lumion-rendering',
    name: {
      ar: 'الإخراج المعماري بـ Lumion',
      en: 'Architectural Rendering with Lumion'
    },
    description: {
      ar: 'تعلم إنشاء إخراج معماري سينمائي عالي الجودة باستخدام Lumion.',
      en: 'Learn to create high-quality cinematic architectural renders using Lumion.'
    },
    category: 'architecture',
    software: 'Lumion',
    icon: 'Video',
    duration: '25 ساعة',
    level: 'intermediate',
    price: 400000,
    currency: 'SYP',
    instructor: {
      id: 'inst-3',
      name: { ar: 'م. ليلى حسن', en: 'Arch. Layla Hassan' },
      title: { ar: 'مصممة معمارية', en: 'Architectural Designer' },
      bio: { ar: 'فنانة تصور معماري مع خبرة في المشاريع الدولية', en: 'Architectural visualization artist with international project experience' },
      image: '/instructors/layla.jpg'
    },
    syllabus: [
      { title: { ar: 'استيراد النماذج', en: 'Model Import' }, description: { ar: 'استيراد النماذج من برامج أخرى', en: 'Importing models from other software' } },
      { title: { ar: 'المواد والبيئة', en: 'Materials & Environment' }, description: { ar: 'إعداد المواد والبيئة المحيطة', en: 'Setting up materials and environment' } },
      { title: { ar: 'الإخراج والفيديو', en: 'Rendering & Video' }, description: { ar: 'إنتاج الصور والفيديوهات', en: 'Producing images and videos' } }
    ],
    schedule: 'السبت - 10:00 صباحاً',
    image: '/courses/lumion.jpg'
  },

  // Web Development
  {
    id: 'html-css-fundamentals',
    slug: 'html-css-fundamentals',
    name: {
      ar: 'أساسيات HTML و CSS',
      en: 'HTML & CSS Fundamentals'
    },
    description: {
      ar: 'دورة تأسيسية في بناء صفحات الويب باستخدام HTML و CSS مع أفضل الممارسات.',
      en: 'Foundation course in building web pages using HTML and CSS with best practices.'
    },
    category: 'webdev',
    software: 'HTML/CSS',
    icon: 'Code2',
    duration: '30 ساعة',
    level: 'beginner',
    price: 250000,
    currency: 'SYP',
    instructor: {
      id: 'inst-4',
      name: { ar: 'م. عمر الحسين', en: 'Omar Al-Hussein' },
      title: { ar: 'مطور ويب أول', en: 'Senior Web Developer' },
      bio: { ar: 'مطور Full Stack مع خبرة 8 سنوات', en: 'Full Stack developer with 8 years of experience' },
      image: '/instructors/omar.jpg'
    },
    syllabus: [
      { title: { ar: 'HTML الأساسي', en: 'Basic HTML' }, description: { ar: 'العناصر والسمات والنماذج', en: 'Elements, attributes, and forms' } },
      { title: { ar: 'CSS الأساسي', en: 'Basic CSS' }, description: { ar: 'التنسيق والألوان والتخطيط', en: 'Styling, colors, and layout' } },
      { title: { ar: 'التصميم المتجاوب', en: 'Responsive Design' }, description: { ar: 'Media queries و Flexbox', en: 'Media queries and Flexbox' } }
    ],
    schedule: 'الأحد والثلاثاء - 6:00 مساءً',
    image: '/courses/html-css.jpg'
  },
  {
    id: 'javascript-modern',
    slug: 'javascript-modern',
    name: {
      ar: 'JavaScript الحديث',
      en: 'Modern JavaScript'
    },
    description: {
      ar: 'تعلم JavaScript الحديث (ES6+) مع التركيز على البرمجة الفعلية والمشاريع العملية.',
      en: 'Learn modern JavaScript (ES6+) with focus on practical programming and hands-on projects.'
    },
    category: 'webdev',
    software: 'JavaScript',
    icon: 'FileCode',
    duration: '45 ساعة',
    level: 'intermediate',
    price: 400000,
    currency: 'SYP',
    instructor: {
      id: 'inst-4',
      name: { ar: 'م. عمر الحسين', en: 'Omar Al-Hussein' },
      title: { ar: 'مطور ويب أول', en: 'Senior Web Developer' },
      bio: { ar: 'مطور Full Stack مع خبرة 8 سنوات', en: 'Full Stack developer with 8 years of experience' },
      image: '/instructors/omar.jpg'
    },
    syllabus: [
      { title: { ar: 'ES6+ الميزات', en: 'ES6+ Features' }, description: { ar: 'Arrow functions, destructuring, modules', en: 'Arrow functions, destructuring, modules' } },
      { title: { ar: 'البرمجة غير المتزامنة', en: 'Async Programming' }, description: { ar: 'Promises و async/await', en: 'Promises and async/await' } },
      { title: { ar: 'DOM و الأحداث', en: 'DOM & Events' }, description: { ar: 'التعامل مع العناصر والأحداث', en: 'Working with elements and events' } }
    ],
    schedule: 'الاثنين والأربعاء والجمعة - 7:00 مساءً',
    image: '/courses/javascript.jpg'
  },
  {
    id: 'react-complete',
    slug: 'react-complete',
    name: {
      ar: 'React الشامل',
      en: 'Complete React Course'
    },
    description: {
      ar: 'دورة شاملة في React لبناء تطبيقات ويب تفاعلية حديثة.',
      en: 'Comprehensive React course for building modern interactive web applications.'
    },
    category: 'webdev',
    software: 'React',
    icon: 'Atom',
    duration: '55 ساعة',
    level: 'intermediate',
    price: 500000,
    currency: 'SYP',
    instructor: {
      id: 'inst-5',
      name: { ar: 'م. نور الدين', en: 'Nour El-Din' },
      title: { ar: 'مهندس Frontend', en: 'Frontend Engineer' },
      bio: { ar: 'متخصص في React و Next.js', en: 'Specialized in React and Next.js' },
      image: '/instructors/nour.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات React', en: 'React Basics' }, description: { ar: 'Components, Props, State', en: 'Components, Props, State' } },
      { title: { ar: 'Hooks المتقدمة', en: 'Advanced Hooks' }, description: { ar: 'useEffect, useContext, custom hooks', en: 'useEffect, useContext, custom hooks' } },
      { title: { ar: 'إدارة الحالة', en: 'State Management' }, description: { ar: 'Redux و Zustand', en: 'Redux and Zustand' } }
    ],
    schedule: 'السبت والاثنين - 5:00 مساءً',
    image: '/courses/react.jpg'
  },
  {
    id: 'nextjs-fullstack',
    slug: 'nextjs-fullstack',
    name: {
      ar: 'Next.js للتطوير الكامل',
      en: 'Next.js Full Stack Development'
    },
    description: {
      ar: 'تعلم بناء تطبيقات Full Stack باستخدام Next.js مع App Router وأحدث الميزات.',
      en: 'Learn to build Full Stack applications using Next.js with App Router and latest features.'
    },
    category: 'webdev',
    software: 'Next.js',
    icon: 'Globe',
    duration: '60 ساعة',
    level: 'advanced',
    price: 650000,
    currency: 'SYP',
    instructor: {
      id: 'inst-5',
      name: { ar: 'م. نور الدين', en: 'Nour El-Din' },
      title: { ar: 'مهندس Frontend', en: 'Frontend Engineer' },
      bio: { ar: 'متخصص في React و Next.js', en: 'Specialized in React and Next.js' },
      image: '/instructors/nour.jpg'
    },
    syllabus: [
      { title: { ar: 'App Router', en: 'App Router' }, description: { ar: 'التوجيه والتخطيطات', en: 'Routing and layouts' } },
      { title: { ar: 'Server Components', en: 'Server Components' }, description: { ar: 'RSC و data fetching', en: 'RSC and data fetching' } },
      { title: { ar: 'API Routes', en: 'API Routes' }, description: { ar: 'بناء الـ Backend', en: 'Building the Backend' } },
      { title: { ar: 'النشر', en: 'Deployment' }, description: { ar: 'Vercel و أفضل الممارسات', en: 'Vercel and best practices' } }
    ],
    schedule: 'الثلاثاء والخميس - 6:00 مساءً',
    image: '/courses/nextjs.jpg'
  },
  {
    id: 'nodejs-backend',
    slug: 'nodejs-backend',
    name: {
      ar: 'Node.js لتطوير الخادم',
      en: 'Node.js Backend Development'
    },
    description: {
      ar: 'دورة متقدمة في بناء خوادم وAPIs باستخدام Node.js و Express.',
      en: 'Advanced course in building servers and APIs using Node.js and Express.'
    },
    category: 'webdev',
    software: 'Node.js',
    icon: 'Server',
    duration: '50 ساعة',
    level: 'advanced',
    price: 550000,
    currency: 'SYP',
    instructor: {
      id: 'inst-4',
      name: { ar: 'م. عمر الحسين', en: 'Omar Al-Hussein' },
      title: { ar: 'مطور ويب أول', en: 'Senior Web Developer' },
      bio: { ar: 'مطور Full Stack مع خبرة 8 سنوات', en: 'Full Stack developer with 8 years of experience' },
      image: '/instructors/omar.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات Node.js', en: 'Node.js Basics' }, description: { ar: 'Modules, npm, file system', en: 'Modules, npm, file system' } },
      { title: { ar: 'Express.js', en: 'Express.js' }, description: { ar: 'إنشاء APIs و middleware', en: 'Creating APIs and middleware' } },
      { title: { ar: 'قواعد البيانات', en: 'Databases' }, description: { ar: 'MongoDB و PostgreSQL', en: 'MongoDB and PostgreSQL' } }
    ],
    schedule: 'الأحد والأربعاء - 7:00 مساءً',
    image: '/courses/nodejs.jpg'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: { ar: 'محمد العبدالله', en: 'Mohammad Al-Abdullah' },
    role: { ar: 'مهندس مدني', en: 'Civil Engineer' },
    content: {
      ar: 'دورة ETABS في Ingenium كانت نقطة تحول في مسيرتي المهنية. المدربون محترفون والمحتوى عملي ومحدث.',
      en: 'The ETABS course at Ingenium was a turning point in my career. The trainers are professional and the content is practical and up-to-date.'
    },
    image: '/testimonials/mohammad.jpg',
    rating: 5
  },
  {
    id: 'test-2',
    name: { ar: 'فاطمة الأحمد', en: 'Fatima Al-Ahmad' },
    role: { ar: 'مصممة معمارية', en: 'Architectural Designer' },
    content: {
      ar: 'تعلمت 3ds Max من الصفر وأصبحت قادرة على إنتاج تصورات معمارية احترافية. شكراً Ingenium!',
      en: 'I learned 3ds Max from scratch and became able to produce professional architectural visualizations. Thanks Ingenium!'
    },
    image: '/testimonials/fatima.jpg',
    rating: 5
  },
  {
    id: 'test-3',
    name: { ar: 'علي حسن', en: 'Ali Hassan' },
    role: { ar: 'مطور ويب', en: 'Web Developer' },
    content: {
      ar: 'مسار تطوير الويب شامل ومنظم. بدأت من الأساسيات ووصلت لبناء تطبيقات Full Stack.',
      en: 'The web development track is comprehensive and well-organized. I started from basics and reached building Full Stack applications.'
    },
    image: '/testimonials/ali.jpg',
    rating: 5
  },
  {
    id: 'test-4',
    name: { ar: 'رنا السعيد', en: 'Rana Al-Saeed' },
    role: { ar: 'طالبة هندسة', en: 'Engineering Student' },
    content: {
      ar: 'أفضل مركز تدريب في سوريا. البيئة محفزة والدعم مستمر حتى بعد انتهاء الدورة.',
      en: 'Best training center in Syria. The environment is motivating and support continues even after the course ends.'
    },
    image: '/testimonials/rana.jpg',
    rating: 5
  }
]

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: { ar: 'د. خالد المصري', en: 'Dr. Khaled Al-Masri' },
    role: { ar: 'المؤسس والمدير', en: 'Founder & Director' },
    bio: {
      ar: 'حاصل على دكتوراه في الهندسة المدنية مع رؤية لتطوير الكوادر الهندسية في سوريا.',
      en: 'PhD in Civil Engineering with a vision to develop engineering talents in Syria.'
    },
    image: '/team/khaled.jpg'
  },
  {
    id: 'team-2',
    name: { ar: 'م. هدى العمر', en: 'Eng. Huda Al-Omar' },
    role: { ar: 'مديرة الأكاديمية', en: 'Academy Director' },
    bio: {
      ar: 'خبرة 15 سنة في التعليم والتدريب المهني.',
      en: '15 years of experience in education and professional training.'
    },
    image: '/team/huda.jpg'
  },
  {
    id: 'team-3',
    name: { ar: 'م. باسل النجار', en: 'Eng. Basel Al-Najjar' },
    role: { ar: 'رئيس قسم البرمجيات', en: 'Head of Software Department' },
    bio: {
      ar: 'متخصص في برامج التصميم الهندسي وتقنيات BIM.',
      en: 'Specialized in engineering design software and BIM technologies.'
    },
    image: '/team/basel.jpg'
  }
]

export const stats = {
  students: 2500,
  courses: 25,
  instructors: 12,
  years: 8
}

export const categoryLabels = {
  civil: { ar: 'الهندسة المدنية', en: 'Civil Engineering' },
  architecture: { ar: 'التصميم المعماري', en: 'Architecture & Design' },
  webdev: { ar: 'تطوير الويب', en: 'Web Development' }
}

export const levelLabels = {
  beginner: { ar: 'مبتدئ', en: 'Beginner' },
  intermediate: { ar: 'متوسط', en: 'Intermediate' },
  advanced: { ar: 'متقدم', en: 'Advanced' }
}
