import s from "./MobileTabs.module.scss";

type Props = {};
const MobileTabs = (props: Props) => {
   return (
      <ul className={s.mainSectionTabsForMobileBlock}>
         <div className={s.mainSectionTabsForMobileBlockInner}>
            <li
               className={`${s.mainSectionTabsForMobileItem} ${s.mainSectionTabsForMobileItemActive}`}
            >
               <span>OVERVIEW</span>
            </li>
            <li className={s.mainSectionTabsForMobileItem}>
               <span>Structure</span>
            </li>
            <li className={s.mainSectionTabsForMobileItem}>
               <span>Surface</span>
            </li>
         </div>
      </ul>
   );
};
export default MobileTabs;
