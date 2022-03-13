import React from 'react';
import axios from "axios"
import {useState} from 'react';
import { useEffect } from 'react/cjs/react.production.min';

export default  function Drugs(props) {




function ComponentDidMount()
{
    let url= "/MyMediForm/drug/drugs"
    fetch(url,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
             "Accept":"application/json"
                },
    }).then((result)=>{
            result.json.then((res)=>{
               this.setState({data:res})


            })
    })
}


    return (
      
        <div>

        </div>
    );
}

