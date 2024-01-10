import React, { useState, useEffect, useContext } from 'react';
import SubTittle from '../../components/SubTittle';
import Description from '../../components/Description';
import OrderContext from './OrderContext';

const AddOrder = () => {
   const { getSaurceSelected,
           stateComponentAddSaurce,
           functionsOrder
         } = useContext(OrderContext);
   const order = (e) => {
      try {
         let input = document.getElementById("addOrder").value;
         if (/[1-9]{1,3}$/.test(input)) {
            const component = document.querySelector("." + getSaurceSelected());
            component.classList.replace("active", "order-active")
            component.dataset.pz = input;
            functionsOrder.setOrder(component.dataset)
            component.querySelector("b").innerHTML = input
            stateComponentAddSaurce[1]("0")
            input = ""
         } else {
            alert("Por favor escoja un valor valido")
         }
      } catch (error) {
         console.log(error);
      }
   }
   useEffect(() => {

   }, [])
   return (
      <div className='AddOrder'
         style={{ transform: `scale(${stateComponentAddSaurce[0]})` }}
         onClick={e => {
            if (e.target.className === 'AddOrder') {
               stateComponentAddSaurce[1]("0")
            }
         }}
      >
         <form>
            <SubTittle text={"Agrega un pedido"} />
            <section>
               <Description text={"¿Cuantas ordenes desea pedir?"} />
               <input
                  id='addOrder'
                  type="tel"
                  placeholder="Ejemplo: 5" />
               <button
                  onClick={e => { order(e) }}
                  type="click">Agregar</button>
            </section>
         </form>
      </div>
   );
}

export default AddOrder;
