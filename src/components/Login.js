import {useHistory} from 'react-router-dom'
import React,{ useState,useEffect } from 'react'

const Login = (props) => {
const history= useHistory();
const [userName,setUSerName]=useState(""); 
const [userPass,setUserPass]=useState("");  
const [allData,setAllData]=useState([])


useEffect(()=>{
  if(localStorage.getItem('username'))   //to redirect the user to home page back if he tries to visit login page even after login.
  {
    history.push('/home');
    
  }
},[history])

   const inputUsername=(e) =>             //function for username
   {
       setUSerName(e.target.value);
       localStorage.setItem('username',e.target.value);
   }

 const inputPassword=(e) =>               //function for password
 {
       setUserPass(e.target.value);
       localStorage.setItem('password',e.target.value);
 }


    const onSubmitHandler=(e) =>
    {
        
        e.preventDefault();                 //to prevent the default form submission
        if(userName && userPass  )
        {
            
            const newEntry={userName,userPass};  
            setAllData(...allData,newEntry);
            setUSerName('');
            setUserPass('');
            history.push('/home');
            window.location.reload(false);
        }
        else{
            
          alert('Please... enter all the fields');
        }
       
    }

    return (
            <div className="layout">
                <form className="form" onSubmit={onSubmitHandler}>
                    <h2 className='login'>Login Here</h2>
                    <hr/>
                        <div>  <label 
                                  htmlFor="username"
                                  className="label">Username</label>
                            <input 
                              type="text" 
                              id="username" 
                              className="input" 
                              placeholder="Enter username" 
                              value={userName} 
                              onChange={inputUsername}/> 
                              <br/>
                
                          </div>
                        <div> <label 
                                htmlFor="password" 
                                className="label" >Password</label>
                            <input 
                            type="password" 
                            id="password" 
                            className="input" 
                            placeholder="Enter password" 
                            value={userPass} 
                            onChange={inputPassword}/> 
                            <br/>
                
                          </div>
                      <button 
                      className="btn-login" 
                      onClick={onSubmitHandler}>Submit</button>
                 </form>
             </div>
    )
}

export default Login;