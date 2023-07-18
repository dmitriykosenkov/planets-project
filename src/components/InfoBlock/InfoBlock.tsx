import { FC, useState, useEffect } from "react";

import iconSource from "../../assets/icon-source.svg";

import s from "./InfoBlock.module.scss";
import { PlanetType } from "../../store/planetsSlice";

interface PropsType {
   activePlanet: string
   activeTab: number;
   // content: string | null
   singlePlanet?: PlanetType | null
}
const InfoBlock: FC<PropsType> = ({ activeTab, activePlanet, singlePlanet }) => {
   const [content, setContent] = useState<string | null>(null);

   useEffect(() => {
      if (singlePlanet && activeTab === 0) {
         setContent(singlePlanet.overview.content)
      } else if (singlePlanet && activeTab === 1) {
         setContent(singlePlanet?.structure.content)
      } else if (singlePlanet && activeTab === 2) {
         setContent(singlePlanet?.geology.content)
      }
   }, [activeTab, activePlanet]);
  

   return (
      <div className={s.mainSectionInfoBlock}>
         <div className={s.mainSectionInfoBlockInner}>
            <h3 className={s.mainSectionInfoTitle}>{activePlanet}</h3>
            <div className={s.mainSectionInfoText}>{content}</div>
            <div className={s.mainSectionInfoSource}>
               Source :{" "}
               <a href={singlePlanet?.overview.source}>
                  Wikipedia <img src={iconSource} alt="" />
               </a>
            </div>
         </div>
      </div>
   );
};
export default InfoBlock;
