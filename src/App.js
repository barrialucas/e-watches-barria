import React from "react";

import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";


export default function App() {
  return (
    <div>
    <Navbar />
    <ItemListContainer/>
    <ItemDetailContainer/>
    </div>
  );
};

