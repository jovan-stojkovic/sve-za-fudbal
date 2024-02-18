import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo-container">
            <a href="/">
              <img
                src="https://www.iconbolt.com/iconsets/hawcons-filled/soccer-court.svg"
                alt="Footbal Field"
              />
            </a>
            <h1 className="logo-headline">sve za fudbal.</h1>
          </div>

          <div className="navbar-links">
            <Link>O Nama</Link>
            <Link>Škole Fudbala</Link>
            <Link>Baloni za Fudbal</Link>
            <Link>Ostalo</Link>
          </div>

          <div className="navbar-buttons">
            <button className="language-button">
              <img src="./src/assets/flags/SRB.png" alt="SRB" />
            </button>
            <button className="theme-button">
              <img
                src="https://www.iconbolt.com/iconsets/weather-color/sun-sunny-temperature-weather.svg"
                alt="Sun"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
