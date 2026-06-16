import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found (404) — Niraj Patil</title>
        <meta name="description" content="This page doesn't exist on Niraj Patil's portfolio. Head back to the homepage to explore featured work and experience." />
        <meta name="robots" content="noindex" />
        <meta property="og:title" content="Page Not Found (404) — Niraj Patil" />
        <meta property="og:description" content="This page doesn't exist. Return to Niraj Patil's portfolio homepage." />
        <meta property="og:url" content="https://niraj-architect-next.lovable.app/404" />
      </Helmet>
      <main className="flex min-h-dvh items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/80">
            Return to Home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
