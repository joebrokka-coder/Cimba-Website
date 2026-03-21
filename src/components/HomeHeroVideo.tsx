"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

/**
 * Home page hero video: Cimba Hero Video V2 (served from /public).
 * No autoplay — user taps play; native controls while playing.
 */
export default function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    void v.play();
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-primary shadow-xl mt-[20px]">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/cimba-hero-video-v2.mp4"
        controls={playing}
        playsInline
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
          <button
            type="button"
            className="pointer-events-auto flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-2xl hover:scale-105 transition-transform"
            aria-label="Play video"
            onClick={play}
          >
            <Play size={32} className="text-primary ml-1" fill="currentColor" />
          </button>
        </div>
      )}
    </div>
  );
}
