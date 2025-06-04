import React, { useEffect, useState } from "react";
import GalleryView from "../GalleryImagesView";

type PicsumImage = {
  id: string;
  author: string;
};

const GalleryImages: React.FC = () => {
  const [images, setImages] = useState<PicsumImage[]>([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=12")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const handleRemove = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      {images.length > 0 ? (
        <GalleryView
          images={images.map((img) => ({
            url: `https://picsum.photos/id/${img.id}/400/300`,
            id: img.id,
          }))}
          title="Picsum Gallery"
          onImageClick={handleRemove}
        />
      ) : (
        <p className="text-gray-600 text-xl">Loading gallery...</p>
      )}
    </div>
  );
};

export default GalleryImages;
