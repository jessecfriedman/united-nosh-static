import { Meal } from "@/types/meal";

// This will be populated by the scraping script.
// For now, include a few sample meals to build the UI against.
export const meals: Meal[] = [
  {
    number: 149,
    country: "Samoa",
    slug: "meal-149-samoa",
    originalPath: "/countries//meal-149-samoa",
    cardImage: "https://images.squarespace-cdn.com/content/v1/5a8a382cf14aa1408b29abde/1729463340706-RN87BS9052LR5D60NE9L/unsplash-image-1K52ZwwDLD4.jpg?format=500w",
    dishes: [
      {
        name: "Sapasui",
        description: "This dish doesn't have a ton to do with the chop suey that was popular in America long ago, which itself has only tenuous links to China. It's less veggies, and adds noodles — which, curiously, are cut into small pieces. It's also very punchy, with an entire cup of soy sauce and a tablespoon of ginger to a half-pound each of noodles and chicken. It's quite a contrast to the subtler flavors of traditional Polynesian dishes we've had.",
        recipeUrl: "https://travelfoodatlas.com/samoan-sapasui-chop-suey-recipe",
        recipeLabel: "Chop suey"
      },
      {
        name: "Oka i'a",
        description: "This is a lot less acidic than South American ceviches, for two reasons: the citrus juice is drained after hanging out with the fish for just a short time, and coconut milk constitutes most of the liquid. I prefer the tangier version, but the advantage to this method is that the fish is less cooked so closer to raw.",
        recipeUrl: "https://web.archive.org/web/20230202075955/http://www.samoafood.com/2011/01/oka-ia-fish-salad.html",
        recipeLabel: "Coconut ceviche"
      },
      {
        name: "Palusami",
        description: "A common dish in Polynesia, in fact we made it for the Fiji meal. For that one, we included corned beef; this time we made it a bit simpler, with just onions and lemons for flavor.",
        recipeUrl: "https://web.archive.org/web/20161114095530/http://www.heartfoundation.org.nz:80/healthy-living/healthy-recipes/palusami-taro-leaves-with-lite-coconut-cream",
        recipeLabel: "Coconut milk and taro leaf parcels"
      },
      {
        name: "Pani popo",
        description: "If you thought Hawaiian rolls weren't sweet enough, well, try this. It's a similar sweet dough, but bathed in a very sweet coconut milk glaze. In fact, you glaze it twice, both before and after baking. Yum.",
        recipeUrl: "https://www.polynesia.com/blog/pani-popo-a-sticky-gooey-gotta-have-it-treat-from-samoa/",
        recipeLabel: "Coconut-glazed sweet rolls"
      },
      {
        name: "Vaifala",
        description: "Coconut and pineapple, blended with a bit of vanilla extract. Yummy, refreshing, quintessentially tropical.",
        recipeUrl: "http://eat-impi.blogspot.com/2015/01/my-vaifala-samoan-coconut-and-pineapple.html",
        recipeLabel: "Pineapple-coconut drink"
      },
      {
        name: "Keke fa'i",
        description: "Like banana bread, but more cakelike. Quite yummy, though oddly, this dessert wasn't the sweetest thing on the menu — the rolls took the cake, so to speak.",
        recipeUrl: "https://web.archive.org/web/20230202074810/http://www.samoafood.com/2012/02/keke-fai-banana-cake.html",
        recipeLabel: "Banana cake"
      }
    ]
  },
  {
    number: 148,
    country: "St. Vincent and the Grenadines",
    slug: "meal-148-st-vincent-grenadines",
    originalPath: "/countries//meal-148-st-vincent-grenadines",
    cardImage: "https://images.squarespace-cdn.com/content/v1/5a8a382cf14aa1408b29abde/1729400039734-A8Q6QVD0VZSCTVLJ95I0/Flag_of_Saint_Vincent_and_the_Grenadines.svg.png?format=500w",
    dishes: []
  },
  {
    number: 147,
    country: "St. Lucia",
    slug: "meal-147-st-lucia",
    originalPath: "/countries//meal-147-st-lucia",
    cardImage: "https://images.squarespace-cdn.com/content/v1/5a8a382cf14aa1408b29abde/1729396800319-WYS3Y4LPP6R8QSHDFIZU/unsplash-image-e1y4IySnZEc.jpg?format=500w",
    dishes: []
  },
  {
    number: 1,
    country: "Afghanistan",
    slug: "week-1-afghanistan",
    originalPath: "/countries/2011/week-1-afghanistan",
    dishes: []
  }
];

export function getMealBySlug(slug: string): Meal | undefined {
  return meals.find(m => m.slug === slug);
}

export function getMealsSorted(): Meal[] {
  return [...meals].sort((a, b) => b.number - a.number);
}
