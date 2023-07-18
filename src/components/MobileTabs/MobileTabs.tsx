import { FC, useState } from "react";

import s from "./MobileTabs.module.scss";

interface PropsType {
   activeTab: number
   mainColor?: string
   tabs: Array<{
      id: number;
      color: string;
      mobileTitle: string;
      desctopTitle: string;
   }>;
   setActiveTab: (tab: number) => void
}
const MobileTabs: FC<PropsType> = ({ tabs, mainColor, activeTab, setActiveTab }) => {
   // const [activeTab, setActiveTab] = useState("OVERVIEW");
   return (
      <ul className={s.mainSectionTabsForMobileBlock}>
         <div className={s.mainSectionTabsForMobileBlockInner}>
            {tabs.map((tab) => (
               <li
                  onClick={() => setActiveTab(tab.id)}
                  className={
                     activeTab === tab.id
                        ? `${s.mainSectionTabsForMobileItem} ${s.mainSectionTabsForMobileItemActive}`
                        : s.mainSectionTabsForMobileItem
                  }
               >
                  {/* <span style={{borderColor: mainColor}} >{tab.mobileTitle}</span> */}
                  <span style={tab.id === activeTab ? { borderBottomColor: mainColor } : { borderBottomColor: "transparent" }} >{tab.mobileTitle}</span>
               </li>
            ))}
         </div>
      </ul>
   );
};
export default MobileTabs;
