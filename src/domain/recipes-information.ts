
export type Description = {
	id: number;
	title: string;
	summary:  string; 
}

export type Ingridient = {
	id: number;
	name: string;
	image:  string; 
}

export type Step = {
    number: number;
    step: string;
	ingridients: [Ingridient];
	equipment: [ {id: number, name: string, image: string} ];
}

export type Tutorial = {
	steps: [Step];
}

export type Metrix = {
    value: number;
      unit: string;   
  }

export type Ingredient = {
    name: string;
    amount:  Metrix; 
}

export type RecipesInformation = {   
    extendedIngredients: [Ingredient]; // VITE_REACT_ALL_INGREDIENTS 
    description: Description; // VITE_REACT_DESCRIPTION ,
    tutorial: Tutorial // VITE_REACT_TUTORIA
}