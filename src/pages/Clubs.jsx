import { Dropdown } from "primereact/dropdown";
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
        <div className={`search-form ${isVisible ? "visible" : ""}`}></div>
      </div>
    </div>
  );
};

export default Clubs;
