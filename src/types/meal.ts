export interface Dish {
  name: string;
  description: string;
  recipeUrl?: string;
  recipeLabel?: string;
}

export interface Meal {
  number: number;
  country: string;
  slug: string;
  /** Original Squarespace URL path for redirects */
  originalPath: string;
  /** Card/thumbnail image */
  cardImage?: string;
  /** Full-size hero image(s) for the post */
  images?: string[];
  /** Intro text before the dishes */
  intro?: string;
  /** Wrapup text after the dishes */
  wrapup?: string;
  dishes: Dish[];
  /** Date of the meal (ISO string) */
  date?: string;
}

/** All 194 UN member states */
export interface Country {
  name: string;
  mealNumber?: number;
  slug?: string;
}
