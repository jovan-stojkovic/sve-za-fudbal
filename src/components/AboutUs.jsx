import { useState } from "react";

const AboutUs = () => {
  const [showQuestion, setShowQuestion] = useState("");
  const [sent, setSent] = useState("");

  const handleQuestionButton = () => {
    setShowQuestion(showQuestion === "" ? "show" : "");
  };

  const handleSendButton = () => {
    setSent("sent");
  };

  return (
    <>
      <div className="about-us">
        <div className="about-us-image">
          <div className="about-us-image-container"></div>
        </div>
        <div className="about-us-container">
          <h2 className="headline">O Nama</h2>
          <div className="about-us-text">
            <p>
              Cela ideja je uvek bila da se sve što Vas interesuje vezano za
              fudbal grupiše na jednom mestu. Tu smo da Vam pomognemo da
              pronađete najbolju školu fudbala ili fudbalski klub za Vaše dete,
              jer možda baš u Vašem kraju postoji klub, a da niste ni znali. Kao
              ljudi koji su u fudbalu preko deset godina, tačno znamo kako da
              Vam pomognemo da pronađete baš ono što možda niste ni znali da Vam
              treba.
            </p>
            <p>
              Takođe, ukoliko biste sa prijateljima odigrali fudbal, a niste
              sigurni gde, ovde ćete pronaći sve informacije o terenima i
              balonima u Vašem okruženju.
            </p>
            <p>
              Pored toga, možete pronaći informacije o amaterskim ligama,
              turnirima i još mnogo toga.
            </p>
            <p>
              Trudili smo se da pretragu učinomo što lakšom za upotrebu, a ako i
              pored toga imate bilo kakva pitanja, tu smo. Možete nas pronaći na
              svim platformama i turdićemo se da Vam odgovorimo u najkraćem
              roku.
            </p>
          </div>
          <button onClick={handleQuestionButton}>Postavite pitanje</button>

          <div className={`question-div ${showQuestion}`}>
            <div className={`question-container ${sent}`}>
              <input
                type="email"
                placeholder="Vaše email adresa"
                className="question-name-input"
              />
              <p className="error-p email-error">
                Molim Vas upišite Vašu email adresu
              </p>
              <textarea
                placeholder="Postavite pitanje"
                className="question-area"
                cols="10"
                rows="6"
              ></textarea>
              <p className="error-p question-error">Polje ne sme biti prazno</p>
              <button className="question-submit" onClick={handleSendButton}>
                Pošalji
              </button>
              <button id="close" onClick={handleQuestionButton}>
                <img
                  src="https://www.iconbolt.com/iconsets/charm-icons/cross.svg"
                  alt="x"
                />
              </button>
            </div>
            <div className={`question-success ${sent}`}>
              <div className="success-img-container"></div>
              <p className="question-success-p">
                Pitanje je prosleđeno našem timu. Očekujte odgovor u najkraćem
                roku!
              </p>
              <button className="question-close" onClick={handleQuestionButton}>Zatvori</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
