"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiDownload } from "react-icons/fi";

// Define the type for the props
interface ProductImageCarouselProps {
  images: string[];  // images is an array of strings (URLs)
}

const ProductImageCarousel = ({ images }: ProductImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentIndex]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(images[currentIndex]);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `product-image-${currentIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-4">
      <div className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-black" : ""}`}>
        <div
          ref={carouselRef}
          className={`relative overflow-hidden ${isFullscreen ? "h-screen" : "h-[500px]"}`}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-full object-contain transition-transform duration-300"
            width={800} height={600}
          />

          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
            aria-label="Previous image"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
            aria-label="Next image"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute top-4 right-4 space-x-2">
            {/* <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
              aria-label="Toggle fullscreen"
            >
              <FiMaximize className="w-5 h-5" />
            </button> */}
            <button
              onClick={handleDownload}
              className="bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
              aria-label="Download image"
            >
              <FiDownload className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-start mt-4 space-x-2 overflow-x-auto py-2">
          {images.map((imageUrl, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden ${currentIndex === index ? "ring-2 ring-blue-500" : "ring-1 ring-gray-200"}`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={imageUrl}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                priority={true}
                width={300}
                height={300}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageCarousel;
