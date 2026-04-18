"use client";

import dynamic from "next/dynamic";
import SplineFallback from "./SplineFallback";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineFallback />,
});

interface HeroSplineSceneProps {
  sceneUrl?: string;
}

export default function HeroSplineScene({ sceneUrl }: HeroSplineSceneProps) {
  // If no URL is provided, we just show the fallback (which matches the prototype CSS orb)
  if (!sceneUrl) {
    return <SplineFallback />;
  }

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center pointer-events-auto">
      <Spline scene={sceneUrl} />
    </div>
  );
}
