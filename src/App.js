import './App.css';
import About from './components/about';
import FooterSection from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.min.js"; 

import NavBar from "./components/navBar";
import QuantityPicker from "./components/quantityPicker";
import Catalog from './components/catalog';
// you don't have to put the .jsx after navBar
function App() {
  {/* anything add to a function goes ahead of the return*/}
  return (
    <div className="App">
      <NavBar></NavBar>
      <About />
      <Catalog/>
      <FooterSection />
      {/* the FooterSection is an example of how to self close */}
    </div>
  );
}

export default App;
