import React from 'react';
import Storage from '../../storage/Storage';
import { Link } from 'react-router-dom';

const Item = ({className,data,setaddOrder,setclassActive}) => {
    const addOrdenFunc = (e) => {
        if(e.target.tagName === 'SPAN') return;
        setclassActive(className)
        document.getElementById("addOrder").focus()
        // Storage.addPlatillo.set(className)
       setaddOrder(true)
    }
    return (
        <div
            data-pz='0'
            data-name={data.plat}
            data-price={data.cost}
            className={`${className} inactive active`}
            onClick={e => { addOrdenFunc(e) }}>
            <b>0</b>
            <section>
                <p>{data.plat}</p>
                <small>{data.ingr}</small>
            </section>
            <i>${data.cost}</i>
            <span onClick={() =>{
                document.querySelector("."+className).classList.replace("order-active","active")
                document.querySelector("."+className).dataset.pz="0";
            }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
            </span>
        </div>
    );
}

export default Item;
