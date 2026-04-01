import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { getCountryBySlug } from "@/data/country-meals";
import { getContentBlocks, ContentBlock } from "@/data/content-blocks";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Fix missing spaces around markdown links: "word[link](url)word" → "word [link](url) word"
const fixLinkSpacing = (text: string): string => {
  // Add space before [ if preceded by a word char (but not if it's the start or already spaced)
  let fixed = text.replace(/(\w)\[/g, "$1 [");
  // Add space after ) if followed by a word char (for inline links)
  fixed = fixed.replace(/\)(\w)/g, ") $1");
  return fixed;
};

// Detect dish header lines like "**Name**| Description |[Recipe](...)"
const isDishLine = (text: string): boolean => {
  return /^\*\*[^*]+\*\*\s*\|/.test(text.trim());
};

// Detect tag/taxonomy lines like "In[Asia](...) Tags[...](...)"
const isTagLine = (text: string): boolean => {
  return /^In\s*\[/.test(text.trim()) && /Tags?\s*\[/.test(text);
};

// Detect prev/next nav lines like "[← ...](...)[...→](...)"
const isNavLine = (text: string): boolean => {
  return /\[←/.test(text) && /→\]/.test(text);
};

const parseDishLine = (text: string) => {
  // Pattern: **Name** | Description | [Recipe](url) or **Name** | Description
  const match = text.match(/^\*\*([^*]+)\*\*\s*\|\s*(.+)$/);
  if (!match) return null;

  const name = match[1].trim();
  const rest = match[2].trim();

  // Split remaining by | to get description and recipe parts
  const parts = rest.split("|").map((p) => p.trim());
  const description = parts[0];
  // Remaining parts may contain recipe links
  const recipeParts = parts.slice(1).join(" | ");

  return { name, description, recipeParts };
};

const DishHeader = ({ text }: { text: string }) => {
  const parsed = parseDishLine(text);
  if (!parsed) return <TextBlock text={text} />;

  return (
    <div className="mt-8 mb-2">
      <h3 className="text-xl font-bold text-foreground font-serif">
        {parsed.name}
      </h3>
      <div className="text-muted-foreground text-sm italic">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => <span>{children}</span>,
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline not-italic"
              >
                {children}
              </a>
            ),
          }}
        >
          {fixLinkSpacing(
            parsed.recipeParts
              ? `${parsed.description} · ${parsed.recipeParts}`
              : parsed.description
          )}
        </ReactMarkdown>
      </div>
    </div>
  );
};

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
      em: ({ children }) => <em className="italic">{children}</em>,
      ul: ({ children }) => (
        <ul className="list-disc list-inside mb-4 text-foreground">
          {children}
        </ul>
      ),
      li: ({ children }) => (
        <li className="mb-1 text-foreground leading-relaxed">{children}</li>
      ),
    }}
  >
    {fixLinkSpacing(text)}
  </ReactMarkdown>
);

const MealPost = () => {
  const { slug, year } = useParams<{ slug: string; year?: string }>();
  const location = useLocation();
  const country = slug ? getCountryBySlug(slug) : undefined;
  const blocks = slug ? getContentBlocks(slug) : [];

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

  // Filter out tag and nav blocks, but capture nav for rendering
  const navBlock = blocks.find(
    (b) => b.type === "text" && isNavLine(b.text)
  );
  const filteredBlocks = blocks.filter(
    (b) =>
      b.type === "image" ||
      (b.type === "text" && !isTagLine(b.text) && !isNavLine(b.text))
  );

  // Parse nav links
  let prevLink: { label: string; url: string } | null = null;
  let nextLink: { label: string; url: string } | null = null;
  if (navBlock && navBlock.type === "text") {
    const prevMatch = navBlock.text.match(/\[←\s*([^\]]+)\]\(([^)]+)\)/);
    const nextMatch = navBlock.text.match(/\[([^\]]+?)\s*→\]\(([^)]+)\)/);
    if (prevMatch) prevLink = { label: prevMatch[1], url: prevMatch[2] };
    if (nextMatch) nextLink = { label: nextMatch[1], url: nextMatch[2] };
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
        {filteredBlocks.map((block, i) =>
          block.type === "image" ? (
            <div key={i} className="my-6 flex justify-center">
              <img
                src={block.url}
                alt={`${country.name} photo`}
                className="max-w-full rounded"
                loading={i < 2 ? "eager" : "lazy"}
              />
            </div>
          ) : isDishLine(block.text) ? (
            <DishHeader key={i} text={block.text} />
          ) : (
            <div key={i}>
              <TextBlock text={block.text} />
            </div>
          )
        )}

        {/* Prev / Next navigation */}
        {(prevLink || nextLink) && (
          <nav className="flex justify-between items-center mt-12 pt-6 border-t border-border">
            <div className="flex-1">
              {prevLink && (
                <Link
                  to={prevLink.url}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← {prevLink.label}
                </Link>
              )}
            </div>
            <div className="flex-1 text-right">
              {nextLink && (
                <Link
                  to={nextLink.url}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nextLink.label} →
                </Link>
              )}
            </div>
          </nav>
        )}
      </article>
    </Layout>
  );
};

export default MealPost;
