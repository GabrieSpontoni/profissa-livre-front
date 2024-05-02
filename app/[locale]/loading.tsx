"use client";

import Lottie from "./_components/Lottie/Lottie";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0  flex items-center justify-center z-50 w-full h-full backdrop-blur-sm bg-white/30">
      <div className="w-24 h-24">
        <Lottie animationData={require("../../public/lotties/loading.json")} />
      </div>
    </div>
  );
}
