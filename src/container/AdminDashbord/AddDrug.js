import React from 'react';
import {Form, Button} from "react-bootstrap"
import {useState} from 'react';
export default function AddDrug(props) {

    const [Drugs, setDrug] = useState({
        RegisterNo: "", Name: "", description: "", termOfUse: ""})
    
    let name , value;
    const hh =(e)=>{
        console.log(e)
        name=e.target.name;
        value=e.target.value;
        setDrug({...Drugs,[name]:value})
    }
    
    
    const PostData=async(e)=>{
    e.preventDefault();
    
    const {   RegisterNo, Name, description,  termOfUse}=Drugs
    
    const res = await fetch("/MyMediForm/drug/",{
            method:"POST",
            headers:{
             "Content-Type":"application/json"
            },
            body:JSON.stringify({   RegisterNo, Name, description,  termOfUse   })})
    
    const data = await res.json();
    if(res.status===422 || ! data){
    window.alert("Invalid reg")
    console.log("")
    }else{
        window.alert("check your email")
        console.log("done")
      
      }
    console.log(JSON.stringify({
        RegisterNo, Name, description,  termOfUse
    }))
    }
    


    return (
        <div className='form-box'>
  <Form>
  <Form.Label  className="mb-3" > اضافه دواء </Form.Label>

         <Form.Group className="mb-3" controlId="formBasicNumber">
         <Form.Control type="Number" onChange={hh} placeholder="رقم تسجيل الدواء " /> </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicName">
         <Form.Control type="text" onChange={hh} placeholder="أسم الدواء " /></Form.Group>

         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>وصف الدواء</Form.Label>
         <Form.Control onChange={hh} as="textarea"  rows={3} /></Form.Group>


         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>استخدامات الدواء</Form.Label>
         <Form.Control as="textarea" onChange={hh} rows={3} /></Form.Group>

         <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check required type="checkbox" label="أتعهد ان جميع البيانات اعلاه صحيحه" /> </Form.Group>

          <Button variant="primary" type="submit" onClick={PostData}>  Submit </Button>
</Form>
        </div>
    );


}
