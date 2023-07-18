import { useEffect, useState } from "react";

import s from "./Tabs.module.scss";

type PropsType = {
   tabs: Array<{id: number, color: string; mobileTitle: string; desctopTitle: string }>;
};
const Tabs: React.FC<PropsType> = ({ tabs }) => {
   const [activeTab, setActiveTab] = useState(0);
   return (
      <ul className={s.mainSectionTabsBlock}>
         {tabs.map((item) => (
            <li onClick={() => setActiveTab(item.id)}
               className={item.id === activeTab ? `${s.mainSectionTabsItem} ${s.mainSectionTabsItemActive}` : s.mainSectionTabsItem}
            >
               <span>0{item.id + 1}</span>{item.desctopTitle}
            </li>
         ))}
      </ul>
   );
};
export default Tabs;
