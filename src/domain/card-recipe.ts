type CardString = string;
type CardNumber = number;

export interface CardRecipe {
  id: CardNumber;
  image: CardString;
  title: CardString;
  readyInMinutes: CardNumber;
  // results: [{
  // 	id: number;
  // 	image: string;
  // 	title: string;
  // 	readyInMinutes: number;
  // }]
}
