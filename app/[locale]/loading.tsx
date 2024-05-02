"use client";
import Lottie from "react-lottie";

export default function Loading() {
  if (typeof document === "undefined") {
    return null;
  }
  return (
    <div className="fixed top-0 left-0  flex items-center justify-center z-50 w-full h-full backdrop-blur-sm bg-white/30">
      <div className="w-24 h-24">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: require("../../public/lotties/loading.json"),
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
