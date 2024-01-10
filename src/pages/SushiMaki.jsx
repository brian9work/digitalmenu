import React, { useState, createContext, useEffect, useContext, useReducer } from 'react';
import Tittle from '../components/Tittle';
import AddOrder from './sushiMaki/AddOrder';
import sushi from '../data/sushi.json'
import Section from './sushiMaki/Section';
import Order from './sushiMaki/Order';
import OrderContext from './sushiMaki/OrderContext';

const SushiMaki = ()=>{
   const initialState = {
     order: [],
     selectedSaucer: null,
     saucers: [],
     saurceSelected:false,
     menu:[],
   }
   const [state, dispatch] = useReducer(<div><h1>OrderReducer</h1></div>,initialState)
   
   const setSaurceSelected = (bool) =>{ state.saurceSelected = bool};
   const getSaurceSelected = () =>{ return state.saurceSelected};

   const stateComponentAddSaurce = useState("0");
   const stateComponentOrder = useState(false);

   const searchOrder = obj =>{
      // return state.order.filter(ord => ord.className === obj.className)
   }
   
   const eliminarOrder = clase => {
      state.order = state.order.filter(m => m.clase!==clase ); 
   }
   const setOrder = obj => {
      state.order.push({
         ...obj,
         total: parseInt(obj.pz) * parseInt(obj.price)
      });
   }
   const getOrder = () => {return state.order; }

   return (
      <OrderContext.Provider value={{
         saurceSelected:state.saurceSelected,
         setSaurceSelected,
         getSaurceSelected,
         stateComponentAddSaurce:stateComponentAddSaurce,
         stateComponentOrder:stateComponentOrder,
         functionsOrder:{
            searchOrder,
            eliminarOrder,
            setOrder,
            getOrder
         }
      }}>
         <Index />
      </OrderContext.Provider>
   )
}


const Index = () => {
   const {
         stateComponentOrder
      } = useContext(OrderContext);

   return (
      <div className='container'>
         <div className="background">
            <img src="https://calpulalpan-sushi.onrender.com/background.jpg" alt="" />
         </div>
         <Order />
         <AddOrder />
         <div className="content">
            <Tittle
               source={"https://calpulalpan-sushi.onrender.com/img_logo.png"}
               text={"Sushi Maki"}
               type={"imagens"}
               color={"#fff"}
            />
            <div className="data">
               {sushi.data.map(s => {
                  return (
                     <Section
                        key={s.name.replaceAll(" ", "")}
                        data={s}
                     />)
               })}
            </div>
            <button
               className='btnOrdenar'
               type="button"
               onClick={e => {
                  stateComponentOrder[1](true)
               }}
            >Ordenar</button>
         </div>
      </div>
   )
}

export default SushiMaki;
