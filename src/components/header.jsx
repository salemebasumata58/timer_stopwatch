import {Link} from "react-router-dom";
import './myapp.css';
export const Header = () =>{
     return (
         <div >
             
            <Link to="/stopwatch"style={{margin:"19px"}}>Timer</Link>
            <Link to="/timer">Stopwatch</Link>
         </div>
     )
}