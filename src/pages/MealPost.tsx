import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getCountryBySlug } from "@/data/country-meals";
import { getDishesByCountry } from "@/data/food-items";

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
        <div className="w-full h-[40vh] sm:h-[50vh] overflow-hidden">
          <img
            src={country.heroImage}
            alt={`Meal ${country.mealNumber}: ${country.name}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <article className="container mx-auto px-4 py-10 max-w-2xl">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
          ← All Meals
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Meal {country.mealNumber}: {country.name}
        </h1>

        {country.preamble && (
          <div className="text-muted-foreground leading-relaxed mt-4 mb-8 space-y-4">
            {country.preamble.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        {/* Dishes */}
        <div className="space-y-8 mt-8">
          {dishes.map((dish) => (
            <div key={dish.id} className="border-l-2 border-primary/30 pl-5">
              <h2 className="text-xl font-semibold text-foreground">
                {dish.nativeName}
                {dish.englishName && (
                  <span className="text-muted-foreground font-normal text-base ml-2">
                    | {dish.englishName}
                  </span>
                )}
                {dish.recipeLinks.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-normal ml-2 hover:underline"
                  >
                    Recipe →
                  </a>
                ))}
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-2">{dish.description}</p>
            </div>
          ))}
        </div>

        {/* Postscript */}
        {country.postscript && (
          <div className="text-muted-foreground leading-relaxed mt-8 space-y-4">
            {country.postscript.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        {/* Images gallery */}
        {country.images && country.images.length > 0 && (
          <div className="mt-10 space-y-4">
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
