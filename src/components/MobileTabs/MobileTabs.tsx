import {FC} from 'react'

import s from "./MobileTabs.module.scss";

interface PropsType {
   tabs: Array<{id: number, color: string; mobileTitle: string; desctopTitle: string }>
};
const MobileTabs: FC<PropsType> = ({tabs}) => {
   return (
      <ul className={s.mainSectionTabsForMobileBlock}>
         <div className={s.mainSectionTabsForMobileBlockInner}>
            <li onClick={() => console.log("OVERVIEW")}
               className={`${s.mainSectionTabsForMobileItem} ${s.mainSectionTabsForMobileItemActive}`}
            >
               <span>OVERVIEW</span>
            </li>
            <li onClick={() => console.log("Structure")} className={s.mainSectionTabsForMobileItem}>
               <span>Structure</span>
            </li>
            <li onClick={() => console.log("Surface")} className={s.mainSectionTabsForMobileItem}>
               <span>Surface</span>
            </li>
         </div>
      </ul>
   );
};
export default MobileTabs;
