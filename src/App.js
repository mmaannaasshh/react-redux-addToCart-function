import './App.css';
import Header from './componants/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Cart from './componants/Cart';
import CartDetails from './componants/CartDetails';


function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/cart/:id" element={<CartDetails />} />

      </Routes>

    </>
  );
}

export default App;
