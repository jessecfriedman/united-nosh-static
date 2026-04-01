import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getCountryBySlug } from "@/data/country-meals";
import { getContentBlocks, ContentBlock } from "@/data/content-blocks";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TextBlock = ({ text }: { text: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      p: ({ children }) => (
        <p className="text-foreground leading-relaxed mb-4">{children}</p>
      ),
      strong: ({ children }) => (
        <strong className="font-bold text-foreground">{children}</strong>
      ),
      a: ({ href, children }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {children}
        </a>
      ),
      em: ({ children }) => <em>{children}</em>,
      ul: ({ children }) => (
        <ul className="list-disc list-inside mb-4 text-foreground">{children}</ul>
      ),
      li: ({ children }) => (
        <li className="mb-1 text-foreground leading-relaxed">{children}</li>
      ),
    }}
  >
    {text}
  </ReactMarkdown>
);

const MealPost = () => {
  const { slug, year } = useParams<{ slug: string; year?: string }>();
  const country = slug ? getCountryBySlug(slug) : undefined;
  const blocks = slug ? getContentBlocks(slug) : [];

  if (!country) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Meal not found</h1>
          <p className="text-muted-foreground mb-6">
            This meal post hasn't been added yet.
          </p>
          <Link
            to="/"
            className="text-primary underline hover:text-primary/80"
          >
            ← Back to all meals
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-10 max-w-2xl">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block"
        >
          ← All Meals
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
          Meal {country.mealNumber}: {country.name}
        </h1>

        {/* Render content blocks in original order */}
        {blocks.map((block, i) =>
          block.type === "image" ? (
            <div key={i} className="my-6 flex justify-center">
              <img
                src={block.url}
                alt={`${country.name} photo`}
                className="max-w-full rounded"
                loading={i < 2 ? "eager" : "lazy"}
              />
            </div>
          ) : (
            <div key={i}>
              <TextBlock text={block.text} />
            </div>
          )
        )}
      </article>
    </Layout>
  );
};

export default MealPost;
