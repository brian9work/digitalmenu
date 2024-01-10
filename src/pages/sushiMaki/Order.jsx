import React, { useContext, useEffect, useState } from 'react';
import SubTittle from '../../components/SubTittle';
import OrderContext from './OrderContext';

const OrderList = () => {
   const{functionsOrder} = useContext(OrderContext);
   const [total,setTotal] = useState(0)
   console.log(functionsOrder.getOrder())
   return (
       <div className="orderList">
           <SubTittle>Orden</SubTittle>
           <main className='orderListCategories'>
               <p>Producto</p>
               <p>-</p>
               <p>Costo</p>
           </main>
           {functionsOrder.getOrder().map(e =>{
               return (
                   <main key={e.clase}>
                       <p>{e.name}</p>
                       <p>${e.price}.00-{e.pz}pz</p>
                       <p>$ {e.total}.00</p>
                   </main>
               )
           })}
           <p className='ordenTotal'>Total: 
               <b> $ {
                  functionsOrder.getOrder().reduce((tot, sum) =>tot + sum.total, 0)
               }.00</b>
           </p>
       </div>
   )




   {/*
   // const {order, addToOrder} = useContext(OrderContext)



   // const [obtener,setobtener] = useState([])
   // const [total, setTotal] = useState(0)
   // useEffect(()=>{
   //     const elements = document.querySelectorAll(".order-active")
   //     let arr = []
   //     elements.forEach(e => {
   //         arr.push({
   //             name: e.dataset.name,
   //             price: e.dataset.price,
   //             pz: e.dataset.pz,
   //             total: parseInt(e.dataset.price) * parseInt(e.dataset.pz)
   //         })
   //     });
   //     setobtener(arr)
   // },[])
   // return (
   //     <div className="orderList">
   //         <SubTittle text={"Orden"} />
   //         <main className='orderListCategories'>
   //             <p>Producto</p>
   //             <p>-</p>
   //             <p>Total</p>
   //         </main>
   //         {obtener.map(e =>{
   //             return (
   //                 <main key={e.name}>
   //                     <p>{e.name}</p>
   //                     <p>${e.price}.00-{e.pz}pz</p>
   //                     <p>$ {e.total}.00</p>
   //                 </main>
   //             )
   //         })}
   //         <p className='ordenTotal'>Total: 
   //             <b>$ {obtener.reduce((total, i) => total + i.total, 0)}.00</b>
   //             <b>$ {obtener.reduce((total, i) => total + i.total, 0)}.00</b>
   //             <b>0</b>
   //         </p>
   //     </div>
   // )
   */}
}

const Order = () => {
   const{stateComponentOrder,
         functionsOrder
      } = useContext(OrderContext);

   return (
      // <div className={`AddOrder order ${actOrder ? "bounceInDown" : "bounceOutUp"}`}
      <div className={`AddOrder order`}
         // style={{ transform: `scale(${actOrder ? 1 : 0})` }}
         style={{ display: `${stateComponentOrder[0] ? "block" : "none"}` }}
         // style={{ display: `block` }}
      // >
      >
         {/* <img src="https://calpulalpan-sushi.onrender.com/background.jpg" alt="" /> */}
         <div className='orderContaint'
            onClick={e => {
               if (e.target.className === 'orderContaint') {
                  stateComponentOrder[1](false)
               };
            }}>
            <nav className="orderComponents">
               <OrderList />
               <div>
                        <SubTittle text={"Orden"} />
                    </div>
            </nav>
         </div>
      </div>
   );
}

export default Order;
