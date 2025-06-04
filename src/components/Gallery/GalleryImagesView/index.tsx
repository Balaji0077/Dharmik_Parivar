import React, { useState, useEffect } from "react";

interface GalleryCardProps {
  images: any[];
  title?: string;
}

const GalleryView: React.FC<GalleryCardProps> = ({ images, title }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <div
        className="border border-gray-300 rounded-lg p-4 cursor-pointer w-64 text-center shadow-md"
        onClick={() => setOpen(true)}
      >
        <img
          src={images[0]}
          alt={title || "Gallery"}
          className="w-full h-36 object-cover rounded"
        />
        <h3 className="mt-3 text-lg font-semibold">{title || "Gallery"}</h3>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white p-6 rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto flex gap-4 flex-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="w-48 h-36 object-cover rounded"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryView;
