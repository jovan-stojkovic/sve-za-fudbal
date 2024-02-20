import { Link } from "react-router-dom";

const PopularClubs = () => {
  return (
    <div className="popular-clubs">
      <h2 className="headline">Popularni Klubovi</h2>

      <div className="popular-clubs-grid">
        <div className="single-club">
          <h3 className="club-headline">PFK Žarkovo</h3>
          <div className="single-club-logo-container club1"></div>
        </div>

        <div className="single-club">
          <h3 className="club-headline">Olimpik</h3>
          <div className="single-club-logo-container club2"></div>
        </div>

        <div className="single-club">
          <h3 className="club-headline">Dušanovac</h3>
          <div className="single-club-logo-container club3"></div>
        </div>

        <div className="single-club">
          <h3 className="club-headline">Fair Play</h3>
          <div className="single-club-logo-container club4"></div>
        </div>

        <div className="single-club">
          <h3 className="club-headline">Atacante</h3>
          <div className="single-club-logo-container club5"></div>
        </div>

        <div className="single-club">
          <h3 className="club-headline">PFK Žarkovo</h3>
          <div className="single-club-logo-container club1"></div>
        </div>

        <div className="single-club">
          <h3 className="club-headline">Olimpik</h3>
          <div className="single-club-logo-container club2"></div>
        </div>

        <div className="single-club">
          <h3 className="club-headline">Dušanovac</h3>
          <div className="single-club-logo-container club3"></div>
        </div>

        <div className="single-club">
          <h3 className="club-headline">Fair Play</h3>
          <div className="single-club-logo-container club4"></div>
        </div>

        <div className="single-club">
          <h3 className="club-headline">Atacante</h3>
          <div className="single-club-logo-container club5"></div>
        </div>
      </div>

      <Link to="/clubs" className="show-all-button">
      <button>Pokaži sve</button>
      </Link>
    </div>
  );
};

export default PopularClubs;
