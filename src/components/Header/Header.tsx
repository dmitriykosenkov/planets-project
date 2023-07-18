import { FC, useState, useEffect } from "react";
import { PlanetType } from "../../store/planetsSlice";
import chevron from "../../assets/icon-chevron.svg";

import s from "./Header.module.scss";

interface PropsType {
   planets: Array<PlanetType>;
}
const Header: FC<PropsType> = ({ planets }) => {
   const [openMenu, setOpenMenu] = useState(false);
   

   return (
      <header className={s.header}>
         <div className={s.container}>
            <div className={s.headerInner}>
               <a href="#" className={s.headerLogo}>
                  THE PLANETS
               </a>
               <nav className={s.menuBlock}>
                  <button
                     onClick={() => setOpenMenu((prev) => !prev)}
                     className={s.menuBtn}
                  >
                     <span></span>
                     <span></span>
                     <span></span>
                  </button>
                  <ul className={!openMenu ? `${s.menuList} ${s.menuListClose}` : s.menuList}>
                     {planets.map((planet) => (
                        <li className={s.menuItem}>
                           <a href="#" className={s.menuLink}>
                              <span style={{backgroundColor: planet.menuColor}}></span>
                              {planet.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
};
export default Header;
