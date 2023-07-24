import { FC, useState, useEffect } from "react";
import { PlanetType } from "../../store/planetsSlice";

import iconSource from "../../assets/icon-source.svg";

import s from "./InfoBlock.module.scss";

interface PropsType {
   activePlanet: string;
   activeTab: number;
   // content: string | null
   singlePlanet: PlanetType;
}
const InfoBlock: FC<PropsType> = ({
   activeTab,
   activePlanet,
   singlePlanet,
}) => {
   const [content, setContent] = useState<string>("");
   useEffect(() => {
      switch (activeTab) {
         case 0:
            setContent(singlePlanet.overview.content);
            break;
         case 1:
            setContent(singlePlanet.structure.content);
            break;
         case 2:
            setContent(singlePlanet.geology.content);
            break;
      }
   }, [activeTab, activePlanet]);

   return (
      <div className={s.mainSectionInfoBlock}>
         <div className={s.mainSectionInfoBlockInner}>
            <h3 className={s.mainSectionInfoTitle}>{singlePlanet?.name}</h3>
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
