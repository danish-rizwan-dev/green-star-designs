import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D4F66",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            color: "#C8A27A",
            fontSize: 18,
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
