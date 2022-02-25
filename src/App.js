import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import FooterSection from "./components/footer";
import NavBar from "./components/navBar";
import ToDo from "./components/todo";
import Catalog from "./components/catalog";
import Cart from "./components/cart";
import Admin from "./components/admin";

import GlobalState from "./store/globalState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// you don't have to put the .jsx after navBar
function App() {
  /* anything add to a function goes ahead of the return*/
  return (
    <div className="App">
      <GlobalState>
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>

        <FooterSection />
      </BrowserRouter>
      </GlobalState>

      {/* the FooterSection is an example of how to self close */}
    </div>
  );
}

export default App;
