import { Link } from 'react-router-dom'
import './sign_pages.css'
import React from "react"



export default function SignUp(){
  
  return(
    <div className= "sign-container">
      <h3 className="sign-h3">Sign Up </h3>
      <form>
        <label for="email">
         Email:
        </label> <br></br>
        <input className="sign-input" name= "email" type ="text" ></input>

        <br></br>
        <label for="password">Password:</label>
        <br></br>
        <input className="sign-input" name= "password" type ="password" ></input>
        <br/>
        <button className='sign-submit' type="submit" >sign up </button>

        <h3 className="sign-h3">OR</h3>
        <button className="sign-btn">Sign up with Google</button>

        <h4 className="sign-h3">Already have an account? <Link to="/signin" id="signUp">Sign In</Link></h4>
        
      </form>

      
      
    </div>
  )
}