// pages/Certifications.tsx  (or sections/Certifications.tsx)
import { useState, useMemo } from "react";
import { certificates } from "../data/portfolio";
import { SectionHeader, FadeIn } from "../components/ui";
import CertStats from "../components/Certifications/Certstats ";
import CertFilter from "../components/Certifications/Certfilter";
import CertGrid from "../components/Certifications/Certgrid";

const ALL = "All";

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [showAll, setShowAll] = useState(false);

  // Count per category for filter badges
  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    certificates.forEach((c) => {
      map[c.category] = (map[c.category] ?? 0) + 1;
    });
    return map;
  }, []);

  // Filter
  const filtered = useMemo(
    () =>
      activeCategory === ALL
        ? certificates
        : certificates.filter((c) => c.category === activeCategory),
    [activeCategory],
  );

  // Paginate — show 6 initially
  const PAGE = 6;
  const visible = showAll ? filtered : filtered.slice(0, PAGE);
  const hasMore = filtered.length > PAGE;

  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <FadeIn>
          <SectionHeader
            number="04"
            title="Certifications"
            subtitle="Verified credentials from leading platforms and institutions."
          />
        </FadeIn>

        {/* Stats strip */}
        <FadeIn delay={0.08}>
          <CertStats />
        </FadeIn>

        {/* Filter bar */}
        <FadeIn delay={0.12}>
          <CertFilter
            active={activeCategory}
            onChange={(cat) => {
              setActiveCategory(cat);
              setShowAll(false);
            }}
            counts={counts}
          />
        </FadeIn>

        {/* Grid */}
        <CertGrid certs={visible} />

        {/* Show more */}
        {hasMore && !showAll && (
          <FadeIn delay={0.1}>
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setShowAll(true)}
                className={[
                  "inline-flex items-center gap-2 px-6 py-2.5 rounded-xl",
                  "text-sm font-semibold transition-all duration-200",
                  "bg-slate-100 dark:bg-white/5",
                  "border border-slate-200 dark:border-white/8",
                  "text-slate-600 dark:text-slate-300",
                  "hover:border-blue-300 dark:hover:border-blue-500/30",
                  "hover:text-blue-600 dark:hover:text-blue-400",
                  "hover:bg-blue-50 dark:hover:bg-blue-500/10",
                ].join(" ")}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                Show all {filtered.length} certificates
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
