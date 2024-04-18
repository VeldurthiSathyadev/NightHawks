import React, { startTransition } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Registration from "./registration";
function Login(){
    return(

         <div className="continer">
            <form className="form">
                <table className="table">
                    <tr>
                        <td><label>Email</label></td>
                        <td><input type="email"></input></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input type="password"></input></td>
                    </tr>
                </table>  
                <button>submit</button>
                <Link to="/registration">
                    <button onClick={<Routes><Route path= <Registration/> /> </Routes> }>
                        <span style={{ color: 'rgb(238, 219, 13)' }}>Not Registered?</span>
                    </button>
                </Link>
            </form>
        </div>
    )
}
export default Login;