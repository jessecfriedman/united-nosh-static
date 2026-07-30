import { Link } from "react-router-dom";

const Header = () => (
  <header className="border-b border-border">
    <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link to="/" className="text-3xl sm:text-4xl font-bold tracking-wider text-foreground hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
        UNITED NOSHES
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium uppercase tracking-widest">
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
          Meals
        </Link>
        <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
          About
        </Link>
        <Link to="/countries" className="text-muted-foreground hover:text-foreground transition-colors">
          All Countries
        </Link>
        <a
          href="http://eepurl.com/bbdsJr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Sign Up
        </a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="border-t border-border mt-16">
    <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} United Noshes · Jesse Friedman &amp; Laura Hadden · Portland, OR</p>
      <p className="mt-1">
        194 dinners for the United Nations, in alphabetical order.
        {" "}
        <a href="https://www.mercycorps.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
          Supporting Mercy Corps
        </a>
      </p>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
