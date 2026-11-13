import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Great Kminor — Gospel Guitarist and Recording Artist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050505 0%, #1c1207 55%, #050505 100%)",
          color: "white"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ fontSize: 28, letterSpacing: 10, textTransform: "uppercase", color: "#f59e0b" }}>Official Website</div>
          <div style={{ marginTop: 24, fontSize: 92, fontWeight: 700 }}>Great Kminor</div>
          <div style={{ marginTop: 18, fontSize: 30, color: "#d4d4d8" }}>Guitarist · Recording Artist · Live Performer</div>
        </div>
      </div>
    ),
    size
  );
}
