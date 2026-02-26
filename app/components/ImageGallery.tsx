"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  images: string[];
}

export default function ImageGallery({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  return (
    <div>
      {/* Main featured image - click to open lightbox */}
      <div
        className="cursor-zoom-in rounded-xl overflow-hidden mb-3"
        onClick={() => setOpen(true)}
      >
        <img
          src={images[activeIndex]}
          alt="main"
          className="w-full object-cover"
        />
      </div>

      {/* Scrollable thumbnail strip */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-transparent">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`screenshot-${i}`}
            onClick={() => setActiveIndex(i)}
            className={`h-20 w-28 flex-shrink-0 object-cover rounded-lg cursor-pointer transition
              ${activeIndex === i
                ? "ring-2 ring-white opacity-100"
                : "opacity-60 hover:opacity-100"
              }`}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={activeIndex}
        on={{ view: ({ index }) => setActiveIndex(index) }}
        slides={slides}
      />
    </div>
  );
}