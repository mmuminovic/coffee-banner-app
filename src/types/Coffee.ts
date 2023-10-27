export enum CoffeeType {
  HOT = 'hot',
  ICED = 'iced',
}

export enum BannerWidth {
  width160px = '160px',
  width300px = '300px',
  width100 = '100%',
  custom = 'custom',
}

export interface Coffee {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
}
