import React, { useEffect, useContext } from 'react';
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
         let input = document.getElementById("addOrder");
         if (/[1-9]{1,3}$/.test(input.value)) {
            const component = document.querySelector("." + getSaurceSelected());
            component.classList.replace("active", "order-active")
            component.dataset.pz = input.value;
            functionsOrder.setOrder(component.dataset)
            component.querySelector("b").innerHTML = input.value
            stateComponentAddSaurce[1]("0")
         } else {
            alert("Por favor escoja un valor valido")
         }
         input.value = ""
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
         <form className='form'>
            <SubTittle>Agrega un pedido</SubTittle>
            <section>
               <Description>¿Cuantas pz desea pedir?</Description>
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
