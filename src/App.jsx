import "./Styles.scss";
import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeContext from "./helpers/ThemeContext";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />

      </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;
