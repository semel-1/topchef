import React from "react";

const ImageGallery = ({ images }) => (
  <div className="flex flex-col w-full  gap-6">
    {/* Main Image */}
    <img
      className="w-full max-h-[40vh] object-cover rounded-lg shadow-lg"
      src={images[0].src}
      alt={images[0].alt}
    />

    {/* Additional Images */}
    <div className="flex w-full gap-4">
      {images.slice(1).map((image, index) => (
        <div
          key={index}
          className={`${index === 0 ? "w-1/3" : "w-2/3"} max-h-[30vh]`}
        >
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg"
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  </div>
);

export default ImageGallery;
