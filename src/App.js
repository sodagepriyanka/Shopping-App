
import './App.css';
import Home from './components/Home';
import { Routes,Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header';
import Cart from './components/Cart';
import Products from './components/Products'
import LoginPage from './components/LoginPage';
import Wishlist from './components/Wishlist';
import NewListProvider from './components/Context';
function App() {
  return (
    <div className="App">
      <NewListProvider>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/product' element={<Products/>}></Route>
            
            <Route path='/wishlist' element={<Wishlist />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/loginpage' element={<LoginPage/>}></Route>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
          <Header/>
      </NewListProvider>
          
        
          
    </div>
  );
}

export default App;
