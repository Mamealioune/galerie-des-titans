import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const BreveStory = () => {
  const clipPathStyle = {
    clipPath: "polygon(0 62%, 100% 12%, 100% 58%, 0% 100%)",
  };

  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });

  const handleMouseOver = (e) => {
    const image = e.target;
    const mouseX = (e.nativeEvent.offsetX / image.width) * 100;
    const mouseY = (e.nativeEvent.offsetY / image.height) * 100;
    setZoomOrigin({ x: mouseX, y: mouseY });
    applyZoomStyles(image);
  };

  const handleMouseMove = (e) => {
    // Mise à jour instantanée de la position de la zone de zoom
    const image = e.target;
    const mouseX = (e.nativeEvent.offsetX / image.width) * 100;
    const mouseY = (e.nativeEvent.offsetY / image.height) * 100;
    setZoomOrigin({ x: mouseX, y: mouseY });
    applyZoomStyles(image);
  };

  const handleMouseOut = (e) => {
    // Réinitialisez les styles lorsque la souris quitte l'image
    const image = e.target;
    image.style.transformOrigin = "50% 50%";
    image.classList.remove("hover:scale-125");
  };

  const applyZoomStyles = (image) => {
    // Appliquez les styles CSS pour le zoom en utilisant les classes de Tailwind
    image.style.transformOrigin = `${zoomOrigin.x}% ${zoomOrigin.y}%`;
    image.classList.add("hover:scale-125"); // Utilisez la classe de Tailwind pour le zoom
  };

  return (
    <div>
      <div
        style={clipPathStyle}
        className="absolute top-[800px] w-full h-[520px] bg-slate-50"
      ></div>

      <FaLongArrowAltRight className="absolute  top-[910px] right-[400px] w-44 h-44 fill-blue-900" />
      <h1 className="absolute  top-[980px] right-4 font-josefin text-5xl text-blue-900">
        Le saviez Vous ?
      </h1>
      <div className="absolute top-[1300px] right-8 space-y-8">
        <div className="flex gap-4 w-[2000px] items-center justify-center">
          <p className="text-slate-50 font-josefin text-2xl">
            Le Sénégal, situé à l'extrémité ouest de l'Afrique, possède une
            histoire riche et diversifiée. Les premières traces d'occupation
            humaine remontent à la Préhistoire, avec des communautés vivant de
            la pêche et de l'agriculture. Au cours des siècles, la région a été
            influencée par différentes cultures, notamment celles des empires du
            Ghana, du Mali et du Songhaï. Au XVe siècle, les Portugais ont
            établi des contacts avec la région, suivis par d'autres Européens.
            Le commerce des esclaves a prospéré pendant plusieurs siècles, avec
            l'établissement de comptoirs européens sur la côte sénégalaise. À la
            fin du XIXe siècle, la France a étendu sa colonisation sur le
            territoire, intégrant le Sénégal à l'Afrique occidentale française.
            Le Sénégal a joué un rôle clé dans le mouvement de décolonisation
            africain. En 1960, il est devenu indépendant sous la présidence de
            Léopold Sédar Senghor, qui a introduit la notion de "négritude" et a
            œuvré pour la promotion de la culture africaine. Le Sénégal a établi
            des relations diplomatiques stables et est devenu un foyer
            d'intellectuels et d'artistes. Au fil des décennies, le Sénégal a
            maintenu sa stabilité politique relative et a accueilli des forums
            internationaux, notamment le Forum social mondial en 2011. Il reste
            un acteur majeur dans les efforts de développement en Afrique de
            l'Ouest. La diversité culturelle, la musique vibrante et la
            stabilité politique font du Sénégal une nation africaine unique et
            influente.
          </p>
          <div className="relative w-[6000px] h-[500px] overflow-hidden rounded-md">
            <img
              src="../images/31e2662ad47c3d7d99fe79280a2ab1-39e59.jpg"
              alt="Photo senegal"
              className="w-[800px] h-[500px] transition-transform duration-300 ease-in-out transform origin-center hover:cursor-zoom-in
        "
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onMouseMove={handleMouseMove}
            />
          </div>
        </div>
        <div className="flex gap-4 w-[2000px] items-center justify-center">
          <div className="relative w-[9000px] h-[500px] overflow-hidden rounded-md">
            <img
              src="../images/7397541-11394325.jpg"
              alt=""
              className="w-[800px] h-[500px] transition-transform duration-300 ease-in-out transform origin-center hover:cursor-zoom-in
             "
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onMouseMove={handleMouseMove}
            />
          </div>
          <div>
            <h1 className="text-slate-50 font-josefin text-2xl">
              Riche en histoire!!
            </h1>
            <p className="text-slate-50 font-josefin text-2xl ">
              Pendant la colonisation, le Sénégal devint un centre de résistance
              et de mobilisation pour l'indépendance. Des leaders éclairés tels
              que Léopold Sédar Senghor et Cheikh Anta Diop émergèrent, plaidant
              pour la libération de la nation sénégalaise. En 1960, le Sénégal
              accéda à l'indépendance, devenant l'une des premières nations
              africaines à se libérer du joug colonial. Depuis lors, le Sénégal
              a tracé son propre chemin politique et économique. La démocratie
              s'est enracinée, et le pays a connu une stabilité relative,
              établissant sa réputation en tant que modèle de gouvernance en
              Afrique de l'Ouest. Dakar, la capitale sénégalaise, est devenue un
              centre culturel dynamique, accueillant des festivals artistiques
              renommés et célébrant la riche diversité du pays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreveStory;
