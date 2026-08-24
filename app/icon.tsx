import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ display: "flex", height: "100%", width: "100%", alignItems: "center", justifyContent: "center", borderRadius: 14, background: "#050505", color: "#f59e0b", fontSize: 30, fontWeight: 800 }}>
      GK
    </div>,
    size
  );
}
