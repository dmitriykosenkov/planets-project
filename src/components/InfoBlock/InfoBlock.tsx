import { FC } from "react"

import iconSource from "../../assets/icon-source.svg";

import s from "./InfoBlock.module.scss";
import { PlanetType } from "../../store/planetsSlice";



interface PropsType {
   singlePlanet: PlanetType | null
}
const InfoBlock: FC<PropsType> = ({singlePlanet}) => {
  return (
   <div className={s.mainSectionInfoBlock}>
   <div className={s.mainSectionInfoBlockInner}>
      <h3 className={s.mainSectionInfoTitle}>
         {singlePlanet?.name}
      </h3>
      <div className={s.mainSectionInfoText}>
         {singlePlanet?.overview.content}
      </div>
      <div className={s.mainSectionInfoSource}>
         Source :{" "}
         <a href={singlePlanet?.overview.source}>
            Wikipedia <img src={iconSource} alt="" />
         </a>
      </div>
   </div>
</div>
  )
}
export default InfoBlock