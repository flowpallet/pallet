export type PalletMaterial = 'wood' | 'plastic' | 'compressed_wood' | 'custom';
export type PalletCondition = 'new' | 'used' | 'both';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  category: 'wooden_new' | 'wooden_used' | 'wooden_block' | 'compressed_pulp' | 'plastic' | 'custom';
  material: PalletMaterial;
  condition: PalletCondition;
  image: string;
  heroImage?: string;
  gallery?: string[];
  description: string;
  fullDescription: string;
  features: string[];
  specs: ProductSpecification[];
  standardSizes: string[];
  loadDynamic: string;
  loadStatic: string;
  loadRacking?: string;
  idealFor: string[];
  heatTreatmentAvailable: boolean;
  minOrder: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  recommendedPallets: string[];
  iconName: string;
  keyRequirement: string;
}

export interface PalletSizeItem {
  dimensions: string;
  standardName: string;
  usageType: string;
  typicalLoad: string;
  materialOptions: string[];
  popularIndustries: string[];
  isStandard: boolean;
}

export interface QuoteFormData {
  companyName: string;
  contactName: string;
  phone: string;
  whatsapp: string;
  email: string;
  palletType: string;
  palletCondition: string;
  dimensions: string;
  customDimensions?: string;
  quantity: string;
  loadCapacity: string;
  usageType: string;
  heatTreatment: boolean;
  deliveryLocation: string;
  notes: string;
  hasBlueprint: boolean;
  blueprintFileName?: string;
}
