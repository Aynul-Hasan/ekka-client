import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homme from './pages/home/Homme';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Products from './pages/products/Products';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import SingleProduct from './pages/products/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homme/>}></Route>
        <Route path="/product"  element={<Products/>}></Route>
        <Route path="/product/id"  element={<SingleProduct/>}></Route>
        <Route path="/about"  element={<About/>}></Route>
        <Route path="/contact"  element={<Contact/>}></Route>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
