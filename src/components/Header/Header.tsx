import { FC, useState, useEffect } from "react";
import { PlanetType } from "../../store/planetsSlice";
import chevron from "../../assets/icon-chevron.svg";

import s from "./Header.module.scss";

interface PropsType {
   planets: Array<PlanetType>;
   activePlanet: string
   setActivePlanet: (planet: string) => void;
}
const Header: FC<PropsType> = ({ planets, setActivePlanet, activePlanet }) => {
   const [openMenu, setOpenMenu] = useState(false);
   useEffect(() => {
      if (openMenu) {
         document.body.classList.add(s.lock);
      } else {
         document.body.classList.remove(s.lock);
      }
   }, [openMenu]);

   return (
      <header className={s.header}>
         <div className={s.container}>
            <div className={s.headerInner}>
               <a href="#" className={s.headerLogo}>
                  THE PLANETS
               </a>
               <button
                  onClick={() => setOpenMenu((prev) => !prev)}
                  className={s.menuBtn}
               >
                  <span></span>
                  <span></span>
                  <span></span>
               </button>
               <nav className={s.menuBlock}>
                  <ul
                     className={
                        openMenu
                           ? `${s.menuList} ${s.menuListClose}`
                           : s.menuList
                     }
                  >
                     {planets.map((planet) => (
                        <li
                           className={s.menuItem}
                           style={planet.name === activePlanet ? { borderTopColor: planet.mainColor } : { borderTopColor: "transparent" } }
                           onClick={() => setActivePlanet(planet.name)}
                        >
                           <a href="#" className={s.menuLink}>
                              <span
                                 style={{ backgroundColor: planet.menuColor }}
                              ></span>
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
