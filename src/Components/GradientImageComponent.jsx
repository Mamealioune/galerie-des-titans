import React from "react";

const GradientImageComponent = () => {
  return (
    <div className=" relative ">
      <h1 className="absolute left-[228px] top-[420px]  text-slate-50 xl:text-6xl text-2xl font-josefin">
        Explorez l'héritage des titans du Sénégal à travers <br /> une galerie
        captivante et des récits inspirants.
      </h1>
      <a href="Legendes">
      <button class="absolute left-[228px] top-[580px] text-slate-50 flex h-[54px] w-56 rounded-full items-center justify-center overflow-hidden bg-blue-600 font-medium shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
      <span class="relative z-10 font-josefin">Découvrir les légendes</span>
    </button>
    </a>
      <div className="absolute right-[228px] top-[420px] w-64 h-80 bg-[url('../images/rm218-bb-07.jpg')] bg-cover drop-shadow-2xl">
        <img
          src="../images/Lat-dior.jpg"
          alt="lat dior"
          className="absolute w-56 bottom-32 right-44 rounded-lg drop-shadow-2xl hover:bottom-40 transition-all ease-in-out duration-300"
        />
        <img
          src="../images/SENGHOR.jpg"
          alt="Senghor"
          className="absolute w-56 h-48 top-44 left-32 rounded-lg drop-shadow-2xl hover:bottom-40 transition-all ease-in-out duration-300"
        />
        <img
          src="../images/jules-bocande-avait-54-ans-photo-afp-1643617556.jpg"
          alt="Bocandé"
          className="absolute w-56 h-72 bottom-44 left-32 rounded-lg drop-shadow-2xl hover:bottom-40 transition-all ease-in-out duration-300"
        />
      </div>
    </div>
  );
};

export default GradientImageComponent;
