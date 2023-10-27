export enum CoffeeType {
  HOT = 'hot',
  ICED = 'iced',
}

export interface Coffee {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
}
