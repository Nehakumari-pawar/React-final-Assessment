import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from'react';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Details from "./components/Details";
import Login from "./components/Login";
import Footer from './components/Footer';
import ProtectedRoute from "./components/ProtectedRoute";
import StartingPage from "./components/StartingPage";

function App() {


  const dispatch = useDispatch();
  const products= useSelector(state=> state.ProductsReducer.products);
 
const userLoggedIn= localStorage.getItem('username');
console.log(userLoggedIn);

   
 
 
  useEffect (() =>{

    const fetchProducts = async() => {
 
      const response= await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
      const data=await response.json();
      dispatch({type: 'SET_PRODUCTS', payload: data});
        console.log(data);
    }
     fetchProducts();
         
     },[dispatch]);
 
 console.log("Products:",products[0]);


  return (
    
    <>

    <Router>
     
     <Nav />
     <Route path="/" exact component={StartingPage} />
     <Route path="/login" exact component={Login}  /> 
     
     <Route path="/home">
       <ProtectedRoute cmp={Home}/>
    </Route>

     <Route path="/cart" >
     <ProtectedRoute cmp={Cart}/>
     </Route>
     
     
     <Route path="/details/:id" >
       <ProtectedRoute cmp={Details}/>
       </Route>
    
    
    </Router>
     <Footer/>

    
     </>
    
  );
}

export default App;
