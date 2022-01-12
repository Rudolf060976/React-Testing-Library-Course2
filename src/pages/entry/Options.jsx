import React, { useState, useEffect, useContext } from 'react';
import ScoopOption from './ScoopOption';
import axios from 'axios';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';
import { OrderTotalsContext } from '../../context/ordersContext';


function Options({ optionType }) {

  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);
  const [count, setCount] = useState({});
  
  const {
    scoopsTotal,
    setScoopTotal,
    toppingsTotal,
    setToppingsTotal
  } = useContext(OrderTotalsContext);

  useEffect(() => {
    
    const fetchData = async () => {
      try {

        let response;
        
        response = await axios.get(`http://localhost:3000/${optionType}`);
         
        return setItems(response.data);

             
        
      } catch (error) {
        
        setIsError(true);
        
      }

    };

    fetchData();

  }, [optionType]);

  
  const setContextTotal = (totalNumber) => {

    if (optionType === 'scoops') return setScoopTotal(totalNumber)
    if (optionType === 'toppings') return setToppingsTotal(totalNumber)

  };

  const getTotalString = () => {
    console.log(scoopsTotal)
    if (optionType === 'scoops') return `Scoops total: $${scoopsTotal.toFixed(2)}`
    if (optionType === 'toppings') return `Toppings total: $${toppingsTotal.toFixed(2)}`

  }

  const handleChange = (itemName, itemNumber) => {

    const newCount = {
      ...count,
      [itemName]: itemNumber || 0
    }

    const total = Object.keys(newCount).reduce((acc, itemName) => {

      return acc + newCount[itemName];

    }, 0)

    setCount(newCount);

    setContextTotal(2 * total);    

  };

  const getItemCount = (itemName) => {

    if (count[itemName] === undefined) return 0;

    return count[itemName];

  }

  if (isError) return <AlertBanner />; 

  const displayOptions = () => {
    
    if (optionType === "scoops") {

      return (
        items.map(item => {

          return (
            <ScoopOption key={item.name} scoop={item} handleChange={handleChange} itemCount={getItemCount(item.name)} />
          );

        })
      );

    }

    if (optionType === "toppings") {

      return (
        items.map(item => {

          return (
            <ToppingOption key={item.name} topping={item} handleChange={handleChange} itemCount={getItemCount} />
          );

        })
      );

    }  

  };


  return (
    <div>
      <h1>{optionType === 'scoops' ? 'Scoops' : 'Toppings'}</h1>
      <h4>$2.00 each</h4>
      <h3>{getTotalString()}</h3>
      {displayOptions()}
    </div>
  )
}

export default Options;
