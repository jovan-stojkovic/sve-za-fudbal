import "./Styles.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
  <Router>
      <Navbar />
      <Home />
      </Router>
  );
};

export default App;
