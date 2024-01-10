import React, {useReducer, createContext} from "react"
import OrderReducer from "./OrderReducer"
import axios from "axios"
import OrderContext from "./OrderContext"
import SushiMaki from "../SushiMaki"

const OrderState = (props)=>{
    const initialState = {
        order: [],
        selectedSaucer:null,
        saucers: [],
        actOrder: false,
    }
    
    const [state, dispatch] = useReducer(
        <div><h1>OrderReducer</h1></div>, 
        initialState
    )
        
    const setActOrder = (bool) =>{ state.actOrder = bool}
    const getActOrder = () =>{ return state.actOrder}

    const getSaucers = async ()=>{
        const res = await axios.get("https://brian9work.github.io/api/sushiMaki.json")
        console.log(res)
    }
    const getOrder = (saucer)=>{

    }
    const setOrder = ()=>{} 

    return (
        <OrderContext.Provider value={{
            version:"123",
            order:state.order,
            saucers:state.saucers,
            selectedSaucer:state.selectedSaucer,
            actOrder:state.actOrder,
            getOrder,
            getSaucers,
            setOrder
        }}>
            <SushiMaki />
        </OrderContext.Provider>
    )
}

export default OrderState
