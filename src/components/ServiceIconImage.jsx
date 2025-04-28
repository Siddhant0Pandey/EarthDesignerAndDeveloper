// components/ServiceIconImage.js
import React from "react";

const ServiceIconImage = ({ src, alt, size = "78px" }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ position: "relative", zIndex: 2, width: size, height: "auto" }}
    />
  );
};

export const ServiceIconBackground = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ opacity: 0.3, width: "150px", height: "auto" }}
    />
  );
};

export default ServiceIconImage;
