import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
