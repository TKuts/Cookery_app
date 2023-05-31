import { Step } from "./recipes-information";
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
    name?: string;
    localizedName?: string;
    image?: string;
  }[];
  equipment: {
    id?: number;
    name?: string;
    localizedName?: string;
    image?: string;
  }[];
  checked?: boolean;
  unwrap?: boolean;
}

export interface FyllRecipeFromApi {}
