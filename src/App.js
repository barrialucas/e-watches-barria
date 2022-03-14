import React from "react";
/* import logo from "./logo.svg"; */
import CompNav from "./components/Navbar";
import ItemList from "./components/ItemListContainer";
import "./App.css";


function App() {
  return (
    <div>
    <CompNav />
    <ItemList titulo="proximamente!"/>
    </div>
  );
}

export default App;
