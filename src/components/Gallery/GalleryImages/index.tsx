import React, { useEffect, useState } from 'react';

type PicsumImage = {
  id: string;
  author: string;
};

const GalleryImages: React.FC = () => {
  const [images, setImages] = useState<PicsumImage[]>([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=12')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8">Picsum Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map(img => (
          <div key={img.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={`https://picsum.photos/id/${img.id}/400/300`}
              alt={`By ${img.author}`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-700 font-medium">By: {img.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;
