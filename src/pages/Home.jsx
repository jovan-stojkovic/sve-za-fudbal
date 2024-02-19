const Home = () => {
  return (
    <main>
      <div className="photo-container">
        <div className="home-text-container">
          <h1 className="main-headline">SVE ZA FUDBAL.</h1>
          <p className="title-desc">
            SVE VEZANO ZA NAJPOPULARNIJI SPORT NA SVETU, NA JEDNOM MESTU.
            PRONAĐITE KLUB ZA SEBE ILI VAŠE DETE, PRONAĐITE BALON ZA FUDBAL I
            JOŠ MNOGO TOGA.
          </p>
        </div>
      </div>
      <div className="home-container">
        <div className="about-us">
          <h2 className="headline">O Nama</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, animi
            quos? Velit qui molestias doloremque eveniet, magnam exercitationem
            mollitia sapiente ratione nostrum sunt sed voluptates voluptatum
            expedita praesentium delectus tenetur. Debitis asperiores quam hic
            laudantium voluptas quis inventore explicabo! Sunt aliquid ducimus
            tempora assumenda repudiandae dolores a quos quo error animi, ut
            culpa reprehenderit illo.
          </p>
        </div>

        <div className="popular-clubs">
          <h2 className="headline">Popularni Klubovi</h2>
          <div className="single-club">
            <h3 className="club-headline">PFK Zarkovo</h3>
            <div className="logo-container club1"></div>
          </div>

          <div className="single-club">
            <h3 className="club-headline">Olimpik</h3>
            <div className="logo-container club2"></div>
          </div>

          <div className="single-club">
            <h3 className="club-headline">Dusanovac</h3>
            <div className="logo-container club3"></div>
          </div>

          <div className="single-club">
            <h3 className="club-headline">Fair Play</h3>
            <div className="logo-container club4"></div>
          </div>
        </div>

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
