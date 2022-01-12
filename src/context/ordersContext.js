import React, { useState } from 'react';
 
export const OrderTotalsContext = React.createContext({
  scoopsTotal: 0,
  setScoopTotal: () => null,
  toppingsTotal: 0,
  setToppingsTotal: () => null
});

export const OrderTotalContextProvider = ({ children }) => {

  const [scoopsTotal, setScoopTotal] = useState(0);
  const [toppingsTotal, setToppingsTotal] = useState(0);

  const contextValue = {
    scoopsTotal,
    setScoopTotal,
    toppingsTotal,
    setToppingsTotal
  };

  return (
    <OrderTotalsContext.Provider value={contextValue}>
      {children}
    </OrderTotalsContext.Provider>
  );

};