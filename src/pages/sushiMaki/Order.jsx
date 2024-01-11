import React, { useContext, useEffect, useState } from 'react';
import SubTittle from '../../components/SubTittle';
import OrderContext from './OrderContext';
import Tittle from '../../components/Tittle';
import Description from '../../components/Description';
import Message from '../../components/Message';

const MakeOrder = () => {
   const { msj } = useContext(OrderContext);
   return (
      <button className='makeOrder'
         onClick={e => {
            // console.log(msj())
            // console.log(msj()[1])
            // console.log(msj()[2])
            // window.location.href = msj()[2]
            window.open(msj()[1], '_blank');
         }}
      >
         Hacer Pedido
      </button>
   )
}
const OrderList = ({ fn }) => {
   const { stateComponentOrder, functionsOrder, paymentMethod, homeService } = useContext(OrderContext);
   const saurces = functionsOrder.getOrder()
   // console.log(saurces)
   if (saurces.length === 0) {
      setTimeout(() => {
         stateComponentOrder[1](false);
      }, 3000)
      return (<div className="orderList">
         <SubTittle>Porfavor seleccione algo</SubTittle>
      </div>)

   }
   return (
      <div className="orderList">
         <SubTittle>Orden</SubTittle>
         <main className='orderListCategories'>
            <p>Producto</p>
            <p>-</p>
            <p>Costo</p>
         </main>
         {saurces.map(e => {
            return (
               <main key={e.clase}>
                  <p>{e.name}</p>
                  <p>${e.price}.00-{e.pz}pz</p>
                  <p>$ {e.total}.00</p>
               </main>
            )
         })}
         <p className='ordenTotal'>Total:
            <b> $ {saurces
               .reduce((tot, sum) => tot + sum.total, 0)
            }.00</b>
         </p>
         <nav>
            <button onClick={() => {
               fn("homeService")
               homeService[1](true)
            }}>Servicio A domicilio</button>
            <button onClick={() => {
               fn("inRestaurant")
               homeService[1](false)
            }}>Recoger en Restaurante</button>
         </nav>
         <Message>* El costo de servicio a domicilio es de $30</Message>
      </div>
   )
}
const HomeService = ({ fn }) => {
   const { paymentMethod, customer } = useContext(OrderContext);
   const [form, setForm] = useState({
      Nombre: "",
      Direccion: "",
      Referencia: ""
   })
   const change = (e) => {
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }
   return (
      <div className="homeService">
         <SubTittle>Servicio a Domicilio</SubTittle>
         <form>
            <section>
               <label>Nombre</label>
               <input type="text" name='Nombre' onChange={(e) => { change(e) }} required />
            </section>
            <section>
               <label>Direccion</label>
               <textarea name='Direccion' onChange={(e) => { change(e) }} required></textarea>
            </section>
            <section>
               <label>Referencias</label>
               <textarea name='Referencia' onChange={(e) => { change(e) }} required></textarea>
            </section>
            <div>
               <p>Metodo de pago:</p>
               <div>
                  <button type='button' onClick={() => {
                     fn("transfer")
                     customer[1](form)
                     paymentMethod[1]("*Transferencia*. ")
                  }}>Transferencia</button>
                  <button type='button' onClick={() => {
                     fn("cash")
                     customer[1](form)
                     paymentMethod[1]("*Efectivo*. ")
                  }}>Efectivo</button>
               </div>
               <Message>Por favor al terminar su orden, mandar su ubicación mediante WhatsApp</Message>
            </div>
         </form>
      </div>
   )
}
const Transfer = ({ fn }) => {
   const { dataDeposit } = useContext(OrderContext);
   const { name, bank, count } = dataDeposit()
   return (
      <div className="transfer">
         <SubTittle>Pago por deposito</SubTittle>
         <div>
            <p>Puede depositarnos al numero de cuenta: <b>{count}</b></p>
            <p>A nombre de: <b>{name}</b></p>
            <p>Por el banco: <b>{bank}</b></p>
         </div>
         <MakeOrder />
      </div>
   )
}
const Cash = ({ fn }) => {
   const { paymentMethod } = useContext(OrderContext);
   const [form, setForm] = useState({
      cash: "",
   })
   const change = (e) => {
      paymentMethod[1](`*Efectivo*. Pagare con $${e.target.value}`)
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }
   return (
      <div className="cash">
         {/* <SubTittle>Pago en efectivo</SubTittle> */}
         <SubTittle>Su pedido ya casi finaliza</SubTittle>
         <Description>
            <h3 style={{ marginTop: '.8rem', fontWeight: '300' }}>
               Escriba la cantidad con la que pagara
            </h3>
         </Description>
         <form>
            <section>
               <label>Si pagara con cambio escriba el total exacto</label>
               <input type="tel" name='cash' onChange={(e) => { change(e) }} placeholder='200.00' />
            </section>
            <MakeOrder />
         </form>
      </div>
   )
}
const InRestaurant = ({ fn }) => {
   const { paymentMethod } = useContext(OrderContext);

   const [form, setForm] = useState({
      time: "",
   })
   const change = (e) => {
      paymentMethod[1](`*Recojo en el restaurante*, a las ${e.target.value}`)
      setForm({
         ...form,
         [e.target.name]: `*Recojo en el restaurante*, a las ${e.target.value}`
      })
   }
   return (
      <div className="inRestaurant">
         <SubTittle>Su pedido ya casi finaliza</SubTittle>
         <form>
            <section>
               <label>¿A qué hora llegaría al restaurante?</label>
               <input type="time" name='time' onChange={(e) => { change(e) }} />
            </section>
            <MakeOrder />
         </form>
      </div>
   )
}

/*
   1.- order - OrderList
   2.- homeService - HomeService
   3.- inRestaurant - InRestaurant
   4.- transfer - Transfer
   5.- cash - Cash
*/

const Order = () => {
   const array = [
      { name: "order", component: <OrderList /> },
      { name: "homeService", component: <HomeService /> },
      { name: "inRestaurant", component: <InRestaurant /> },
      { name: "transfer", component: <Transfer /> },
      { name: "cash", component: <Cash /> }
   ]
   const { stateComponentOrder,
      functionsOrder,
      paymentMethod,
   } = useContext(OrderContext);

   const [actMenu, setactMenu] = useState("order")

   return (
      <div className={`AddOrder order`}
         style={{ display: `${stateComponentOrder[0] ? "block" : "none"}` }}
      >
         <div className='orderContaint'
            onClick={e => {
               if (e.target.className === 'orderContaint') {
                  if (actMenu === "order") { stateComponentOrder[1](false) }
                  if (actMenu === "homeService" || actMenu === "inRestaurant") { setactMenu("order") }
                  if (actMenu === "transfer" || actMenu === "cash") { setactMenu("homeService") }
               };
            }}>
            <nav className="orderComponents">
               {/* <h3>{actMenu} - {paymentMethod[0]}</h3> */}
               {((actMenu === "order") ? <OrderList fn={setactMenu} />
                  : (actMenu === "homeService") ? <HomeService fn={setactMenu} />
                     : (actMenu === "inRestaurant") ? <InRestaurant fn={setactMenu} />
                        : (actMenu === "transfer") ? <Transfer fn={setactMenu} />
                           : <Cash fn={setactMenu} />
               )}
               {/* <HomeService fn={setactMenu} /> */}
               {/* <OrderList fn={setactMenu} /> */}
               {/* <Transfer fn={setactMenu} /> */}
               {/* <Cash fn={setactMenu} /> */}
               {/* <InRestaurant fn={setactMenu} /> */}
            </nav>
         </div>
      </div>
   );
}

export default Order;
