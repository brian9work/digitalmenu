import React, { useContext } from 'react';
import OrderContext from './OrderContext';

const Item = ({ className, data }) => {
    const { setSaurceSelected,
            stateComponentAddSaurce,
            functionsOrder
        } = useContext(OrderContext);



    const addOrdenFunc = (e) => {
        if (e.target.tagName === 'SPAN') return;
        setSaurceSelected(className)
        document.getElementById("addOrder").focus()
        stateComponentAddSaurce[1]("1")
    }
    return (
        <div
            data-pz='0'
            data-name={data.plat}
            data-price={data.cost}
            data-clase={className}
            className={`${className} inactive active`}
            onClick={e => { addOrdenFunc(e) }}>
            <b>0</b>
            <section>
                <p>{data.plat}</p>
                <small>{data.ingr}</small>
            </section>
            <i>${data.cost}</i>
            <span className='span' onClick={() => {
                document.querySelector("." + className).classList.replace("order-active", "active")
                document.querySelector("." + className).dataset.pz = "0";

                functionsOrder.eliminarOrder(className)

            }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
            </span>
        </div>
    );
}

export default Item;
