import s from "./App.module.scss";
import planet from "./assets/planet-mercury.svg";
// import planet from "./assets/planet-saturn.svg";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import MobileTabs from "./components/MobileTabs/MobileTabs";
import { useAppSelector } from "./store/hooks";
import { PlanetType } from "./store/planetsSlice";
import InfoBlock from "./components/InfoBlock/InfoBlock";

const tabs = [
   { id: 0, color: "", mobileTitle: "OVERVIEW", desctopTitle: "OVERVIEW" },
   {
      id: 1,
      color: "",
      mobileTitle: "Structure",
      desctopTitle: "Internal Structure",
   },
   {
      id: 2,
      color: "",
      mobileTitle: "Surface",
      desctopTitle: "Surface Geology",
   },
];

function App() {
   const { planets } = useAppSelector((state) => state.planet);
   const [activePlanet, setActivePlanet] = useState("Mercury");
   const [activeTab, setActiveTab] = useState(0);
   const [singlePlanet, setSinglePlanet] = useState<PlanetType | null>(null);

   useEffect(() => {
      console.log(singlePlanet);
      planets.find((planet) =>
         planet.name === activePlanet ? setSinglePlanet(planet) : null
      );
      setActiveTab(0)
   }, [activePlanet]);
   
   return (
      <div className={s.wrapper}>
         <Header
            planets={planets}
            setActivePlanet={setActivePlanet}
            activePlanet={activePlanet}
         />

         <section className={s.mainSection}>
            <MobileTabs
               setActiveTab={setActiveTab}
               activeTab={activeTab}
               tabs={tabs}
               mainColor={singlePlanet?.mainColor}
            />
            <div className={s.mainSectionContainer}>
               <div className={s.mainSectionImageBlock}>
                  {singlePlanet ? (
                     <img
                        src={
                           process.env.PUBLIC_URL + singlePlanet.images.planet
                        }
                        alt={singlePlanet?.name}
                     />
                  ) : (
                     "Loading"
                  )}
               </div>
               <InfoBlock activeTab={activeTab} activePlanet={activePlanet} singlePlanet={singlePlanet} />
               <Tabs
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                  tabs={tabs}
                  mainColor={singlePlanet?.mainColor}
               />
               <ul className={s.mainSectionStatsBlock}>
                  <li className={s.mainSectionStatsItem}>
                     <div className={s.mainSectionStatsItemSubtitle}>
                        ROTATION TIME
                     </div>
                     <h4 className={s.mainSectionStatsItemTitle}>
                        {singlePlanet?.rotation}
                     </h4>
                  </li>
                  <li className={s.mainSectionStatsItem}>
                     <div className={s.mainSectionStatsItemSubtitle}>
                        REVOLUTION TIME
                     </div>
                     <h4 className={s.mainSectionStatsItemTitle}>
                        {singlePlanet?.revolution}
                     </h4>
                  </li>
                  <li className={s.mainSectionStatsItem}>
                     <div className={s.mainSectionStatsItemSubtitle}>
                        radius
                     </div>
                     <h4 className={s.mainSectionStatsItemTitle}>
                        {singlePlanet?.radius}
                     </h4>
                  </li>
                  <li className={s.mainSectionStatsItem}>
                     <div className={s.mainSectionStatsItemSubtitle}>
                        AVERAGE TEMP.
                     </div>
                     <h4 className={s.mainSectionStatsItemTitle}>
                        {singlePlanet?.temperature}
                     </h4>
                  </li>
               </ul>
            </div>
         </section>
      </div>
   );
}

export default App;
