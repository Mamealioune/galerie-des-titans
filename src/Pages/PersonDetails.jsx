// PersonDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const PersonDetails = ({ photos }) => {
  const { personId } = useParams();
  const person = photos.find((photo) => photo.id.toString() === personId);
  console.log("Person detail:", person);

  if (!person) {
    console.log("Person not found");
    return <div>Personne non trouvée</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={person.url}
        alt={person.caption}
        className="w-80 h-80 object-cover mb-4"
      />
    </div>
  );
};

export default PersonDetails;
