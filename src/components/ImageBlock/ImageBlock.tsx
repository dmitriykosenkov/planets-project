import { FC, useState, useEffect } from "react";

import { PlanetType } from "../../store/planetsSlice";
import s from "./ImageBlock.module.scss";

type PropsType = {
   activeTab: number;
   singlePlanet: PlanetType;
};
const ImageBlock: FC<PropsType> = ({ singlePlanet, activeTab }) => {
   const [mainImage, setMainImage] = useState("");

   useEffect(() => {
      switch (activeTab) {
         case 0:
            setMainImage(singlePlanet.images.planet);
            break;
         case 1:
            setMainImage(singlePlanet.images.internal);
            break;
         case 2:
            setMainImage(singlePlanet.images.planet);
            break;
         default:
            break;
      }
   }, [activeTab, singlePlanet]);

   return (
      <div className={s.mainSectionImageBlock}>
         <div className={s.example}>
            <img
               className={s.mainImage}
               // src={process.env.PUBLIC_URL + singlePlanet.images.planet}
               src={process.env.PUBLIC_URL + mainImage}
               alt={singlePlanet?.name}
            />
            {activeTab === 2 && (
               <div className={s.subImage}>
                  <img
                     className={s.subImage}
                     src={process.env.PUBLIC_URL + singlePlanet.images.geology}
                     alt={singlePlanet?.name}
                  />
               </div>
            )}
         </div>
      </div>
   );
};
export default ImageBlock;
