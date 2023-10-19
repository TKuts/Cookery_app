export interface Ingredients {
  id: number;
  name: string;
  amount: number;
  unit: string;
  nutrients?: {}[];
}
export interface SelectedRecipe {
  id: number;
  title: string;
  readyInMinutes: number;
  summary: string;
  image: string;
  like: boolean;
  dishTypes: string[];
  nutrition: {
    nutrients: {
      name: string;
      amount: number;
      unit: string;
      percentOfDailyNeeds?: number;
    }[];
    ingredients: [];
  };
  analyzedInstructions: AnalyzedInstructions[];
}

export interface Nutrition {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds?: number;
}

export interface FilreredRecipe {
  id: number;
  title: string;
  readyInMinutes: number;
  dishTypes: string[];
  image: string;
  summary: string;
  analyzedInstructions: AnalyzedInstructions[];
  nutrition: {
    nutrients: Nutrition[];
    properties?: {}[];
    flavonoids?: {}[];
    ingredients: Ingredients[];
    caloricBreakdown?: {}[];
  };
}

export interface AnalyzedInstructions {
  name?: string;
  steps: Instructions[];
}
export interface Instructions {
  number: number;
  step: string;
  ingredients: {
    id?: number;
    name: string;
    localizedName?: string;
    image?: string;
  }[];
  equipment: {
    name?: string;
    localizedName?: string;
    image?: string;
    id?: number;
  }[];
  checked?: boolean;
  unwrap?: boolean;
}

export interface IngredientForShop {
  name: string;
  value: string;
  unit: string;
  id: string;
}

export interface PantryValue {
  originalName: string;
  amount: number;
  id: number;
  estimatedCost: { value: number; unit: string };
  image: string;
}
