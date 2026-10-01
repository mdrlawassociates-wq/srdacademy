import { ImageResponse } from "next/og";

export const alt = "SRD Academy: online IELTS, TOEFL and PTE preparation and study-abroad guidance, Chennai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0e2a36", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 56, height: 40, borderRadius: 10, background: "#f4b23e" }} />
            <div style={{ fontSize: 40, fontWeight: 800, color: "#f3f6f5" }}>SRD Academy</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 800, color: "#f3f6f5", lineHeight: 1.05, maxWidth: 900 }}>
              Your English test is the first leg of the journey.
            </div>
            <div style={{ fontSize: 32, color: "#f4b23e", marginTop: 28 }}>
              Online IELTS, TOEFL and PTE classes. Study-abroad guidance. Chennai.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
