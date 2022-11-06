import "./error_page.css"
import React from "react"
//import { useRouteError } from "react-router-dom";
import  {Link} from "react-router-dom"
 export default function ErrorPage(){
// const error = useRouteError();
//   console.error(error);

  
return (
  <div className="container">
  <div className="bulb-bckgrnd">
    <img className="bulb" alt="broken light bulb" src= "../broken-bulb.jpg" ></img>
  </div>

    <div className="error-content">
      <h1>404</h1>
      <p>The page you are looking for is not available</p>
      <Link to="/">GO BACK TO HOME </Link>
    </div>
  </div>
)
  
}