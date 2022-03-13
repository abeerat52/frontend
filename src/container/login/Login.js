import React from "react";
import "./login.css"
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect } from "react";
export default function Login() {
  const navigate = useNavigate();


    const [users, setUser] = useState({  password: "",  username: ""})
    
    let name , value;
    const hh =(e)=>{
        console.log(e)
        name=e.target.name;
        value=e.target.value;
        setUser({...users,[name]:value})
    }
    
    useEffect(()=>{
      if (localStorage.getItem('iser-info'))
      navigate('/home');
    })
    
    const PostData=async(e)=>{
      e.preventDefault();
          const {password,username}=users
         let res = await fetch("/MyMediForm/auth/login",{
                method:"POST",
               headers:{
                "Content-Type":"application/json",
                 "Accept":"application/json"
                    },
            body:JSON.stringify({  username,password  })
            })
            const data = await res.json();
            localStorage.setItem("user-info",JSON.stringify(data))
            navigate('/home');
       


          // if(res.status===422 || ! data){
          //     window.alert("Invalid login")
          //     console.log("")
          //   }else{
          //      window.alert("login successfull")
          //      console.log("done")
          //       navigate('/home');
          // }
          console.log(JSON.stringify({
         password,username
           }))
   }

  return (
    <div>
      <div className="herolog"> 
      <div className="form-boxlog">
             <form id="user" className="inputlog">

             <input type="text"      onChange={hh} name="username" className="input-fieldlog" placeholder="UserName or email " required></input>
             <input type="password"  onChange={hh} name="password" className="input-fieldlog" placeholder="Enter pass" required></input>
             <button type="submit"   className="submit-btnlog" onClick={PostData}> {" "}تسجيل الدخول</button>
             <p> ليس لديك حساب؟<Link to="/signup">أنشئ حسابك الآن</Link></p>
             </form>
        </div>
        <div className="">
          <img  className="imglog" alt="no ige"src={require("../../assets/Home/dr4.png")}/>
        </div>
      </div>
    </div>
  );
}
