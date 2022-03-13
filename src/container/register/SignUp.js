import React from 'react';
import "./sign-up.css"
import {useRef} from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'
//slid  
 export default function SignUp() {
    const user = useRef(null);  
    const company = useRef(null);
    const btn = useRef(null); 
    const nav = useNavigate();
 

    function userreg() {
        user.current.style.left="-400px"
        company.current.style.left="50px"
        btn.current.style.left="110px"
    }

    
    function companyreg() {
        user.current.style.left="50px"
        company.current.style.left="450px"
        btn.current.style.left="0px"
    }

// link with backend for useer

const [users, setUser] = useState({
    email: "", firstName: "", password: "", lastName: "", username: ""})

let name , value;
const hh =(e)=>{
    console.log(e)
    name=e.target.name;
    value=e.target.value;
    setUser({...users,[name]:value})
}


const PostData=async(e)=>{
e.preventDefault();

const {email,firstName,password,lastName,username}=users

const res = await fetch("/MyMediForm/auth/signup",{
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify({  firstName, lastName, username, email,password      })})

const data = await res.json();
if(res.status===422 || ! data){
window.alert("Invalid reg")
console.log("")
}else{
    window.alert("check your email")
    console.log("done")
    nav('/login');
  }
console.log(JSON.stringify({
    email, firstName, password, lastName,username
}))
}




// for company 

const [companys, setCompany] = useState({
    email: "",  password: "",username: "", companyName:"",company_No:""})

let namee , valuee;
const hhh =(e)=>{
    console.log(e)
    namee=e.target.namee;
    valuee=e.target.valuee;
    setCompany({...companys,[namee]:valuee})
}

const PostData2=async(e)=>{
e.preventDefault();

const {email,password,username ,companyName,company_No}=companys

const res = await fetch("/MyMediForm/auth/signup/company",{
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify({  username, email,password ,companyName,company_No })})

const dataa = await res.json();
if(res.status===422 || ! dataa){
window.alert("Invalid reg")
console.log("")
}else{
    window.alert("check your email")
    console.log("done")
    nav('/login');
  }
console.log(JSON.stringify({
    email, password,username,companyName,company_No
}))
}



    return (
        <div className='hero'>
            {/* <p>أنظم الينا الان</p> */}
            <div className='form-box'> 
            <div className='b-x'>
                <div ref={btn} id="btn"></div>
                 <button type='button' className='t-b' onClick={companyreg}>الافراد</button>
                <button type='button' className='t-b' onClick={userreg}>الشركات</button>
            </div>
          
          <form method='POST' ref={user} id="user" className='input'>
                <input type="text" onChange={hh} name="username" className='input-field' placeholder='اسم المستخدم' required></input>
                <input type="text"onChange={hh}  name="firstName" className='input-field' placeholder='الأسم' required></input>
                <input type="text"onChange={hh}  name="lastName" className='input-field' placeholder='أسم العائله' required></input>
                <input type="email"onChange={hh}  name="email" className='input-field' placeholder='البريد الالكتروني' required></input>
                <input type="password" onChange={hh}  name="password" className='input-field' placeholder='كلمه السر' required></input>
                <button type='submit' className='submit-btn' onClick={PostData} > أنشاء حساب</button>
                <p> لديك حساب مسبقا؟<Link to="/login">تسجيل الدخول </Link></p>
          </form>


          <form ref={company} id="company" className='input'>
                <input type="text"onChange={hhh}  name="username" className='input-field' placeholder='اسم المستخدم' required></input>
                <input type="text" onChange={hhh} name="CompanyName"className='input-field' placeholder='أسم الشركه' required></input>
                <input type="number"onChange={hhh} name="company_No"className='input-field' placeholder='رقم الشركه' required></input>
                <input type="email"onChange={hhh}  name="email" className='input-field' placeholder='البريد الالكتروني' required></input>
                <input type="password"onChange={hhh} name="password" className='input-field' placeholder='كلمه السر' required></input>
                <button type='submit'className='submit-btn'onClick={PostData2}> أنشاءحساب</button>
                <p> لديك حساب مسبقا؟<Link to="/login">تسجيل الدخول </Link></p>
        
          </form>
          
          </div>

        <div className='pic'>
             <img  className='img' alt='doctor' src={require("../../assets/Home/dr5.png") }/>
        
             </div>
    
             </div>
   
    );
}

