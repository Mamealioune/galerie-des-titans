import React, { useState } from "react";
import { BsEye } from "react-icons/bs";

const PhotoThumbnail = ({ photo }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer ml-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="md:w-40 md:h-40 w-20 h-20 md:relative">
        <img
          src={photo.url}
          alt={photo.caption}
          className={`md:w-40 md:h-40 w-20 h-20 object-cover rounded transition-opacity ${
            hovered ? "opacity-50" : "opacity-100"
          }`}
        />
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <BsEye
              title={`L'histoire de ${photo.caption}`}
              className="text-white text-2xl"
            />
          </div>
        )}
      </div>
      <div className="w-36" title={photo.caption}>
        <p className="mt-2 text-slate-50 font-josefin md:text-sm md:text-center truncate">
          {photo.caption}
        </p>
      </div>
    </div>
  );
};

export default PhotoThumbnail;
