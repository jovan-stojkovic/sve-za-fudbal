import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const serbianFlag = "./src/assets/flags/SRB.png";
  const englishFlag = "./src/assets/flags/ENG.png";
  const russianFlag = "./src/assets/flags/RUS.png";

  const [scrolled, setScrolled] = useState("");
  const [showList, setShowList] = useState(false);
  const [language, setLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("SRB");
  const [flag, setFlag] = useState(serbianFlag);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setScrolled("scroll");
      } else {
        setScrolled("");
      }
    });
  }, []);

  const show = () => {
    setShowList(showList === false ? true : false);
  };

  const showLanguage = () => {
    setLanguage(language === false ? true : false);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  useEffect(() => {
    if (selectedLanguage === "SRB") {
      setFlag(serbianFlag);
    } else if (selectedLanguage === "ENG") {
      setFlag(englishFlag);
    } else if (selectedLanguage === "RUS") {
      setFlag(russianFlag);
    }
  }, [selectedLanguage]);

  const scrollToPosition = () => {
    window.scrollTo({
      top: 1932,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav className={scrolled}>
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/">
              <div className="logoimg-container"></div>
            </Link>
            <h1 className="logo-headline">sve za fudbal.</h1>
          </div>

          <div className="navbar-right">
            <div className="navbar-links">
              <Link className="nav-l" onClick={() => scrollToPosition()}>
                O Nama
              </Link>
              <Link className="nav-l">Klubovi</Link>
              <Link className="nav-l">Baloni</Link>
              <div id="ostalo" onMouseEnter={show} onMouseLeave={show}>
                <div className="navbar-link-container">
                  <p className="link">Ostalo</p>

                  <div
                    className={`hidden-div ${showList === true ? "show" : ""}`}
                  >
                    <div className="hidden-container">
                      <Link>Dečije Lige</Link>
                      <Link>Amaterske Lige</Link>
                      <Link>Dečiji Turniri</Link>
                      <Link>Amaterski Turniri</Link>
                      <Link>Kampovi i Pripreme</Link>
                      <Link>Individualni Rad</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar-buttons">
              <div
                className="language-button navbar-button"
                onMouseEnter={showLanguage}
                onMouseLeave={showLanguage}
              >
                <img src={flag} alt={selectedLanguage} />

                <div
                  className={`hidden-language-div ${
                    language === true ? "show" : ""
                  }`}
                >
                  <form className="hidden-language-container">
                    <label className="option option1">
                      <input
                        id="serbian"
                        type="radio"
                        value="SRB"
                        checked={selectedLanguage === "SRB"}
                        onChange={() => handleLanguageChange("SRB")}
                      />
                      <img src="./src/assets/flags/SRB.png" alt="SRB" />
                      <p className="language">Srpski</p>
                    </label>

                    <label className="option option2">
                      <input
                        id="english"
                        type="radio"
                        value="ENG"
                        checked={selectedLanguage === "ENG"}
                        onChange={() => handleLanguageChange("ENG")}
                      />
                      <img src="./src/assets/flags/ENG.png" alt="ENG" />
                      <p className="language">English</p>
                    </label>

                    <label className="option option3">
                      <input
                        id="russian"
                        type="radio"
                        value="RUS"
                        checked={selectedLanguage === "RUS"}
                        onChange={() => handleLanguageChange("RUS")}
                      />
                      <img src="./src/assets/flags/RUS.png" alt="RUS" />
                      <p className="language">Русский</p>
                    </label>
                  </form>
                </div>
              </div>
              <button className="theme-button navbar-button">
                <img
                  src="https://www.iconbolt.com/iconsets/fluent-emoji-flat/sun.svg"
                  alt="Sun"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
