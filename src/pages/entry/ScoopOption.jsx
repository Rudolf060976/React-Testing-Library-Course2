import React from 'react';

function ScoopOption({ scoop, handleChange, itemCount }) {
  return (
    <div>
      <img src={scoop.imagePath} alt={`${scoop.name} scoop`} />
      <span>{scoop.name}</span>    
      <label >{scoop.name}
      <input role="spinbutton" type="number" value={itemCount} onChange={(e) => handleChange(scoop.name, Number(e.target.value))} />
      </label>   
    </div>
  )
}

export default ScoopOption;
