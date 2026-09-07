import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D4F66",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            color: "#C8A27A",
            fontSize: 100,
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
          }}
        >
          GS
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
