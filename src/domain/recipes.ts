import { RecipesInformation } from './recipes-information'

export type RecipesTitle = string;
export type UniqueId = number;
export type DishTypes = "cups" | "tbsp" | "ml" | "cloves" | "grams";

export type Recipe = {
    title: RecipesTitle;
    id: UniqueId;
    image: string;
    // information: RecipesInformation;
    // dishTypes: DishTypes
}


// export function totalPrice( recipe: Recipe ): RecipesInformation {
//     return RecipesInformation.amount
// }

