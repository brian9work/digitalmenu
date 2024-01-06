import React, { useEffect, useState } from 'react';
import sushi from '../../data/sushi.json'
import Item from './Item';

const Section = ({ data, addOrder, setaddOrder,setclassActive }) => {
    const [height, setheight] = useState("4rem");
    const changeHeight = (e) => {
        setheight(height === "4rem" ? (e.target.parentElement.scrollHeight + 2) + "px" : "4rem")
    }
    return (
        <>
            <div className="data-category" style={{ height: height }}>
                <section
                    onClick={e => { changeHeight(e) }}>
                    <picture>
                        <img src={`https://calpulalpan-sushi.onrender.com/${data.imag}`} alt="" />
                    </picture>
                    <h2>{data.name}</h2>
                    <span className="downCotent" data-long="14">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </span>
                </section>
                <nav>
                    {data.data.map(d =>{
                        return (<Item
                            className={(data.name+"_"+d.plat).replaceAll(" ","_").replaceAll("(","_").replaceAll(")","_")} 
                            key={(data.name+"_"+d.plat).replaceAll(" ","_").replaceAll("(","_").replaceAll(")","_")}
                            data={d} 
                            setaddOrder={setaddOrder} 
                            setclassActive={setclassActive}
                            />
                        )
                    })}
                     {/* <div
                        onClick={e =>{ addOrdenFunc(e) }}>
                        <b>0</b>
                        <section>
                           <p>salmontino</p>
                           <small>Pasta tampico, philadelphia, pepino, zanahoria, por fuera salmón ahumado y aguacate.</small>
                        </section>
                        <i>$90</i>
                        <span>
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
                        </span>
                     </div> */}
                  </nav>
            </div>
        </>
    );
}

export default Section;
