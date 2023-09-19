import "./App.css";
import Home from "./Components/Home";
import Servicos from "./Components/Servicos";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-PXG4FM9B'
}
TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Servicos />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
