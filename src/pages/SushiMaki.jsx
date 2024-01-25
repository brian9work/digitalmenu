import React, { useState, useContext, useReducer } from 'react';
import Tittle from '../components/Tittle';
import AddOrder from './sushiMaki/AddOrder';
// import sushi from '../data/sushi.json'
import Order from './sushiMaki/Order';
import OrderContext from './sushiMaki/OrderContext';
import Data from './sushiMaki/Data';
import '../styles/colorsSushiMaki.css'
import '../styles/sushiMaki.css'
import background from '../assets/backgroundSushiMaki.jpg'
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

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
   const socialMedia=[
      {link:"https://www.facebook.com/Sushi-Maki-102777895258722/",color:"#1e1eff",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>},
      {link:"https://open.spotify.com/playlist/6Fs2pVUGYxwbPNE6kPglxj?si=WI5wOvEpSXWVNCAKAMXVWw&utm_source=whatsapp",color:"#1db954",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path></svg>},
      {link:"https://instagram.com/sushi_makiii?igshid=YmMyMTA2M2Y=",color:"#ff0090",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg>},
   ]
   const {
         stateComponentOrder
      } = useContext(OrderContext);

   return (
      <div className='container'>
         <div className="background">
            <img src={background} alt="sushi Maki" />
         </div>
         <SocialMedia data={socialMedia} />
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
         <Footer></Footer>
      </div>
   )
}

export default SushiMaki;
