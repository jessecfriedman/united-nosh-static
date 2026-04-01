export interface RecipeLink {
  url: string;
  label?: string;
}

export interface FoodItem {
  /** Unique id: countrySlug + index */
  id: string;
  countrySlug: string;
  /** Name in native/original language */
  nativeName: string;
  /** English translation if applicable */
  englishName?: string;
  /** Narrative text about this dish */
  description: string;
  /** One or more recipe links */
  recipeLinks: RecipeLink[];
  /** Photo URL for this specific dish */
  photo?: string;
}

export interface CountryMeal {
  name: string;
  slug: string;
  mealNumber: number;
  originalPath: string;
  /** Hero/card image */
  heroImage?: string;
  /** Gallery images */
  images?: string[];
  /** Intro/preamble text */
  preamble?: string;
  /** Closing/postscript text */
  postscript?: string;
}

/** All 194 UN member states */
export interface Country {
  name: string;
  mealNumber?: number;
  slug?: string;
}
