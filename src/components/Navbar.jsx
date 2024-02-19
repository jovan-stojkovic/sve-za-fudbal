import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState("");
  const [showList, setShowList] = useState(false);

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

  return (
    <>
      <nav className={scrolled}>
        <div className="nav-container">
          <div className="logo-container">
            <a href="/">
              <div className="logoimg-container"></div>
            </a>
            <h1 className="logo-headline">sve za fudbal.</h1>
          </div>

          <div className="navbar-right">
            <div className="navbar-links">
              <Link className="nav-l">O Nama</Link>
              <Link className="nav-l">Klubovi</Link>
              <Link className="nav-l">Baloni</Link>
              <div
                id="ostalo"
                onMouseEnter={show}
                onMouseLeave={show}
              >
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
              <button className="language-button">
                <img src="./src/assets/flags/SRB.png" alt="SRB" />
              </button>
              <button className="theme-button">
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
