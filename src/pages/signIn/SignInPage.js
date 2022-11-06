import { Link } from 'react-router-dom';
import React from "react"
import './signin_pages.css'



export default function SignIn(){
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  // }
  
  
  return(
    <div className= "sign-container">
      <h3 className="sign-h3"> Sign in to continue </h3>
      
      <form >
        <label for="email">
         Email:
        </label> <br></br>
        <input className="sign-input" name='email' type ="text" ></input>

        <br></br>
        <label for="password">Password:</label>
        <br></br>
        <input className="sign-input" name= "password" type ="password" ></input>
       <br/> 
       <button className='sign-submit' type="submit"> sign in </button>

        <h3 className="sign-h3">OR</h3>
        
        <button className="sign-btn">Sign in with Google</button>

        <h4 className="sign-h3">Don't have an account?  <Link  to='/signup' id="signUp"> Sign Up</Link>  </h4>
        
      </form>

      
      
    </div>
  );
}