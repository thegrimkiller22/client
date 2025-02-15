import React from "react";

// Example array of image URLs
const galleryImages = [
  "/assets/KMB07557.jpg",
  "/assets/KMB07464.JPG",
  "/assets/IMG18_copy1.jpg",
  "/assets/KMB07557.jpg",
  "/assets/IMG_7334.JPG",
  "/assets/IMG_6499.jpg",
  "/assets/IMG_6497.jpg",
  "/assets/DJI_0285.jpg",
  // Add more image URLs as needed
];

// GalleryItem component for each image
const GalleryItem: React.FC<{ imageUrl: string; altText: string }> = ({
  imageUrl,
  altText,
}) => (
  <div className="overflow-hidden rounded-lg  hover:shadow-2xl transition-shadow duration-300">
    <img
      src={imageUrl}
      alt={altText}
      loading="lazy"
      className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
);

const Gallery: React.FC = () => {
  return (
    <div className="gallery-container py-16 px-4 md:px-16 mt-40">
      <h1 className="text-center text-4xl font-bold mb-16">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <GalleryItem
            key={index}
            imageUrl={image}
            altText={`Gallery Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
