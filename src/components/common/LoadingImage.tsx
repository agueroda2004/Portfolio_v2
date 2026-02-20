import React from "react";

type LoadingImageProps = {
  src: string;
};

export default function LoadingImage({ src }: LoadingImageProps) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <span
          className={`material-symbols-outlined animate-spin  text-3xl text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
          style={{ fontSize: `${48}px` }}
        >
          progress_activity
        </span>
      )}

      <img
        src={src}
        alt=""
        className={`w-full object-cover transition-opacity duration-300 grayscale-img ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
