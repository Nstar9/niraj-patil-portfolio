import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Download } from "lucide-react";
import resumeAsset from "@/assets/Niraj_Patil_Resume.pdf.asset.json";


const sections = [
  {
    id: "why-ai-prd",
    title: "Why AI PRDs are different",
    body: "Traditional PRDs assume deterministic behavior. AI features don't behave deterministically — outputs vary by prompt, model, and context. An AI PRD has to spell out the model contract, evaluation criteria, fallback behavior, and the data the system is allowed to see. Skip these and engineering ships a demo, not a product.",
  },
  {
    id: "ai-tools",
    title: "AI tools product managers actually use",
    body: "Discovery: Dovetail + Claude for synthesizing user interviews. Specs: Notion AI and Linear's AI summaries for drafts; Cursor for spec-to-prototype loops. Evaluation: Braintrust, LangSmith, or Promptfoo for prompt regression tests. Telemetry: PostHog or Amplitude with custom AI events (prompt, latency, tokens, satisfaction). Pick one in each layer instead of stacking five.",
  },
  {
    id: "case-zeno",
    title: "Case study: Zeno expense categorization",
    body: "On Zeno I treated the categorization model as a product surface, not a model. The PRD defined 90% top-1 accuracy on a frozen eval set of 500 receipts, a confidence threshold for auto-apply vs. suggest-only, and a manual override path that fed back into the next eval run. That contract — not the model choice — is what shipped.",
  },
  {
    id: "case-hawkai",
    title: "Case study: HawkAI entity intelligence",
    body: "HawkAI generates KYC/AML risk reports in under 90 seconds. The PRD locked the output schema (entity, risk score, sources, reasoning) before a single prompt was written, so engineering could parallelize the agent, the data sources, and the report renderer. Time-to-first-report dropped from days of analyst work to ~90 seconds.",
  },
];

const templateSections = [
  "Problem & user — who is this for and what job are they hiring AI to do?",
  "Success metrics — task success rate, latency, cost per request, user-perceived quality",
  "Model contract — input schema, output schema, allowed tools, allowed data sources",
  "Evaluation plan — frozen eval set, target metrics, regression thresholds, owner",
  "Guardrails — refusal policy, PII handling, jailbreak surface, escalation path",
  "Fallback — what happens when the model fails, is slow, or returns low confidence",
  "Telemetry — events logged, dashboards owned, alert thresholds",
  "Rollout — internal → beta cohort → % rollout, with kill switch and rollback criteria",
];

const AiPrdTemplate = () => {
  const canonical = "https://niraj-architect-next.lovable.app/resources/ai-prd-template";
  return (
    <>
      <Helmet>
        <title>AI PRD Template — A Hands-On Guide for PMs | Niraj Patil</title>
        <meta
          name="description"
          content="A practical AI PRD template and guide to AI tools for product managers, with case studies from HawkAI and Zeno by AI PM Niraj Patil."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI PRD Template — A Hands-On Guide for PMs" />
        <meta
          property="og:description"
          content="A practical AI PRD template and guide to AI tools for product managers, with case studies from HawkAI and Zeno."
        />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI PRD Template — A Hands-On Guide for Product Managers",
            author: { "@type": "Person", name: "Niraj Patil" },
            mainEntityOfPage: canonical,
            keywords: [
              "ai prd template",
              "ai tools for product managers",
              "ai product manager",
            ],
          })}
        </script>
      </Helmet>

      <main className="min-h-dvh bg-background">
        <div className="container mx-auto max-w-3xl px-6 py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to portfolio
          </Link>

          <header className="mb-12">
            <p className="text-sm font-medium text-primary mb-3">Resource · AI Product Management</p>
            <h1 className="text-display font-poppins font-bold mb-4 text-foreground">
              AI PRD Template — A Hands-On Guide for Product Managers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A practical template and walkthrough for writing PRDs for AI features — built from
              what shipped on HawkAI and Zeno, not theory.
            </p>
          </header>

          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.id} id={s.id}>
                <h2 className="text-heading font-poppins font-semibold mb-3 text-foreground">
                  {s.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </section>
            ))}

            <section id="template">
              <h2 className="text-heading font-poppins font-semibold mb-4 text-foreground">
                The AI PRD template
              </h2>
              <Card className="bg-card border-border/60 shadow-sm">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {templateSections.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground mt-4">
                Use these eight sections as the spine of every AI feature spec. If you can't fill
                one, you have a research task before you have a build task.
              </p>
            </section>

            <section id="cta" className="pt-4">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-heading font-poppins font-semibold mb-3 text-foreground">
                    Want the resume behind this work?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Built by Niraj Patil, Product Engineer — HawkAI, Zeno, Kahana.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      variant="default"
                      onClick={() => window.open(resumeAsset.url, "_blank")}
                      className="gap-2"
                    >
                      <Download className="w-4 h-4" /> Download Resume
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/">View portfolio</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default AiPrdTemplate;
