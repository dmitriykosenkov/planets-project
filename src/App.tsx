import s from "./App.module.scss";
import planet from "./assets/planet-mercury.svg";
// import planet from "./assets/planet-saturn.svg";
import iconSource from "./assets/icon-source.svg";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import MobileTabs from "./components/MobileTabs/MobileTabs";
import { useAppSelector } from "./store/hooks";

const tabs = [
   {id: 0, color: "", mobileTitle: "OVERVIEW", desctopTitle: "OVERVIEW" },
   {id: 1, color: "", mobileTitle: "Structure", desctopTitle: "Internal Structure" },
   {id: 2, color: "", mobileTitle: "Surface", desctopTitle: "Surface Geology" },
];

function App() {
   const {planets} = useAppSelector(state => state.planet)
   useEffect(() => {
      console.log(planets);
   }, []);
   return (
      <div className={s.wrapper}>
         <Header planets={planets} />

         <section className={s.mainSection}>
            <MobileTabs />
            <div className={s.mainSectionContainer}>
               <div className={s.mainSectionImageBlock}>
                  <img src={planet} alt="mercury" />
               </div>
               <div className={s.mainSectionInfoBlock}>
                  <div className={s.mainSectionInfoBlockInner}>
                     <h3 className={s.mainSectionInfoTitle}>mercury</h3>
                     <div className={s.mainSectionInfoText}>
                        Mercury is the smallest planet in the Solar System and
                        the closest to the Sun. Its orbit around the Sun takes
                        87.97 Earth days, the shortest of all the Sun's planets.
                        Mercury is one of four terrestrial planets in the Solar
                        System, and is a rocky body like Earth.
                     </div>
                     <div className={s.mainSectionInfoSource}>
                        Source :{" "}
                        <a href="#">
                           Wikipedia <img src={iconSource} alt="" />
                        </a>
                     </div>
                  </div>
               </div>
               <Tabs tabs={tabs} />
               <ul className={s.mainSectionStatsBlock}>
                  <li className={s.mainSectionStatsItem}>
                     <div className={s.mainSectionStatsItemSubtitle}>
                        ROTATION TIME
                     </div>
                     <h4 className={s.mainSectionStatsItemTitle}>10.8 hours</h4>
                  </li>
                  <li className={s.mainSectionStatsItem}>
                     <div className={s.mainSectionStatsItemSubtitle}>
                        REVOLUTION TIME
                     </div>
                     <h4 className={s.mainSectionStatsItemTitle}>
                        29.46 years
                     </h4>
                  </li>
                  <li className={s.mainSectionStatsItem}>
                     <div className={s.mainSectionStatsItemSubtitle}>
                        radius
                     </div>
                     <h4 className={s.mainSectionStatsItemTitle}>58,232 km</h4>
                  </li>
                  <li className={s.mainSectionStatsItem}>
                     <div className={s.mainSectionStatsItemSubtitle}>
                        AVERAGE TEMP.
                     </div>
                     <h4 className={s.mainSectionStatsItemTitle}>-138°c</h4>
                  </li>
               </ul>
            </div>
         </section>
      </div>
   );
}

export default App;
