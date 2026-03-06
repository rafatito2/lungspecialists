import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt =
  "Lung Disease Specialists — Pulmonary & Sleep Medicine | Fort Lauderdale, FL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), "public/lung_logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          backgroundImage:
            "linear-gradient(140deg, #0d1f52 0%, #1a3888 40%, #2B56C5 75%, #1aaead 100%)",
        }}
      >
        {/* Left content */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 740 }}>
          {/* Eyebrow */}
          <span
            style={{
              color: "#29C4BF",
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Fort Lauderdale, FL · Board-Certified Specialists
          </span>

          {/* Title */}
          <span
            style={{
              color: "white",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 8,
            }}
          >
            Lung Disease
          </span>
          <span
            style={{
              color: "white",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 22,
            }}
          >
            Specialists
          </span>

          {/* Subtitle */}
          <span
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: 27,
              marginBottom: 46,
            }}
          >
            Pulmonary &amp; Sleep Medicine
          </span>

          {/* Pill tags */}
          <div style={{ display: "flex", gap: 14 }}>
            {["Pulmonary Care", "Sleep Medicine", "Lung Function Testing"].map(
              (label) => (
                <span
                  key={label}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    borderRadius: 100,
                    padding: "9px 22px",
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  {label}
                </span>
              )
            )}
          </div>
        </div>

        {/* Logo */}
        <img
          src={logoSrc}
          width={280}
          height={280}
          style={{ borderRadius: 36, opacity: 0.93 }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
