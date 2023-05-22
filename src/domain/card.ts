import { RecipesInformation } from "./recipes-information";

export type Card = {
  Recipe: RecipesInformation;
  onDetaile: () => void;
};

export type ListCards = {
  cards: Card[];
  pagination: () => void;
};

// import {Card,  ListCards,  } from "./domain/card"
