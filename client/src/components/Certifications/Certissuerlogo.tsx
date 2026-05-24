// components/Certifications/CertIssuerLogo.tsx

interface Props {
  logo: string;
  issuer: string;
  size?: number;
}

// Generates a consistent color from issuer name for the fallback avatar
function issuerColor(name: string): string {
  const colors = [
    "#2563eb",
    "#7c3aed",
    "#0891b2",
    "#059669",
    "#d97706",
    "#dc2626",
    "#db2777",
    "#4f46e5",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

export default function CertIssuerLogo({ logo, issuer, size = 32 }: Props) {
  const initials = issuer
    .split(/[\s/,]+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");

  const color = issuerColor(issuer);

  if (logo) {
    return (
      <img
        src={logo}
        alt={issuer}
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className="flex items-center justify-center rounded-lg font-black text-white shrink-0"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color}dd, ${color}99)`,
        fontSize: size * 0.35,
        letterSpacing: "-0.02em",
      }}
    >
      {initials}
    </div>
  );
}
