import React, { useState } from 'react';
import Item from './Item';

const Section = ({ data }) => {
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
                            height={[height,setheight]}
                            className={(data.name+"_"+d.plat).replaceAll(" ","_").replaceAll("(","_").replaceAll(")","_")} 
                            key={(data.name+"_"+d.plat).replaceAll(" ","_").replaceAll("(","_").replaceAll(")","_")}
                            data={d} 
                            />
                        )
                    })}
                  </nav>
            </div>
        </>
    );
}

export default Section;
