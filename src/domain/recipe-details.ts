import { Step } from './recipes-information';
export interface Ingredients{
	index: number;
	name: string;
	amount: {
		metric:{
			value: number,
			unit: string
		}
	}

}
export interface SelectedRecipe { 
	id: number;
	title: string;
	readyInMinutes: number;
	summary: string;
	image: string;
	dishTypes: string[];
	analyzedInstructions: {
		steps: Instructions[];
	}[],
}



export interface Instructions{
	number: number;
	step: string;
	checked?: boolean;
	unwrap?: boolean;
	ingredients: [{
		id: number;
		name: string;
	}];
	equipment: [{
			id: number;
			name: string;
		}]
}

export interface Nutrition {
	name: string;
	amount: number;
	unit: string;
	percentOfDailyNeeds?: number;
}