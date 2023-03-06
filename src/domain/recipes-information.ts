export type Ingredient = {
    name: string;
    amount: number;  // кількість
    unit: string;   // одиниця
}

export type RecipesInformation = {
    extendedIngredients: [Ingredient];
}