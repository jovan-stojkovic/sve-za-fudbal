import { useState, useEffect } from "react";
import AboutUs from "../components/AboutUs";
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
        <AboutUs />

        <div className="popular-fields">
          <h2>Popularni Baloni</h2>

          <div className="single-field">
            <h3 className="club-headline">SC Gladiator</h3>
            <div className="logo-container field1"></div>
          </div>

          <div className="single-field">
            <h3 className="club-headline">El Maestro</h3>
            <div className="logo-container field2"></div>
          </div>

          <div className="single-field">
            <h3 className="club-headline">SC Aleksandar</h3>
            <div className="logo-container field3"></div>
          </div>

          <div className="single-field">
            <h3 className="club-headline">FK Lokomotiva</h3>
            <div className="logo-container field4"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
