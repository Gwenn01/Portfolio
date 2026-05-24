// components/Certifications/CertGrid.tsx
import { FadeIn } from "../ui";
import CertCard from "./Certcard";
import type { Certificate } from "../../data/portfolio";

interface Props {
  certs: Certificate[];
}

export default function CertGrid({ certs }: Props) {
  if (certs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400 dark:text-slate-600">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <p className="text-sm font-medium">
          No certificates found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[...certs]
        .sort((a, b) => {
          const aNum = Number(a.id.replace("cert-", ""));
          const bNum = Number(b.id.replace("cert-", ""));
          return bNum - aNum; // newest first
        })
        .map((cert, i) => (
          <FadeIn key={cert.id} delay={i * 0.06}>
            <CertCard cert={cert} />
          </FadeIn>
        ))}
    </div>
  );
}
