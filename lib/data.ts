import type { LucideIcon } from 'lucide-react'
import { Building2, Layers, PenTool, Code2, Palette, Globe, Database, Figma, FileCode, Box, Layout, Cpu, Leaf } from 'lucide-react'
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
      id: 'team-1',
      name: { ar: 'أ. نديم يوسف', en: 'Mr. Nadeem Yousef' },
      title: { ar: 'مهندس مدني - مطور عقاري', en: 'Civil Engineer - Real Estate Developer' },
      bio: { ar: 'متخصص في Etabs و Revit', en: 'Specialized in Etabs and Revit' },
      image: '/instructors/nadeem.jpg'
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
    id: 'etabs-fundamental',
    slug: 'etabs-fundamental',
    name: {
      ar: 'أساسيات ETABS',
      en: 'ETABS Fundamentals'
    },
    description: {
      ar: 'تعلم أساسيات التحليل والإنشاء باستخدام برنامج ETABS.',
      en: 'Learn the fundamentals of structural analysis and design using ETABS software.'
    },
    category: 'civil',
    software: 'CSI ETABS',
    icon: 'Layers',
    duration: '40 ساعة',
    level: 'beginner',
    price: 450000,
    currency: 'SYP',
    instructor: {
      id: 'team-1',
      name: { ar: 'أ. نديم يوسف', en: 'Mr. Nadeem Yousef' },
      title: { ar: 'مهندس مدني - مطور عقاري', en: 'Civil Engineer - Real Estate Developer' },
      bio: { ar: 'متخصص في Etabs و Revit و SAFE', en: 'Specialized in Etabs, Revit, and SAFE' },
      image: '/instructors/nadeem.jpg'
    },
    syllabus: [
      { title: { ar: 'مقدمة في ETABS', en: 'Introduction to ETABS' }, description: { ar: 'واجهة البرنامج', en: 'Program interface' } },
      { title: { ar: 'إنشاء النموذج', en: 'Model Creation' }, description: { ar: 'إنشاء النموذج الإنشائي', en: 'Creating structural model' } },
      { title: { ar: 'التحليل الأساسي', en: 'Basic Analysis' }, description: { ar: 'تحليل الأحمال', en: 'Load analysis' } }
    ],
    schedule: 'الأحد والثلاثاء - 5:00 مساءً',
    image: '/courses/etabs.jpg'
  },
  {
    id: 'etabs-advanced',
    slug: 'etabs-advanced',
    name: {
      ar: 'ETABS المتقدم',
      en: 'ETABS Advanced'
    },
    description: {
      ar: 'تعلم التحليل والتصميم المتقدم للمباني العالية باستخدام ETABS.',
      en: 'Learn advanced analysis and design of high-rise buildings using ETABS.'
    },
    category: 'civil',
    software: 'CSI ETABS',
    icon: 'Layers',
    duration: '45 ساعة',
    level: 'advanced',
    price: 550000,
    currency: 'SYP',
    instructor: {
      id: 'team-1',
      name: { ar: 'أ. نديم يوسف', en: 'Mr. Nadeem Yousef' },
      title: { ar: 'مهندس مدني - мطور عقاري', en: 'Civil Engineer - Real Estate Developer' },
      bio: { ar: 'متخصص في Etabs و Revit و SAFE', en: 'Specialized in Etabs, Revit, and SAFE' },
      image: '/instructors/nadeem.jpg'
    },
    syllabus: [
      { title: { ar: 'النمذجة المتقدمة', en: 'Advanced Modeling' }, description: { ar: 'نمذجة المباني العالية', en: 'Modeling high-rise buildings' } },
      { title: { ar: 'تحليل الزلازل', en: 'Seismic Analysis' }, description: { ar: 'تحليل الزلازل والرياح', en: 'Seismic and wind analysis' } },
      { title: { ar: 'التصميم المتقدم', en: 'Advanced Design' }, description: { ar: 'تصميم العناصر', en: 'Element design' } }
    ],
    schedule: 'الاثنين والأربعاء - 6:00 مساءً',
    image: '/courses/etabs-advanced.jpg'
  },
  {
    id: 'safe-fundamental',
    slug: 'safe-fundamental',
    name: {
      ar: 'أساسيات SAFE',
      en: 'SAFE Fundamentals'
    },
    description: {
      ar: 'تعلم أساسيات تحلل وتصميم الألواح والأساسات باستخدام SAFE.',
      en: 'Learn the fundamentals of slab and foundation analysis and design using SAFE.'
    },
    category: 'civil',
    software: 'CSI SAFE',
    icon: 'Layers',
    duration: '35 ساعة',
    level: 'beginner',
    price: 400000,
    currency: 'SYP',
    instructor: {
      id: 'team-1',
      name: { ar: 'أ. نديم يوسف', en: 'Mr. Nadeem Yousef' },
      title: { ar: 'مهندس مدني - مطور عقاري', en: 'Civil Engineer - Real Estate Developer' },
      bio: { ar: 'متخصص في Etabs و Revit و SAFE', en: 'Specialized in Etabs, Revit, and SAFE' },
      image: '/instructors/nadeem.jpg'
    },
    syllabus: [
      { title: { ar: 'مقدمة في SAFE', en: 'Introduction to SAFE' }, description: { ar: 'واجهة البرنامج', en: 'Program interface' } },
      { title: { ar: 'تصميم الألواح', en: 'Slab Design' }, description: { ar: 'تصميم الألواح الخرسانية', en: 'Designing concrete slabs' } },
      { title: { ar: 'تصميم الأساسات', en: 'Foundation Design' }, description: { ar: 'تصميم الأساسات', en: 'Designing foundations' } }
    ],
    schedule: 'السبت - 4:00 مساءً',
    image: '/courses/safe.jpg'
  },
  {
    id: 'safe-advanced',
    slug: 'safe-advanced',
    name: {
      ar: 'SAFE المتقدم',
      en: 'SAFE Advanced'
    },
    description: {
      ar: 'تعلم التحليل والتصميم المتقدم للأساسات باستخدام SAFE.',
      en: 'Learn advanced analysis and design of foundations using SAFE.'
    },
    category: 'civil',
    software: 'CSI SAFE',
    icon: 'Layers',
    duration: '40 ساعة',
    level: 'advanced',
    price: 500000,
    currency: 'SYP',
    instructor: {
      id: 'team-1',
      name: { ar: 'أ. نديم يوسف', en: 'Mr. Nadeem Yousef' },
      title: { ar: 'مهندس مدني - مطور عقاري', en: 'Civil Engineer - Real Estate Developer' },
      bio: { ar: 'متخصص في Etabs و Revit و SAFE', en: 'Specialized in Etabs, Revit, and SAFE' },
      image: '/instructors/nadeem.jpg'
    },
    syllabus: [
      { title: { ar: 'الأساسات المتقدمة', en: 'Advanced Foundations' }, description: { ar: 'تصميم الأساسات العميقة', en: 'Deep foundation design' } },
      { title: { ar: 'تحليل التربة', en: 'Soil Analysis' }, description: { ar: 'تحليل التربة والأساسات', en: 'Soil and foundation analysis' } },
      { title: { ar: 'التصميم الإنشائي', en: 'Structural Design' }, description: { ar: 'تصميم التفاصيل الإنشائية', en: 'Structural detail design' } }
    ],
    schedule: 'الثلاثاء - 6:00 مساءً',
    image: '/courses/safe-advanced.jpg'
  },
  {
    id: 'bim-fundamentals',
    slug: 'bim-fundamentals',
    name: {
      ar: 'أساسيات BIM',
      en: 'Fundamental BIM'
    },
    description: {
      ar: 'تعلم أساسيات نمذجة المعلومات BIM وأفضل الممارسات في إدارة المشاريع.',
      en: 'Learn the fundamentals of Building Information Modeling and best practices in project management.'
    },
    category: 'civil',
    software: 'BIM',
    icon: 'Building2',
    duration: '30 ساعة',
    level: 'beginner',
    price: 350000,
    currency: 'SYP',
    instructor: {
      id: 'team-3',
      name: { ar: 'م. أكرم محفوض', en: 'Eng. Akram Mahfod' },
      title: { ar: 'مهندس مدني', en: 'Civil Engineer' },
      bio: { ar: 'متخصص في برامج التصميم الهندسي وتقنيات BIM', en: 'Specialized in engineering design software and BIM technologies' },
      image: '/instructors/akram.jpg'
    },
    syllabus: [
      { title: { ar: 'مقدمة في BIM', en: 'Introduction to BIM' }, description: { ar: 'مفهوم BIM وأهميته', en: 'Concept and importance of BIM' } },
      { title: { ar: 'أدوات BIM', en: 'BIM Tools' }, description: { ar: 'التعامل مع أدوات BIM', en: 'Working with BIM tools' } },
      { title: { ar: 'إدارة البيانات', en: 'Data Management' }, description: { ar: 'إدارة بيانات المشروع', en: 'Managing project data' } }
    ],
    schedule: 'الاثنين - 6:00 مساءً',
    image: '/courses/bim.jpg'
  },
  {
    id: 'robot-structural',
    slug: 'robot-structural',
    name: {
      ar: 'تحليل المنشآت باستخدام Robot',
      en: 'Robot Structural Analysis'
    },
    description: {
      ar: 'تعلم تحليل المنشآت باستخدام برنامج Robot Structural Analysis.',
      en: 'Learn structural analysis using Robot Structural Analysis software.'
    },
    category: 'civil',
    software: 'Robot Structural Analysis',
    icon: 'Cpu',
    duration: '40 ساعة',
    level: 'intermediate',
    price: 500000,
    currency: 'SYP',
    instructor: {
      id: 'team-3',
      name: { ar: 'م. أكرم محفوض', en: 'Eng. Akram Mahfod' },
      title: { ar: 'مهندس مدني', en: 'Civil Engineer' },
      bio: { ar: 'متخصص في برامج التصميم الهندسي وتقنيات BIM', en: 'Specialized in engineering design software and BIM technologies' },
      image: '/instructors/akram.jpg'
    },
    syllabus: [
      { title: { ar: 'مقدمة في Robot', en: 'Introduction to Robot' }, description: { ar: 'واجهة البرنامج الأساسية', en: 'Basic interface' } },
      { title: { ar: 'نمذجة المنشآت', en: 'Structural Modeling' }, description: { ar: 'إنشاء نماذج المنشآت', en: 'Creating structural models' } },
      { title: { ar: 'التحليل والتصميم', en: 'Analysis & Design' }, description: { ar: 'تحليل الأحمال والتصميم', en: 'Load analysis and design' } }
    ],
    schedule: 'الأربعاء - 6:00 مساءً',
    image: '/courses/robot.jpg'
  },
  {
    id: 'revit-structure',
    slug: 'revit-structure',
    name: {
      ar: 'Revit للهيكل الإنشائي',
      en: 'Revit Structure'
    },
    description: {
      ar: 'تعلم تصميم المنشآت الهيكلية باستخدام Revit Structure.',
      en: 'Learn structural design using Revit Structure.'
    },
    category: 'civil',
    software: 'Autodesk Revit',
    icon: 'Building2',
    duration: '35 ساعة',
    level: 'intermediate',
    price: 450000,
    currency: 'SYP',
    instructor: {
      id: 'team-3',
      name: { ar: 'م. أكرم محفوض', en: 'Eng. Akram Mahfod' },
      title: { ar: 'مهندس مدني', en: 'Civil Engineer' },
      bio: { ar: 'متخصص في برامج التصميم الهندسي وتقنيات BIM', en: 'Specialized in engineering design software and BIM technologies' },
      image: '/instructors/akram.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات Revit Structure', en: 'Revit Structure Basics' }, description: { ar: 'الواجهة والأدوات', en: 'Interface and tools' } },
      { title: { ar: 'إنشاء الهيكل', en: 'Creating Structure' }, description: { ar: 'إنشاء العناصر الإنشائية', en: 'Creating structural elements' } },
      { title: { ar: 'التوثيق', en: 'Documentation' }, description: { ar: 'إنتاج اللوحات والجداول', en: 'Producing sheets and schedules' } }
    ],
    schedule: 'الخميس - 6:00 مساءً',
    image: '/courses/revit-structure.jpg'
  },
  {
    id: 'primavera-p6',
    slug: 'primavera-p6',
    name: {
      ar: 'إدارة المشاريع بـ Primavera P6',
      en: 'Project Management with Primavera P6'
    },
    description: {
      ar: 'تعلم إدارة المشاريع والهندسة باستخدام برنامج Primavera P6.',
      en: 'Learn project and engineering management using Primavera P6 software.'
    },
    category: 'civil',
    software: 'Primavera P6',
    icon: 'Cpu',
    duration: '30 ساعة',
    level: 'intermediate',
    price: 450000,
    currency: 'SYP',
    instructor: {
      id: 'team-7',
      name: { ar: 'م. زينب يونس', en: 'Eng. Zineb Younes' },
      title: { ar: 'مهندسة مدنية', en: 'Civil Engineer' },
      bio: { ar: 'متخصصة في برامج التصميم الهندسي والحساب اليدوي', en: 'Specializing in engineering design and manual calculation software' },
      image: '/instructors/zineb.jpg'
    },
    syllabus: [
      { title: { ar: 'مقدمة في P6', en: 'Introduction to P6' }, description: { ar: 'واجهة البرنامج', en: 'Program interface' } },
      { title: { ar: 'جدولة المشاريع', en: 'Project Scheduling' }, description: { ar: 'إنشاء جدول المشروع', en: 'Creating project schedules' } },
      { title: { ar: 'إدارة الموارد', en: 'Resource Management' }, description: { ar: 'توزيع الموارد', en: 'Resource allocation' } }
    ],
    schedule: 'السبت - 4:00 مساءً',
    image: '/courses/primavera.jpg'
  },
  {
    id: 'manual-calculations',
    slug: 'manual-calculations',
    name: {
      ar: 'الحسابات اليدوية في الهندسة المدنية',
      en: 'Manual Calculations in Civil Engineering'
    },
    description: {
      ar: 'تعلم الحسابات اليدوية للمنشآت الخرسانية والمعدنية.',
      en: 'Learn manual calculations for concrete and steel structures.'
    },
    category: 'civil',
    software: 'Manual Calculations',
    icon: 'PenTool',
    duration: '25 ساعة',
    level: 'intermediate',
    price: 400000,
    currency: 'SYP',
    instructor: {
      id: 'team-7',
      name: { ar: 'م. زينب يونس', en: 'Eng. Zineb Younes' },
      title: { ar: 'مهندسة مدنية', en: 'Civil Engineer' },
      bio: { ar: 'متخصصة في برامج التصميم الهندسي والحساب اليدوي', en: 'Specializing in engineering design and manual calculation software' },
      image: '/instructors/zineb.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات الحسابات', en: 'Calculation Basics' }, description: { ar: 'مبادئ الحسابات', en: 'Calculation principles' } },
      { title: { ar: 'التصميم الخرساني', en: 'Concrete Design' }, description: { ar: 'تصميم العناصر الخرسانية', en: 'Designing concrete elements' } },
      { title: { ar: 'التصميم المعدني', en: 'Steel Design' }, description: { ar: 'تصميم العناصر المعدنية', en: 'Designing steel elements' } }
    ],
    schedule: 'الأحد - 5:00 مساءً',
    image: '/courses/manual.jpg'
  },

  // Architecture & Design
  {
    id: 'revit-architecture',
    slug: 'revit-architecture',
    name: {
      ar: 'Revit للتصميم المعماري',
      en: 'Revit for Architectural Design'
    },
    description: {
      ar: 'تعلم استخدام Revit لإنشاء تصاميم معمارية احترافية ونماذج BIM متكاملة.',
      en: 'Learn to use Revit for creating professional architectural designs and integrated BIM models.'
    },
    category: 'architecture',
    software: 'Autodesk Revit',
    icon: 'Building2',
    duration: '50 ساعة',
    level: 'intermediate',
    price: 550000,
    currency: 'SYP',
    instructor: {
      id: 'team-5',
      name: { ar: 'م. هلا محمود', en: 'Eng. Hala Mahmood' },
      title: { ar: 'مهندسة معمارية', en: 'Architect' },
      bio: { ar: 'متخصصة في Revit و 3ds Max و SketchUp', en: 'Specializing in Revit, 3ds Max, and SketchUp' },
      image: '/instructors/hala.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات Revit المعماري', en: 'Revit Architecture Basics' }, description: { ar: 'الواجهة والأدوات الأساسية', en: 'Interface and basic tools' } },
      { title: { ar: 'إنشاء النموذج', en: 'Creating the Model' }, description: { ar: 'الجدران والأبواب والنوافذ', en: 'Walls, doors, and windows' } },
      { title: { ar: 'المواد والتشطيبات', en: 'Materials & Finishes' }, description: { ar: 'تطبيق المواد والتشطيبات', en: 'Applying materials and finishes' } },
      { title: { ar: 'الإخراج والتوثيق', en: 'Rendering & Documentation' }, description: { ar: 'إنتاج اللوحات والمخططات', en: 'Producing sheets and drawings' } }
    ],
    schedule: 'الأحد والثلاثاء - 6:00 مساءً',
    image: '/courses/revit-arch.jpg'
  },
  {
    id: '3dsmax-visualization',
    slug: '3dsmax-visualization',
    name: {
      ar: 'التصور المعماري باستخدام 3ds Max',
      en: 'Architectural Visualization with 3ds Max'
    },
    description: {
      ar: 'تعلم إنشاء تصورات معمارية احترافية ثلاثية الأبعاد باستخدام 3ds Max مع V-Ray.',
      en: 'Learn to create professional 3D architectural visualizations using 3ds Max with V-Ray.'
    },
    category: 'architecture',
    software: 'Autodesk 3ds Max',
    icon: 'Box',
    duration: '45 ساعة',
    level: 'intermediate',
    price: 500000,
    currency: 'SYP',
    instructor: {
      id: 'team-5',
      name: { ar: 'م. هلا محمود', en: 'Eng. Hala Mahmood' },
      title: { ar: 'مهندسة معمارية', en: 'Architect' },
      bio: { ar: 'متخصصة في Revit و 3ds Max و SketchUp', en: 'Specializing in Revit, 3ds Max, and SketchUp' },
      image: '/instructors/hala.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات 3ds Max', en: '3ds Max Basics' }, description: { ar: 'واجهة البرنامج والنمذجة الأساسية', en: 'Interface and basic modeling' } },
      { title: { ar: 'المواد والإضاءة', en: 'Materials & Lighting' }, description: { ar: 'إنشاء المواد الواقعية والإضاءة', en: 'Creating realistic materials and lighting' } },
      { title: { ar: 'الكاميرا والإخراج', en: 'Camera & Rendering' }, description: { ar: 'إعداد الكاميرات وإعدادات V-Ray', en: 'Setting up cameras and V-Ray settings' } },
      { title: { ar: 'المشاريع العملية', en: 'Practical Projects' }, description: { ar: 'تطبيق عملي على مشاريع معمارية', en: 'Hands-on architectural projects' } }
    ],
    schedule: 'السبت والثلاثاء - 5:00 مساءً',
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
    icon: 'Box',
    duration: '30 ساعة',
    level: 'beginner',
    price: 300000,
    currency: 'SYP',
    instructor: {
      id: 'team-5',
      name: { ar: 'م. هلا محمود', en: 'Eng. Hala Mahmood' },
      title: { ar: 'مهندسة معمارية', en: 'Architect' },
      bio: { ar: 'متخصصة في Revit و 3ds Max و SketchUp', en: 'Specializing in Revit, 3ds Max, and SketchUp' },
      image: '/instructors/hala.jpg'
    },
    syllabus: [
      { title: { ar: 'أدوات الرسم', en: 'Drawing Tools' }, description: { ar: 'أدوات الرسم والدفع/السحب', en: 'Drawing tools and push/pull' } },
      { title: { ar: 'المكونات', en: 'Components' }, description: { ar: 'إنشاء واستخدام المكونات', en: 'Creating and using components' } },
      { title: { ar: 'المواد والإضاءة', en: 'Materials & Lighting' }, description: { ar: 'إضافة المواد والإضاءة', en: 'Adding materials and lighting' } }
    ],
    schedule: 'الاثنين والأربعاء - 5:00 مساءً',
    image: '/courses/sketchup.jpg'
  },
  {
    id: 'ai-revit-sketchup',
    slug: 'ai-revit-sketchup',
    name: {
      ar: 'استخدام الذكاء الاصطناعي مع Revit و SketchUp',
      en: 'Using AI with Revit and SketchUp'
    },
    description: {
      ar: 'تعلم دمج أدوات الذكاء الاصطناعي في سير العمل المعماري لتسريع النمذجة والتحسين.',
      en: 'Learn to integrate AI tools into your architectural workflow to speed up modeling and enhancement.'
    },
    category: 'architecture',
    software: 'AI + Revit/SketchUp',
    icon: 'Cpu',
    duration: '20 ساعة',
    level: 'intermediate',
    price: 350000,
    currency: 'SYP',
    instructor: {
      id: 'team-5',
      name: { ar: 'م. هلا محمود', en: 'Eng. Hala Mahmood' },
      title: { ar: 'مهندسة معمارية', en: 'Architect' },
      bio: { ar: 'متخصصة في Revit و 3ds Max و SketchUp', en: 'Specializing in Revit, 3ds Max, and SketchUp' },
      image: '/instructors/hala.jpg'
    },
    syllabus: [
      { title: { ar: 'مقدمة في الذكاء الاصطناعي', en: 'Introduction to AI' }, description: { ar: 'أساسيات AI في العمارة', en: 'Basics of AI in architecture' } },
      { title: { ar: 'AI مع SketchUp', en: 'AI with SketchUp' }, description: { ar: 'استخدام AI لتوليد النماذج', en: 'Using AI to generate models' } },
      { title: { ar: 'AI مع Revit', en: 'AI with Revit' }, description: { ar: 'أدوات AI للتصميم والتوثيق', en: 'AI tools for design and documentation' } },
      { title: { ar: 'مشاريع عملية', en: 'Practical Projects' }, description: { ar: 'تطبيق عملي على مشاريع حقيقية', en: 'Hands-on real-world projects' } }
    ],
    schedule: 'الخميس - 6:00 مساءً',
    image: '/courses/ai-architecture.jpg'
  },
  {
    id: 'sketchup-landscape',
    slug: 'sketchup-landscape',
    name: {
      ar: 'SketchUp لتنسيق الحدائق',
      en: 'SketchUp for Landscape Design'
    },
    description: {
      ar: 'تعلم النمذجة ثلاثية الأبعاد للحدائق والمشاريع الخارجية باستخدام SketchUp.',
      en: 'Learn 3D modeling for gardens and outdoor projects using SketchUp.'
    },
    category: 'architecture',
    software: 'SketchUp Pro',
    icon: 'Box',
    duration: '30 ساعة',
    level: 'beginner',
    price: 350000,
    currency: 'SYP',
    instructor: {
      id: 'team-6',
      name: { ar: 'م. منى وسوف', en: 'Eng. Mona Wassof' },
      title: { ar: 'مهندسة زراعية - تنسيق حدائق', en: 'Agricultural Engineer - Landscape' },
      bio: { ar: 'اختصاصية في تنسيق الحدائق والتصميم الخارجي', en: 'Specializing in landscape and outdoor design' },
      image: '/instructors/mona.jpg'
    },
    syllabus: [
      { title: { ar: 'أدوات SketchUp', en: 'SketchUp Tools' }, description: { ar: 'أدوات الرسم والنمذجة', en: 'Drawing and modeling tools' } },
      { title: { ar: 'تصميم الحدائق', en: 'Garden Design' }, description: { ar: 'تصميم المساحات الخارجية', en: 'Designing outdoor spaces' } },
      { title: { ar: 'المواد والنباتات', en: 'Materials & Plants' }, description: { ar: 'تطبيق المواد والنباتات', en: 'Applying materials and plants' } }
    ],
    schedule: 'السبت - 10:00 صباحاً',
    image: '/courses/sketchup.jpg'
  },
  {
    id: 'revit-landscape',
    slug: 'revit-landscape',
    name: {
      ar: 'Revit لتنسيق الحدائق',
      en: 'Revit for Landscape Design'
    },
    description: {
      ar: 'تعلم استخدام Revit لتصميم وتنسيق الحدائق والمساحات الخارجية.',
      en: 'Learn to use Revit for designing and landscaping gardens and outdoor spaces.'
    },
    category: 'architecture',
    software: 'Autodesk Revit',
    icon: 'Building2',
    duration: '35 ساعة',
    level: 'intermediate',
    price: 450000,
    currency: 'SYP',
    instructor: {
      id: 'team-6',
      name: { ar: 'م. منى وسوف', en: 'Eng. Mona Wassof' },
      title: { ar: 'مهندسة زراعية - تنسيق حدائق', en: 'Agricultural Engineer - Landscape' },
      bio: { ar: 'اختصاصية في تنسيق الحدائق والتصميم الخارجي', en: 'Specializing in landscape and outdoor design' },
      image: '/instructors/mona.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات Revit', en: 'Revit Basics' }, description: { ar: 'الواجهة والأدوات', en: 'Interface and tools' } },
      { title: { ar: 'تصميم الحدائق', en: 'Garden Design' }, description: { ar: 'إنشاء نموذج الحديقة', en: 'Creating garden model' } },
      { title: { ar: 'الإخراج', en: 'Rendering' }, description: { ar: 'إنتاج الصور والوثائق', en: 'Producing images and documentation' } }
    ],
    schedule: 'الأحد - 10:00 صباحاً',
    image: '/courses/revit-landscape.jpg'
  },
  {
    id: 'garden-planner',
    slug: 'garden-planner',
    name: {
      ar: 'مخطط الحدائق',
      en: 'Garden Planner'
    },
    description: {
      ar: 'تعلم تصميم وتنسيق الحدائق والمشاريع الخارجية.',
      en: 'Learn designing and landscaping gardens and outdoor projects.'
    },
    category: 'architecture',
    software: 'Garden Planner',
    icon: 'Leaf',
    duration: '25 ساعة',
    level: 'beginner',
    price: 350000,
    currency: 'SYP',
    instructor: {
      id: 'team-6',
      name: { ar: 'م. منى وسوف', en: 'Eng. Mona Wassof' },
      title: { ar: 'مهندسة زراعية - تنسيق حدائق', en: 'Agricultural Engineer - Landscape' },
      bio: { ar: 'اختصاصية في تنسيق الحدائق والتصميم الخارجي', en: 'Specializing in landscape and outdoor design' },
      image: '/instructors/mona.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات التصميم', en: 'Design Basics' }, description: { ar: 'مبادئ تصميم الحدائق', en: 'Garden design principles' } },
      { title: { ar: 'اختيار النباتات', en: 'Plant Selection' }, description: { ar: 'اختيار النباتات المناسبة', en: 'Selecting appropriate plants' } },
      { title: { ar: 'تنفيذ المشروع', en: 'Project Implementation' }, description: { ar: 'خطوات التنفيذ', en: 'Implementation steps' } }
    ],
    schedule: 'الثلاثاء - 5:00 مساءً',
    image: '/courses/garden.jpg'
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
      id: 'team-4',
      name: { ar: 'م. علي العمر', en: 'Eng. Ali Alomar' },
      title: { ar: 'مهندس حواسيب وأتمتة', en: 'Computer and Automation Engineer' },
      bio: { ar: 'متخصص في تطوير الويب واجهات أمامية', en: 'Specialized in Web development - Frontend' },
      image: '/instructors/ali.jpg'
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
      id: 'team-4',
      name: { ar: 'م. علي العمر', en: 'Eng. Ali Alomar' },
      title: { ar: 'مهندس حواسيب وأتمتة', en: 'Computer and Automation Engineer' },
      bio: { ar: 'متخصص في تطوير الويب واجهات أمامية', en: 'Specialized in Web development - Frontend' },
      image: '/instructors/ali.jpg'
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
    icon: 'Cpu',
    duration: '55 ساعة',
    level: 'intermediate',
    price: 500000,
    currency: 'SYP',
    instructor: {
      id: 'team-4',
      name: { ar: 'م. علي العمر', en: 'Eng. Ali Alomar' },
      title: { ar: 'مهندس حواسيب وأتمتة', en: 'Computer and Automation Engineer' },
      bio: { ar: 'متخصص في تطوير الويب واجهات أمامية', en: 'Specialized in Web development - Frontend' },
      image: '/instructors/ali.jpg'
    },
    syllabus: [
      { title: { ar: 'أساسيات React', en: 'React Basics' }, description: { ar: 'Components, Props, State', en: 'Components, Props, State' } },
      { title: { ar: 'Hooks المتقدمة', en: 'Advanced Hooks' }, description: { ar: 'useEffect, useContext, custom hooks', en: 'useEffect, useContext, custom hooks' } },
      { title: { ar: 'إدارة الحالة', en: 'State Management' }, description: { ar: 'إدارة الحالة في التطبيقات', en: 'State management in applications' } }
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
      id: 'team-4',
      name: { ar: 'م. علي العمر', en: 'Eng. Ali Alomar' },
      title: { ar: 'مهندس حواسيب وأتمتة', en: 'Computer and Automation Engineer' },
      bio: { ar: 'متخصص في تطوير الويب واجهات أمامية', en: 'Specialized in Web development - Frontend' },
      image: '/instructors/ali.jpg'
    },
    syllabus: [
      { title: { ar: 'App Router', en: 'App Router' }, description: { ar: 'التوجيه والتخطيطات', en: 'Routing and layouts' } },
      { title: { ar: 'Server Components', en: 'Server Components' }, description: { ar: 'RSC و data fetching', en: 'RSC and data fetching' } },
      { title: { ar: 'API Routes', en: 'API Routes' }, description: { ar: 'بناء الـ Backend', en: 'Building the Backend' } },
      { title: { ar: 'النشر', en: 'Deployment' }, description: { ar: 'Vercel و أفضل الممارسات', en: 'Vercel and best practices' } }
    ],
    schedule: 'الثلاثاء والخميس - 6:00 مساءً',
    image: '/courses/nextjs.jpg'
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
      ar: 'من أفضل مراكز التدريب في طرطوس. البيئة محفزة والدعم مستمر حتى بعد انتهاء الدورة.',
      en: 'Best training center in Syria. The environment is motivating and support continues even after the course ends.'
    },
    image: '/testimonials/rana.jpg',
    rating: 5
  }
]

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: { ar: 'أ. نديم يوسف', en: 'Mr. Nadeem Yousef' },
    role: { ar: 'المؤسس والمدير', en: 'Founder & Director' },
    bio: {
      ar: 'مهندس مدني - مطور عقاري - Etabs - Revit',
      en: 'Civil Engineer - Real Estate Developer - Etabs - Revit'
    },
    image: '/team/khaled.jpg'
  },
  {
    id: 'team-2',
    name: { ar: 'آ. رشا يوسف', en: 'Ms. Rasha Yousef' },
    role: { ar: 'مديرة الأكاديمية - إجازة في الفلسفة - دبلوم تأهيل وتخصص ', en: 'Director of the Academy - Bachelor of Philosophy - Diploma of Qualification and Specialization ' },
    bio: {
      ar: 'خبرة 4 سنة في التعليم والتدريب المهني.',
      en: '4 years of experience in education and professional training.'
    },
    image: '/team/huda.jpg'
  },
  {
    id: 'team-3',
    name: { ar: 'م. أكرم محفوض', en: 'Eng. Akram Mahfod' },
    role: { ar: 'مهندس مدني', en: 'Civil engineer' },
    bio: {
      ar: 'متخصص في برامج التصميم الهندسي وتقنيات BIM.',
      en: 'Specialized in engineering design software and BIM technologies.'
    },
    image: '/team/basel.jpg'
  },
  {
    id: 'team-4',
    name: { ar: 'م. علي العمر', en: 'Eng. Ali Alomar' },
    role: { ar: 'مهندس حواسيب وأتمتة', en: 'Computer and Automation Engineer' },
    bio: {
      ar: 'تطوير الويب - مهندس واجهات أمامية',
      en: 'Web development - Front end engineer'
    },
    image: '/team/basel.jpg'
  },
  {
    id: 'team-7',
    name: { ar: 'م. زينب يونس', en: 'Eng. Zineb Younes' },
    role: { ar: 'مهندسة مدنية', en: 'Civil Engineer' },
    bio: {
      ar: 'متخصصة في برامج التصميم الهندسي والحساب اليدوي',
      en: 'Specializing in engineering design and manual calculation software'
    },
    image: '/team/basel.jpg'
  },
  {
    id: 'team-5',
    name: { ar: 'م. هلا محمود', en: 'Eng. Hala Mahmood' },
    role: { ar: 'مهندسة معمارية', en: 'Architect' },
    bio: {
      ar: 'متخصصة في Revit و 3ds Max و SketchUp',
      en: 'Specializing in Revit, 3ds Max, and SketchUp'
    },
    image: '/team/hala.jpg'
  },
  {
    id: 'team-6',
    name: { ar: 'م. منى وسوف', en: 'Eng. Mona Wassof' },
    role: { ar: 'مهندسة زراعية - تنسيق حدائق', en: 'Agricultural Engineer - Landscape' },
    bio: {
      ar: 'اختصاصية في تنسيق الحدائق والتصميم الخارجي',
      en: 'Specializing in landscape and outdoor design'
    },
    image: '/team/basel.jpg'
  }
]

export const stats = {
  students: 53,
  courses: 13,
  instructors: 7,
  years: 10
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

export const courseIcons: Record<string, LucideIcon> = {
  Building2,
  Layers,
  PenTool,
  Code2,
  Palette,
  Globe,
  Database,
  Figma,
  FileCode,
  Box,
  Layout,
  Cpu,
  Leaf
}
