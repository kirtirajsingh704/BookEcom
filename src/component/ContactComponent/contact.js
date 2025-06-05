import './contact.css'
import {useState} from 'react'

function Contact (){
    
    return (
        <>
         {/* <!-- contact --> */}
      <div class="contact">
         <div class="container">
            <div class="row ">
               <div class="col-md-6">
                  <div class="titlepage text_align_left">
                     <h2>Get In Touch</h2>
                  </div>
                  <form id="request" class="main_form">
                     <div class="row">
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Name" type="type" name=" Name"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Email" type="type" name="Email"/>                          
                        </div>
                        <div class="col-md-12">
                           <textarea class="textarea" placeholder="Message" type="type" Message="Name"></textarea>
                        </div>
                        <div class="col-md-12">
                           <button class="send_btn">Send Now</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="col-md-6">
                  <div class="titlepage text_align_left">
                     <h2>What Says Clients</h2>
                  </div>
                  <div id="clientsl" class="carousel slide our_clientsl" data-ride="carousel">
                     <ol class="carousel-indicators">
                        <li data-target="#clientsl" data-slide-to="0" class="active"></li>
                        <li data-target="#clientsl" data-slide-to="1"></li>
                        <li data-target="#clientsl" data-slide-to="2"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="container">
                              <div class="carousel-caption posi_in">
                                 <div class="clientsl_text">
                                    <i><img src="./assets/images/clint.jpg" alt="#"/></i>
                                    <h3>Deno <img src="./assets/images/icon.png" alt="#"/></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem IpsumIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container">
                              <div class="carousel-caption posi_in">
                                 <div class="clientsl_text">
                                    <i><img src="./assets/images/clint.jpg" alt="#"/></i>
                                    <h3>Deno <img src="./assets/images/icon.png" alt="#"/></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem IpsumIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container">
                              <div class="carousel-caption posi_in">
                                 <div class="clientsl_text">
                                    <i><img src="./assets/images/clint.jpg" alt="#"/></i>
                                    <h3>Deno <img src="./assets/images/icon.png" alt="#"/></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem IpsumIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a class="carousel-control-prev" href="#clientsl" role="button" data-slide="prev">
                     <i class="fa fa-angle-left" aria-hidden="true"></i>
                     <span class="sr-only">Previous</span>
                     </a>
                     <a class="carousel-control-next" href="#clientsl" role="button" data-slide="next">
                     <i class="fa fa-angle-right" aria-hidden="true"></i>
                     <span class="sr-only">Next</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- contact --> */}

        </>
    )
}

export default Contact