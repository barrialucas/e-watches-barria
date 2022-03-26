import React,{useState} from "react";
import Item from "./Item";

import casio1 from "../img/casio1.jpg";
import citizen from "../img/citizen.jpg";
import edox from "../img/edox.jpg";
import bering from "../img/bering.jpg";

let relojesArr=[{
    name:"Casio A168wg Retro Vintage Gold",
    price:18500,
    img:casio1,
    stock:4,
    initial:0,
},
{
    name:"Citizen Eco-Drive Endeavor ",
    price:34000,
    img:citizen,
    stock:2,
    initial:0,
},
{
    name:"Edox Grand Ocean Black Dial",
    price:57000,
    img:edox,
    stock:1,
    initial:0,
},
{
    name:"Bering Classic Blue Sun Ray Dial",
    price:14000,
    img:bering,
    stock:6,
    initial:0,
},
{
    name:"Casio A168wg Retro Vintage Gold",
    price:18500,
    img:casio1,
    stock:3,
    initial:0,
}];


const ItemList=()=>{
    const [mostrar, setMostrar] = useState(null)
    const promesa= new Promise((resolve, reject)=>{
        setTimeout(function(){  
            if (true){
                resolve(
                <div className="row container-fluid justify-content-center">
            {
            relojesArr.map((item)=>(
            <Item name={item.name} price={item.price} stock={item.stock} img={item.img} initial={item.initial} />
            ))}
        </div>)
            }else {
                reject(`hay un error`)
            }
        },);
    })
    promesa.then(
        (resolve=>{
           setMostrar(resolve)
        })
    )
    return(mostrar)
    
}



export default ItemList;