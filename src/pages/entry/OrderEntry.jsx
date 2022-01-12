import React, { useContext } from 'react';
import { OrderTotalsContext } from '../../context/ordersContext';
import Options from './Options';


function OrderEntry() {

  const {
    scoopsTotal,
    toppingsTotal
  } = useContext(OrderTotalsContext);

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />      
      <h1>{`Grand Total: $${(scoopsTotal + toppingsTotal).toFixed(2)}`}</h1>
    </div>
  )
}

export default OrderEntry;
