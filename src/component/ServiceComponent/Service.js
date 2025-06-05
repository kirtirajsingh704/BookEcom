import './Service.css';
import { useState } from 'react';
import Test from '../testComponent/test.jsx'

function Service() {
   



  return (
    <>
     {/* <!-- chose --> */}
     <div class="chose">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-12">
                  <div class="titlepage text_align_left">
                     <h2>Service</h2>
                  </div>
               </div>
               <div class="col-lg-5 col-md-4">
                  <div class="chose_box">
                     <i><img src="./assets/images/chose1.png" alt="#"/></i>
                     <h3>Project Done </h3>
                     <strong>1000+</strong>
                     <a class="read_more" href="Javascript:void(0)">Read More</a>
                  </div>
               </div>
               <div class="col-lg-5 col-md-4">
                  <div class="chose_box">
                     <i><img src="./assets/images/chose2.png" alt="#"/></i>
                     <h3>Happy Clients </h3>
                     <strong>900+</strong>
                     <a class="read_more" href="Javascript:void(0)">Read More</a>
                  </div>
               </div>
               <div class="col-lg-2 col-md-4">
                  <div class="chose_box">
                     <i><img src="./assets/images/chose3.png" alt="#"/></i>
                     <h3>Awards</h3>
                     <strong>100+</strong>
                     <a class="read_more" href="Javascript:void(0)">Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end chose --> */}
   
    </>
      
     );
}

export default Service;

