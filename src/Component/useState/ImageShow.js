import { useState } from "react";

const images = [
  "https://source.unsplash.com/600x400/?nature",
  "https://source.unsplash.com/600x400/?ocean",
  "https://source.unsplash.com/600x400/?mountains",
  "https://source.unsplash.com/600x400/?forest",
];

const ImageShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Image Carousel</h1>
      <div className="relative w-[600px] h-[400px]">
        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded"
        >
          ⬅ Prev
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded"
        >
          Next ➡
        </button>
      </div>
      <p className="text-lg">Image {currentIndex + 1} of {images.length}</p>
    </div>
  );
};

export default ImageShow;

