import {useHistory} from 'react-router-dom'
import React,{useEffect} from 'react'
//import NotFound from 'components/NotFound';
const ProtectedRoute = (props) => {

    const Cmp=props.cmp;
const history=useHistory();

    useEffect(()=>{
        if(!localStorage.getItem('username'))
        {
          history.push('./login');
          
        }
    },[history])

    return (
        
        <div>
             <Cmp/>
        </div>

        
    );
}

export default ProtectedRoute;