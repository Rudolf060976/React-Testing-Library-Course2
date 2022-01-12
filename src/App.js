import { OrderTotalContextProvider } from "./context/ordersContext";
import OrderEntry from "./pages/entry/OrderEntry";



function App() {
  return (
    <OrderTotalContextProvider>
      <OrderEntry />
    </OrderTotalContextProvider>    
  );
}

export default App;
