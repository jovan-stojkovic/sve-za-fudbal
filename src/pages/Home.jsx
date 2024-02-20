import { useState, useEffect } from "react";
import AboutUs from "../components/AboutUs";
import Fields from "../components/Fields";
import PopularClubs from "../components/PopularClubs";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <div className="photo-container">
        <div className="home-text-container">
          <h1 className={`main-headline ${isVisible ? "visible" : ""}`}>
            SVE ZA FUDBAL.
          </h1>
          <p className="title-desc">
            SVE VEZANO ZA NAJPOPULARNIJI SPORT NA SVETU NA JEDNOM MESTU.
            PRONAĐITE KLUB ZA SEBE ILI VAŠE DETE, PRONAĐITE BALON ZA FUDBAL I
            JOŠ MNOGO TOGA.
          </p>
        </div>
      </div>
      <div className="home-container">
        <PopularClubs />
        <Fields />
        <AboutUs />
      </div>
    </main>
  );
};

export default Home;
