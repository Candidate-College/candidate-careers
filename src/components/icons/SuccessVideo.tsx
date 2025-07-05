// components/SuccessVideo.tsx
"use client";

export const SuccessVideo = () => {
  return (
    <video
      src="/animations/success-check.webm"
      autoPlay
      muted
      playsInline
      loop={true}
      className="w-32 h-32 z-50"
    />
  );
};
