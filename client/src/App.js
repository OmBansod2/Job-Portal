
import './App.css';
import Navbar from "./compoents/Navbar";
import Home from "./screens/Home";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login"
import OrderScreen from "./screens/OrderScreen"
import AdminScreen from "./screens/AdminScreen";

import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar  />
           
    </div>
  );
}

export default App;
