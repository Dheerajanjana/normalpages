import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services"
import "./style/App.css";
import "./style/Header.css";
import "./style/home.css";
import "./style/footer.css";
import "./style/contact.css";
import "./style/mediaquery.css"
function App() {
  return (<>
    
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />

        </Routes>
          <Footer />
      </Router>
    
      </>);
}

export default App;
