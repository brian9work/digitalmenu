import React from 'react';
import SubTittle from '../../components/SubTittle';

const Order = ({actOrder,setactOrder}) => {
    return (
        <div className='AddOrder'
            style={{ transform: `scale(${actOrder ? 1 : 0})` }}
            onClick={e => {if(e.target.className === 'AddOrder') setactOrder(false);}}>
            <form>
                <SubTittle text={"Orden"} />
                <h1>Order</h1>
            </form>
        </div>
    );
}

export default Order;
