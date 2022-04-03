import React from "react";

import Navbar from "./components/navbar/Navbar";
import ItemDetailContainer from "./components/ItemsDetail/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>

        <Route path="/brand/:brandId" element={<ItemListContainer/>}/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
        <Route path="/Cart" element={<Cart/>} />

        <Route path="*" element={ <Navigate to="/"/>}/>
      </Routes>
      
    </BrowserRouter>
  );
};

