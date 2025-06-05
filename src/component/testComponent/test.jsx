import './test.css';
import { useState } from 'react';

function Test(props) {
    



  return (
    <>
     <div id="service">
      <h1>Welcome to test Component </h1>
       <hr />

       <p>{props.a}</p>
       <p>{props.b}</p>
       


    </div>
   
    </>
      
     );
}

export default Test;

