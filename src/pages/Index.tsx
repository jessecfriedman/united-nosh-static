import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getCountriesSorted, getHeroImage } from "@/data/country-meals";
import { assetUrl } from "@/lib/utils";

const heroImage = "/images/5f40673f1345.jpg";

const Index = () => {
  const countries = getCountriesSorted();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="w-full h-[50vh] sm:h-[60vh] overflow-hidden">
          <img
            src={assetUrl(heroImage)}
            alt="United Noshes dinner party"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-10 sm:py-14 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            158 Down, 36 to Go!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're hosting a series of 194 dinner parties for the members of the United Nations, in alphabetical order.
            We invite guests to our home in Portland to share what they know about that country or to learn through the food.
            Well over 1,000 guests have donated nearly $50,000 to international relief charities.
          </p>
        </div>
      </section>

      {/* Meal Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <Link
              key={country.slug}
              to={country.originalPath}
              className="group block overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              {(() => {
                const hero = getHeroImage(country);
                return hero ? (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={assetUrl(hero)}
                      alt={`Meal ${country.mealNumber}: ${country.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <span className="text-4xl text-muted-foreground/40 font-bold">#{country.mealNumber}</span>
                  </div>
                );
              })()}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  Meal {country.mealNumber}: {country.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
