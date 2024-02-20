import { Link } from "react-router-dom";

const Fields = () => {
  return (
    <div className="popular-fields">
      <h2 className="headline">Popularni Tereni</h2>

      <div className="popular-fields-grid">
        <div className="single-field field1">
          <h3 className="field-headline">Gladiator</h3>
        </div>
        <div className="single-field field2">
          <h3 className="field-headline">Classics</h3>
        </div>
        <div className="single-field field3">
          <h3 className="field-headline">Coin</h3>
        </div>
        <div className="single-field field4">
          <h3 className="field-headline">Enfield</h3>
        </div>
        <div className="single-field field5">
          <h3 className="field-headline">Fortis</h3>
        </div>
        <div className="single-field field6">
          <h3 className="field-headline">Imperia</h3>
        </div>
        <div className="single-field field7">
          <h3 className="field-headline">Južni</h3>
        </div>
        <div className="single-field field8">
          <h3 className="field-headline">Milvol</h3>
        </div>
        <div className="single-field field9">
          <h3 className="field-headline">Top Spin</h3>
        </div>
        <div className="single-field field10">
          <h3 className="field-headline">Zlatna Lopta</h3>
        </div>
      </div>

      <Link to="/fields" className="show-all-button">
        <button>Pokaži sve</button>
      </Link>
    </div>
  );
};

export default Fields;
