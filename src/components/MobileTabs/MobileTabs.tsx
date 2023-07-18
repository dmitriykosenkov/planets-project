import { FC, useState } from "react";

import s from "./MobileTabs.module.scss";

interface PropsType {
   mainColor?: string
   tabs: Array<{
      id: number;
      color: string;
      mobileTitle: string;
      desctopTitle: string;
   }>;
}
const MobileTabs: FC<PropsType> = ({ tabs, mainColor }) => {
   const [activeTab, setActiveTab] = useState("OVERVIEW");
   return (
      <ul className={s.mainSectionTabsForMobileBlock}>
         <div className={s.mainSectionTabsForMobileBlockInner}>
            {tabs.map((tab) => (
               <li
                  onClick={() => setActiveTab(tab.mobileTitle)}
                  className={
                     activeTab === tab.mobileTitle
                        ? `${s.mainSectionTabsForMobileItem} ${s.mainSectionTabsForMobileItemActive}`
                        : s.mainSectionTabsForMobileItem
                  }
               >
                  {/* <span style={{borderColor: mainColor}} >{tab.mobileTitle}</span> */}
                  <span style={tab.mobileTitle === activeTab ? { borderBottomColor: mainColor } : { borderBottomColor: "transparent" }} >{tab.mobileTitle}</span>
               </li>
            ))}
         </div>
      </ul>
   );
};
export default MobileTabs;
