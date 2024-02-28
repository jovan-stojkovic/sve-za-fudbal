import { useState, useEffect } from "react";

const Clubs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="clubs">
      <div className="photo-container">
        <div className={`search-form ${isVisible ? "visible" : ""}`}>
          <div className="search-club">
            <label htmlFor="search">Pretraga po imenu</label>
            <input type="text" placeholder="Pretraga..." id="search" />
          </div>

          <div className="city-part">
            <button className="city-part-selector">Opstina</button>
            <div className="city-parts">
              <label htmlFor="cukarica">Čukarica</label>
              <input type="radio" name="Čukarica" id="cukarica" />
              <label htmlFor="rakovica">Rakovica</label>
              <input type="radio" name="Rakovica" id="rakovica" />
              <label htmlFor="novi-beograd">Novi Beograd</label>
              <input type="radio" name="Novi Beograd" id="novi-beograd" />
              <label htmlFor="palilula">Palilula</label>
              <input type="radio" name="Palilula" id="palilula" />
              <label htmlFor="vracar">Vračar</label>
              <input type="radio" name="Vračar" id="vracar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
