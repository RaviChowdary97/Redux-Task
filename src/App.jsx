import "./App.css";
import store from "./Components/STORE";
import { Provider } from "react-redux";
import CardList from "./Components/CardList";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/CART";
function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
