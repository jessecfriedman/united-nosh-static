import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { allCountries } from "@/data/countries";

const Countries = () => (
  <Layout>
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">All 194 Countries</h1>
      <p className="text-muted-foreground mb-10">
        Every UN member state, in alphabetical order. Countries with a meal number link to their post.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
        {allCountries.map((country) => (
          <div key={country.name} className="py-1.5 flex items-baseline gap-2">
            {country.mealNumber && country.slug ? (
              <>
                <span className="text-xs text-muted-foreground w-6 text-right flex-shrink-0">
                  {country.mealNumber}
                </span>
                <Link
                  to={`/countries/${country.slug}`}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {country.name}
                </Link>
              </>
            ) : (
              <>
                <span className="text-xs text-muted-foreground/40 w-6 text-right flex-shrink-0">—</span>
                <span className="text-muted-foreground/60">{country.name}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Countries;
