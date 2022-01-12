import React from 'react';

function ToppingOption({ topping }) {
  return (
    <div>
      <img src={topping.imagePath} alt={`${topping.name} topping`} />
      <span>{topping.name}</span>      
    </div>
  )
}

export default ToppingOption;
