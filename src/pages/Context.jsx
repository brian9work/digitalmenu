import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';

const ThemeContext = createContext(null);

export default function MyApp() {
  const initialState = {
    order: [],
    selectedSaucer: null,
    saucers: [],
    input:false,
  }

  const [state, dispatch] = useReducer(
    <div><h1>OrderReducer</h1></div>,
    initialState
  )

  const getSaucers = async () => {
    const res = await axios.get("https://brian9work.github.io/api/sushiMaki.json")
    console.log(res.data)
  }
  const getOrder = (saucer) => {
      return state.order
  }
  const setOrder = (obj) => { 
    console.log("click")
    state.order.push(obj)
  }
  const setInput = (val) => { state.input=val; }
  const getInput = () => {return state.input; }

  const valoresInput = useState("vacio")

  return (
    <ThemeContext.Provider value={{
        theme:"light",
        order:state.order,
        saucers:state.saucers,
        selectedSaucer:state.selectedSaucer,
        input: state.input,
        valoresInput:valoresInput,
        setInput,
        getInput,
        getOrder,
        getSaucers,
        setOrder
      }}>
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  const {setOrder,getOrder} = useContext(ThemeContext);
  return (
    <Panel title="Welcome">
      <button onClick={e =>{
        setOrder({msg:"hola"})
      }} >Agregar</button>
      <button onClick={e =>{
        console.log(getOrder())
      }} >Obtener</button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const {theme,getSaucers,getInput,setInput,input,valoresInput} = useContext(ThemeContext);
  const valueInput = useState(getInput())
  console.log(getSaucers())
  console.log(theme)
  return (
    <section className={'panel-' + theme}>
      <h1>{title} - {theme}</h1>
      <p>Valor a cambiar <b>{valoresInput[0]}</b></p>
      <input type="text" />
      <button
        onClick={e => {
          console.log("click")
          valoresInput[1]("valor")
          // valueInput[1](!valueInput[0])
          // console.log(valueInput[0])
          // getInput() ? setInput(false) : setInput(true)
        }} 
      >Enviar</button><br/>
      <Button>Cambiar</Button> <br/>
      {children}
    </section>
  )
}

function Button({ children }) {
  const {setInput,valoresInput} = useContext(ThemeContext);
  const className = 'button-';
  return (
    <button 
      onClick={e =>{
        console.log("click")
        valoresInput[1]("desde button")
      }}
      className={className} 
      >
      {children}
    </button>
  );
}
