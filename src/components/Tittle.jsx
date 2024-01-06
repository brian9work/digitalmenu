import React from 'react';

const Tittle = ({ source, text, type, color }) => {
   if (type === "normal") {
      return (
         <div className='contentTittle'>
            <h1 style={{color:color}}>{text}</h1>
         </div>
      );
   }
   if (type === "imagens") {
      return (
         <div className='contentTittle'>
            <picture>
               <img src={source} />
            </picture>
            <h1 style={{color:color}}>{text}</h1>
            <picture>
               <img src={source} />
            </picture>
         </div>
      );
   }
   if (type === "imagenEnd") {
      return (
         <div className='contentTittle'>
            <h1 style={{color:color}}>{text}</h1>
            <picture>
               <img src={source} />
            </picture>
         </div>
      );
   }
   if (type === "imagenLeft") {
      return (
         <div className='contentTittle'>
            <picture>
               <img src={source} />
            </picture>
            <h1 style={{color:color}}>{text}</h1>
         </div>
      );
   }
}

export default Tittle;
