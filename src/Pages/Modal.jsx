import React from "react";

const Modal = ({ photo, onClose, personDetails }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600"
        >
          Fermer
        </button>
        <img
          src={photo.url}
          alt={photo.caption}
          className="w-80 h-80 object-cover rounded-lg shadow-lg mb-4"
        />
        <h2 className="text-xl font-bold text-gray6800">{photo.caption}</h2>
        <div className="mt-4">
          {personDetails && (
            <>
              <h3 className="text-lg font-semibold mb-2">
                Details de la personne
              </h3>
              <p>{personDetails.bio}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
