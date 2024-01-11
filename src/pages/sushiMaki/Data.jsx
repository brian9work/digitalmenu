import React, { useEffect, useState } from 'react';
import Section from './Section';
import axios from 'axios';
// import sushi from '../../data/sushi.json'
// sushi.data

const Data = () => {
    const [data, setData] = useState([])

    const obtInfo = async () => {
        const {data} = await axios.get("https://brian9work.github.io/api/sushiMaki.json")
        setData(data.data)
    }

    useEffect(() => {
        obtInfo()
    }, [])
    
    return (
        <div className="data">
            { data.length>0 ? (data.map(s => {
                return (
                    <Section
                        key={s.name.replaceAll(" ", "")}
                        data={s}
                    />)
                })) : <h2>Cargando</h2>
            }
        </div>
    );

}

export default Data;
