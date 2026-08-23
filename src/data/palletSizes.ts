import { PalletSizeItem } from '../types';

export const PALLET_SIZES_DATA: PalletSizeItem[] = [
  {
    dimensions: '100 × 120 سم',
    standardName: 'المقاس الصناعي القياسي (Standard Industrial)',
    usageType: 'الأكثر انتشاراً في مصر والشرق الأوسط وأمريكا الشمالية',
    typicalLoad: 'ديناميكي: 1,500 - 2,000 كجم | استاتيكي: 4,500 كجم',
    materialOptions: ['خشب جديد', 'خشب مستعمل', 'بلاستيك', 'دكمة خشب'],
    popularIndustries: ['التصنيع العام', 'الأغذية والمشروبات', 'المخازن المركزية', 'التوزيع'],
    isStandard: true
  },
  {
    dimensions: '80 × 120 سم',
    standardName: 'اليوروبالت القياسي (Euro Pallet EPAL / EUR1)',
    usageType: 'المعيار المعتمد في أوروبا والتصدير للشاحنات الأوروبية',
    typicalLoad: 'ديناميكي: 1,500 كجم | استاتيكي: 4,000 كجم',
    materialOptions: ['خشب جديد معالج HT', 'خشب مستعمل Grade A', 'بلاستيك صحي'],
    popularIndustries: ['التصدير لأوروبا', 'الأدوية والمستلزمات الطبية', 'الشحن الدولي'],
    isStandard: true
  },
  {
    dimensions: '110 × 110 سم',
    standardName: 'المقاس الآسيوي ومقاس الحاويات (Container Fit / CP3)',
    usageType: 'تصميم مربع مثالي لتحميل الحاويات البحرية بدون إهدار فراغات',
    typicalLoad: 'ديناميكي: 1,500 - 2,200 كجم | استاتيكي: 5,000 كجم',
    materialOptions: ['خشب جديد', 'بلاستيك', 'دكمة خشبية'],
    popularIndustries: ['الصناعات الكيماوية', 'الاستيراد والتصدير للحاويات', 'الزراعة'],
    isStandard: true
  },
  {
    dimensions: '100 × 100 سم',
    standardName: 'المقاس المربع المتوسط (Square 1x1m)',
    usageType: 'تخزين براميل السوائل والأكياس المكدسة والمساحات الضيقة',
    typicalLoad: 'ديناميكي: 1,200 - 1,800 كجم | استاتيكي: 4,000 كجم',
    materialOptions: ['خشب جديد', 'خشب مستعمل', 'دكمة تبن مضغوط'],
    popularIndustries: ['براميل الكيماويات والزيوت', 'الأعلاف والمطاحن', 'التخزين الأرضي'],
    isStandard: true
  },
  {
    dimensions: '120 × 120 سم',
    standardName: 'المقاس المربع الكبير (Heavy Large Square)',
    usageType: 'الأحمال العريضة، خزانات السوائل الوسيطة (IBC Tanks)، والبراميل الأربعة',
    typicalLoad: 'ديناميكي: 2,000 - 2,500 كجم | استاتيكي: 6,000 كجم',
    materialOptions: ['خشب ثقيل جديد', 'دكمة خشبية مصمتة', 'بلاستيك شاق'],
    popularIndustries: ['خزانات IBC', 'الصناعات الثقيلة', 'الأسمدة والكيماويات'],
    isStandard: true
  },
  {
    dimensions: '110 × 120 سم',
    standardName: 'المقاس الصناعي المتنوع (Wide Industrial)',
    usageType: 'تخزين كراتين المقاسات الخاصة وخطوط التعبئة المعدلة',
    typicalLoad: 'ديناميكي: 1,500 كجم | استاتيكي: 4,500 كجم',
    materialOptions: ['خشب جديد', 'خشب مستعمل'],
    popularIndustries: ['الأجهزة المنزلية', 'الكرتون والتغليف', 'المخازن'],
    isStandard: true
  },
  {
    dimensions: '120 × 80 سم',
    standardName: 'اليوروبالت العكسي / الطولي',
    usageType: 'ممرات التخزين الضيقة والشاحنات المحلية المجهزة',
    typicalLoad: 'ديناميكي: 1,200 - 1,500 كجم | استاتيكي: 3,500 كجم',
    materialOptions: ['خشب جديد', 'بلاستيك خفيف'],
    popularIndustries: ['التجزئة والهايبرماركت', 'المستودعات الآلية'],
    isStandard: true
  },
  {
    dimensions: '114 × 114 سم',
    standardName: 'مقاس الحاويات البحرية الخاص (CP9 / Container Max)',
    usageType: 'استغلال أمثل لعرض الحاوية 40 قدم و20 قدم (تحميل مزدوج 2×114 = 228 سم)',
    typicalLoad: 'ديناميكي: 1,800 كجم | استاتيكي: 5,500 كجم',
    materialOptions: ['خشب جديد معالج HT', 'دكمة خشب صلب'],
    popularIndustries: ['الشحن البحري الدولي', 'الصناعات الكيماوية التصديرية', 'الزجاج'],
    isStandard: true
  }
];
