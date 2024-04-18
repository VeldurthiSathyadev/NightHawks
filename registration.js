import React from "react";
import { useState } from "react";
import "./registration.css";
function Registration(){
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const[email,setEmail]=useState("");
    const [num,setPnumber]=useState("");
    const [pswd,setPswd]=useState("");
    const [cpswd,setCpswd]=useState("");
    const changeFName=(e)=>{
        setFname(e.target.value)
    }
    const changeLName=(e)=>{
        setLname(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePnumber=(e)=>{
        setPnumber(e.target.value)
    }
    const changePswd=(e)=>{
        setPswd(e.target.value)
    }
    const ChangeCpswd=(e)=>{
        setCpswd(e.target.value)
    }
    const submit=()=>{
        if(fname.length<6){
            alert("the firstname should more than 5 char")
        }else if(num.length!==10){
            alert("enter correct number")
        }else if(pswd!==cpswd){
            alert("give correct password")
        }else{
            alert("Thankyou for registration")
            localStorage.setItem("Name",fname+lname)
            localStorage.setItem("Phonenumber",num)
            localStorage.setItem("Email",email)
            localStorage.setItem("password",pswd)
        }
    }
    return(
        <div className="continer">
            <form className="form">
                <table className="table"> 
                    <tr>
                        <td><label>Firstname</label></td>
                        <td><input type='text' value={fname} onChange={changeFName}></input></td>
                        
                        <td><label>lastname</label></td>
                        <td><input type='text' value ={lname} onChange={changeLName}></input></td>
                    </tr>
                    <tr>
                        <td><label>Email</label></td>
                        <td><input type="email" value={email} onChange={changeEmail}></input></td>
                    </tr>
                    <tr>
                        <td><label>Phonenumber</label></td>
                        <td><input type="number" value={num} onChange={changePnumber}></input></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input type="password" value={pswd} onChange={changePswd}></input></td>
                    </tr>
                    <tr>
                        <td><lebel>Conform-Password</lebel></td>
                        <td><input type="password" value={cpswd} onChange={ChangeCpswd}></input></td>
                    </tr>
                </table>  
                <button onClick={submit}>submit</button>  
            </form>
        </div>
    )
}
export default Registration;