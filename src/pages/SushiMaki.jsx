import React, {useState} from 'react';
import Tittle from '../components/Tittle';
import AddOrder from '../components/AddOrder';
import sushi from '../data/sushi.json'
import Section from './sushiMaki/Section';
import Order from './sushiMaki/Order';

const SushiMaki = () => {
   const [addOrder, setaddOrder] = useState(false);
   const [classActive, setclassActive] = useState("");
   const [actOrder, setactOrder] = useState(false);

   return (
      <div className='container'>
         <div className="background">
            <img src="https://calpulalpan-sushi.onrender.com/background.jpg" alt="" />
         </div>
         <Order actOrder={actOrder} setactOrder={setactOrder} />
         <AddOrder classActive={classActive} addOrder={addOrder} setaddOrder={setaddOrder} />
         <div className="content">
            <Tittle
               source={"https://calpulalpan-sushi.onrender.com/img_logo.png"}
               text={"Sushi Maki"}
               type={"imagens"}
               color={"#fff"}
            />
            <div className="data">
               {sushi.data.map(s =>{
                  return  (
                  <Section 
                     key={s.name.replaceAll(" ","")}
                     data={s} 
                     addOrder={addOrder} 
                     setaddOrder={setaddOrder} 
                     setclassActive={setclassActive}
                  />)
               })}
            </div>
            <button type="button"
               onClick={e => {
                  setactOrder(true)
               }}
            >Agregar</button>
         </div>
         <h1>Sushi Maki</h1>
      </div>
   );
}

export default SushiMaki;
