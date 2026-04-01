import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getCountryBySlug } from "@/data/country-meals";
import { getDishesByCountry } from "@/data/food-items";
import { FoodItem } from "@/types/meal";

const DishCard = ({ dish, index }: { dish: FoodItem; index: number }) => (
  <div className="rounded-lg border border-border bg-card overflow-hidden">
    {dish.photo && (
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={dish.photo}
          alt={dish.nativeName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-5 sm:p-6">
      <div className="flex items-start gap-3 mb-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center mt-0.5">
          {index + 1}
        </span>
        <div>
          <h2 className="text-xl font-semibold text-card-foreground leading-snug">
            {dish.nativeName}
          </h2>
          {dish.englishName && dish.englishName !== dish.nativeName && (
            <p className="text-sm text-muted-foreground mt-0.5 italic">
              {dish.englishName}
            </p>
          )}
        </div>
      </div>

      <div className="text-muted-foreground leading-relaxed space-y-3 text-[0.95rem]">
        {dish.description.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {dish.recipeLinks.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {dish.recipeLinks.map((link, j) => (
            <a
              key={j}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              📖 {link.label || "Recipe"} →
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

const MealPost = () => {
  const { slug, year } = useParams<{ slug: string; year?: string }>();
  const country = slug ? getCountryBySlug(slug) : undefined;
  const dishes = slug ? getDishesByCountry(slug) : [];

  if (!country) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Meal not found</h1>
          <p className="text-muted-foreground mb-6">This meal post hasn't been added yet.</p>
          <Link to="/" className="text-primary underline hover:text-primary/80">
            ← Back to all meals
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero image */}
      {country.heroImage && (
        <div className="w-full h-[40vh] sm:h-[50vh] overflow-hidden relative">
          <img
            src={country.heroImage}
            alt={`Meal ${country.mealNumber}: ${country.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 container mx-auto px-4 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground drop-shadow-sm">
              Meal {country.mealNumber}: {country.name}
            </h1>
          </div>
        </div>
      )}

      <article className="container mx-auto px-4 py-10 max-w-2xl">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
          ← All Meals
        </Link>

        {!country.heroImage && (
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Meal {country.mealNumber}: {country.name}
          </h1>
        )}

        {/* Preamble */}
        {country.preamble && (
          <div className="text-muted-foreground leading-relaxed mt-4 mb-10 space-y-4">
            {country.preamble.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        {/* Dish cards */}
        <div className="space-y-6 mt-8">
          <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
            The Menu — {dishes.length} {dishes.length === 1 ? 'Dish' : 'Dishes'}
          </h2>
          {dishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>

        {/* Postscript */}
        {country.postscript && (
          <div className="text-muted-foreground leading-relaxed mt-10 pt-8 border-t border-border space-y-4">
            {country.postscript.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        {/* Images gallery */}
        {country.images && country.images.length > 0 && (
          <div className="mt-10 space-y-4">
            <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Photos
            </h2>
            {country.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${country.name} meal photo ${i + 1}`}
                className="w-full rounded-lg"
                loading="lazy"
              />
            ))}
          </div>
        )}
      </article>
    </Layout>
  );
};

export default MealPost;
