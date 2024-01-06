import React, { useState, useEffect } from 'react';
import SubTittle from './SubTittle';
import Description from './Description';
import Storage from '../storage/Storage';
import { useParams } from 'react-router-dom';

const AddOrder = ({ classActive, addOrder, setaddOrder }) => {
    const order = (e) => {
        try {
            let input = document.getElementById("addOrder");
            if (/[1-9]{1,3}$/.test(input.value)) {
                const component = document.querySelector("." + classActive);
                component.classList.replace("active","order-active")
                component.dataset.pz=input.value;
                // component.classList.add("order-active");
                component.querySelector("b").innerHTML = input.value
                setaddOrder(false)
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
            style={{ transform: `scale(${addOrder ? 1 : 0})` }}
            onClick={e => {
                if (e.target.className === 'AddOrder') {
                    setaddOrder(false)
                }
            }}
        >
            <form onSubmit={e => { order(e) }}>
                <SubTittle text={"Agrega un pedido"} />
                <section>
                    <Description text={"¿Cuantas ordenes desea pedir?"} />
                    <input
                        // onKeyUp={e =>{ setinput(e.target.value)}}
                        // onChange={e =>{setinput(e.target.value)}}
                        // value={input} 
                        id='addOrder'
                        type="tel"
                        placeholder="Ejemplo: 5" />
                    <button
                        onClick={e => { order(e) }}
                        type="submit">Agregar</button>
                </section>
            </form>
        </div>
    );
}

export default AddOrder;
