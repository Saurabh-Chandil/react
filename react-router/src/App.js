import { Routes, Route } from 'react-router-dom'
import './App.css';
import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import NewProducts from './components/NewProducts';
import { NoMatch } from './components/NoMatch';
import OrderSummary from './components/OrderSummary';
import { Products } from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/order-summary' element={<OrderSummary />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
        <Route path='/products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />}></Route>
          <Route path='featured' element={<FeaturedProducts />}></Route>
        </Route>
      </Routes>
    </>    
  );
}

export default App;
