import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom';

const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer) // to access the totalQuantity from cartReducer
    const history= useHistory();

    const logOut =()=>
      {
        localStorage.clear();
        history.push('/');
        window.location.reload(false);
      }

  return (
      
        <div className="nav">
          <div className="container">
            <div className="nav__container">
                <div className="nav__left">
                    <h1><em>Shopify</em> </h1>
                </div>

                    <div className="nav__right">
                    { localStorage.getItem('username') ?  
                      <div className='cartLogo'>
                        <Link to="/cart">
                            <ShoppingCartIcon className="cart-icon" /> 
                        </Link>
                    <span>{totalQuantities}</span>
                    </div>  :null}

                      
                  { !localStorage.getItem('username') ?  <Link  to='/login' className="btn" >Login</Link> : null}
                  { localStorage.getItem('username') ? <button className=" btn logout" onClick={logOut}>Logout</button> :null}

                
                </div>
            </div>
        </div>
    </div>
 
  )
    
}

export default Nav

