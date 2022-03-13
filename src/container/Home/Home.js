import React from 'react';
import MyMediform from "./header/MyMediform"
import Footer from "./header/HFooter/Fotter"
import Description from "./description/Description"
import "./2Home.css"


export default function Home() {
    return (
        <div className='h-c'>
      
                <MyMediform/>
                <Footer/>
                <Description/>
        </div>
    );
}

