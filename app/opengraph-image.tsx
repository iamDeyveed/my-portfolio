import { ImageResponse } from "next/og";

export const alt = "Yagazie. I illustrate, design and ship.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "58px 64px",
        background: "#f5f1e8",
        color: "#16181d",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 700 }}>
        <span>YAGAZIE</span>
        <span style={{ color: "#145cff" }}>AVAILABLE FOR SELECTED PROJECTS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 112, lineHeight: 0.88, letterSpacing: "-7px", fontWeight: 900 }}>
        <span>I illustrate,</span>
        <span>design &amp; ship.</span>
      </div>
    </div>,
    size,
  );
}
