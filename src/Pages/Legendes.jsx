import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

import PhotoThumbnail from "../Components/PhotoThumbnail";
import PersonDetails from "./PersonDetails";
import Modal from "./Modal";
import personDetails from "./PhotoDetail";

const clipPathStyle = {
  clipPath: "polygon(50% 0%, 100% 0, 100% 57%, 63% 78%, 10% 49%, 49% 0)",
};

//Map des Photos et Captions : Categorie Figures Historique
const photosCategory1 = [
  {
    id: 1,
    url: "../images/Lat-dior.jpg",
    caption: "Lat Dior Diop",
  },
  {
    id: 2,
    url: "../images/1618925698.jpg",
    caption: "Bour Sine Coumba Ndofene Diouf ",
  },
  {
    id: 3,
    url: "../images/sambaLaobe.jpg",
    caption: "Damel Samba Laobé",
  },
  {
    id: 4,
    url: "../images/tanor-teigne-696x440.png",
    caption: "Teigne Tanor Gogne Dieng",
  },
  {
    id: 5,
    url: "../images/1618320374.jpeg",
    caption: "Maba Diakhou Bâ ",
  },
  {
    id: 6,
    url: "../images/aline-sitoe-diatta.jpg",
    caption: "Aline Sitoé Diatta",
  },
];
//Categorie Religieuse
const photosCategory2 = [
  {
    id: 7,
    url: "../images/maodo.jpg",
    caption: "El Hadj Malick Sy Maodo",
  },
  {
    id: 8,
    url: "../images/Serigne-Touba-Mbacke-.jpg",
    caption: "Cheikh Ahmadou Bamba Mbacké",
  },
  {
    id: 9,
    url: "../images/Baye Niass.jpg",
    caption: "Cheikh Ibrahima Baye Niass",
  },
];

//Categorie Sportifs
const photosCategory3 = [
  {
    id: 10,
    url: "../images/AmyMbackeThiam.jpg",
    caption: "Amy Mbacké Thiam",
  },
  {
    id: 11,
    url: "../images/artfichier_790899_7697692_201805041131960.jpg",
    caption: "El Hadj Ousseynou Diouf",
  },
  {
    id: 12,
    url: "../images/jules-bocande-avait-54-ans-photo-afp-1643617556.jpg",
    caption: "Jules François Bocandé",
  },
];

const Legendes = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  //Fonction pour afficher les détails de la photo sélectionnée
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  //Fonction pour fermer le modal

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  };

  const [searchTerm, setSearchTerm] = useState(""); // État local pour stocker la valeur de recherche

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrer les photos de la première catégorie en fonction de la valeur de recherche
  const filteredPhotosCategory1 = photosCategory1.filter((photo) =>
    photo.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtrer les photos de la deuxième catégorie en fonction de la valeur de recherche
  const filteredPhotosCategory2 = photosCategory2.filter((photo) =>
    photo.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtrer les photos de la deuxième catégorie en fonction de la valeur de recherche
  const filteredPhotosCategory3 = photosCategory3.filter((photo) =>
    photo.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      {/*
      <div style={clipPathStyle}
      
      className="md:w-[820px] md:h-[820px] w-72 h-72 bg-slate-50 absolute right-0"
      ></div>
      */}
      <Navbar />
      {showModal && selectedPhoto && (
        <Modal
          photo={selectedPhoto}
          onClose={handleCloseModal}
          personDetails={personDetails[selectedPhoto.caption]}
        />
      )}

      <div className="absolute top-52 ">
        <h1 className="text-slate-50 font-josefin md:text-4xl text-2xl  ml-2">
          Découvrir les légendes du Sénégal
        </h1>
        <h1 className="text-slate-50 font-josefin md:text-2xl text-1xl ml-4 ">
          Catégorie Figures Historiques
        </h1>
        <br />
        <div className="flex space-x-4 w-[1800px] shadow-lg ">
          {filteredPhotosCategory1.map((photo) => (
            <PhotoThumbnail
              key={photo.id}
              photo={photo}
              onClick={() => handlePhotoClick(photo)}
            />
          ))}
        </div>

        <h1 className="text-slate-50 font-josefin text-2xl ml-4 mt-8">
          Catégorie Figures Religieuse
        </h1>
        <div className="flex space-x-4 w-[1800px] shadow-lg">
          {filteredPhotosCategory2.map((photo) => (
            <PhotoThumbnail
              key={photo.id}
              photo={photo}
              onClick={() => handlePhotoClick(photo)}
            />
          ))}
        </div>

        <h1 className="text-slate-50 font-josefin text-2xl ml-4 mt-8">
          Catégorie Figures Sportifs
        </h1>
        <div className="flex space-x-4 w-[1800px] shadow-lg">
          {filteredPhotosCategory3.map((photo) => (
            <PhotoThumbnail
              key={photo.id}
              photo={photo}
              onClick={() => handlePhotoClick(photo)}
            />
          ))}
        </div>

        <div className="absolute right-[-420px] top-20 bg-slate-700 w-96 h-44">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-200
         dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Rechercher un personnage..."
                onChange={handleSearch}
                value={searchTerm}
                required
                title="Recherche par Nom"
              ></input>
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
         dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
              >
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Legendes;
