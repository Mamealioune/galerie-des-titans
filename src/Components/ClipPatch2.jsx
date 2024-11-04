import React from 'react';

const ClipPatch2 = () => {
    const clipPathStyle1 = {
        clipPath: "polygon(0 0, 100% 35%, 100% 83%, 0 39%)",
      };
    return (
        <div>
            <div style={clipPathStyle1}  className="absolute top-[1800px] w-full h-[680px] bg-[url('../images/large.jpg')] bg-cover bg-no-repeat"></div>
        </div>
    );
};

export default ClipPatch2;