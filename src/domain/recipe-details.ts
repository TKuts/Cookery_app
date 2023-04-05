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
export interface Summary{ 
	id: number;
	title: string;
	summary: string;
	readyInMinutes: string;
	dishTypes: string[];
	image: string;
}

// export interface RecipeDetails{
// 	summary: Summary;
// 	ingredients:Ingredients;

// }