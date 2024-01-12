import React, { useState, useContext, useReducer } from 'react';
import Tittle from '../components/Tittle';
import AddOrder from './sushiMaki/AddOrder';
// import sushi from '../data/sushi.json'
import Order from './sushiMaki/Order';
import OrderContext from './sushiMaki/OrderContext';
import Data from './sushiMaki/Data';
import '../styles/colorsSushiMaki.css'
import '../styles/sushiMaki.css'

const SushiMaki = ()=>{
   const initialState = {
     order: [],
     saurceSelected:false,
   }
   const [state, dispatch] = useReducer(<div><h1>OrderReducer</h1></div>,initialState)
   
   const setSaurceSelected = (bool) =>{ state.saurceSelected = bool};
   const getSaurceSelected = () =>{ return state.saurceSelected};

   const stateComponentAddSaurce = useState("0");
   const stateComponentOrder = useState(false);
   const homeService = useState(false);
   const paymentMethod = useState("vacio");
   const customer = useState({});

   const searchOrder = obj =>{}
   const eliminarOrder = clase => {state.order = state.order.filter(m => m.clase!==clase ); }
   const setOrder = obj => {
      state.order.push({
         ...obj,
         total: parseInt(obj.pz) * parseInt(obj.price)
      });
   }
   const dataDeposit= ()=>{
      return {
         count:"4152 3141 4736 7745",
         name:"Emmanuel Roldan",
         bank: "BBVA"
        }
   }
   const msj = ()=>{
      const info={
         homeServiceCost:30,
         paymentMethod:`Metodo de pago: ${paymentMethod[0]}`,
         ...customer[0],
         homeService:homeService[0],
         phone: 527491060297,
         address:`*Direccion:* ${customer[0].Direccion}, *Referencia:* ${customer[0].Referencia}, *A nombre de:* ${customer[0].Nombre}.`,
         link: `https://api.whatsapp.com/send?phone=${"527491060297"}&text=Hola+me+gustaria+ordenar:`,
         orderSaurces: (state.order.map(s => `${s.pz}pz de ${s.name}` )).toString()+", ",
         total:state.order.reduce((tot,sum) =>tot+sum.total,0),
         s:state.order
      }
      const mensaje=`${info.orderSaurces} ${info.homeService ? info.address : ""} *Total a pagar:* $ ${info.total+(info.homeService ? info.homeServiceCost : 0)}.00. ${info.paymentMethod}`

      const link=info.link+info.orderSaurces+(info.homeService ? info.address : "")+(info.total+(info.homeService ? info.homeServiceCost : 0))+info.paymentMethod
      return [info, link, info.link+encodeURIComponent(mensaje),mensaje]
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
         },
         dataDeposit,
         paymentMethod:paymentMethod,
         customer:customer,
         msj:msj,
         homeService:homeService,
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
            <Data />
            <button
               className='btnOrdenar'
               type="button"
               onClick={() => {
                  stateComponentOrder[1](true)
               }}
            >Ordenar</button>
         </div>
      </div>
   )
}

export default SushiMaki;
