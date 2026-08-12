export type Region =
  | 'ALL'
  | 'ASIA'
  | 'EUROPE'
  | 'AFRICA'
  | 'MIDDLE EAST'
  | 'NORTH AMERICA'
  | 'SOUTH AMERICA'
  | 'OCEANIA';

export type DishCategory =
  | 'ALL'
  | 'RICE'
  | 'NOODLES'
  | 'SOUPS'
  | 'STEW'
  | 'BAKED'
  | 'GRILLED'
  | 'DESSERT'
  | 'BREAKFAST';

export interface Dish {
  id: string;
  name: string;
  nativeName?: string;
  region: Region;
  country: string;
  category: DishCategory;
  shortDescription: string;
  fullStory: string;
  whyPeopleLoveIt: string;
  whenEnjoyed: string;
  prepTime: string;
  cookTime: string;
  comfortLevel?: 'Soothing' | 'Rich & Hearty' | 'Warming & Fiery' | 'Sweet & Nostalgic';
  flavorProfile: string[];
  origin: string;
  keyIngredients: string[];
  servingSuggestion: string;
  image: string;
  isSignature?: boolean;
  calories?: string;
  pairedWith?: string;
}

export interface Memory {
  id: string;
  title: string;
  subtitle: string;
  story: string;
  author: string;
  location: string;
  timePeriod: string;
  image: string;
  tag: string;
  isEditorial?: boolean;
}

export interface JourneyStage {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  culturalNote: string;
  sensoryDetail: string;
  image: string;
  keyAction: string;
}

export interface GlobalExpression {
  region: string;
  dish: string;
}

export interface Ingredient {
  id: string;
  name: string;
  nativeName?: string;
  regionOrigin: string;
  role: string;
  flavorProfile: string;
  culturalSignificance: string;
  dishesUsedIn: string[];
  globalExpressions?: GlobalExpression[];
  image: string;
}
