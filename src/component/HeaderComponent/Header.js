import './Header.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Auth from '../AuthenticationComponent/Auth'

function Header() {
   const [headerContent,setHeaderContent] = useState("");


useEffect(()=>{
   setInterval(()=>{
   if(localStorage.getItem('role') ==='admin')
   {

setHeaderContent(
   <>
   {/* header */}
   <header>
   <div className="header">
      <div className="container-fluid">
         <div className="row d-flex">
            <div className="col-md-2 col-sm-3 logo_section">
               <div className="full">
                  <div className="center-desk">
                     <div className="logo">
                        <img 
                           src={'/assets/images/logo (3).png'} 
                           alt={"not available"} 
                           className="cart-image img-fluid" 
                           style={{ width: "auto", height: "9vh", borderRadius: "8px" }} 
                        /> 
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-10 col-sm-9">
               <nav className="navigation navbar navbar-expand-lg navbar-dark">
                  <div className='container-fluid'>
                     <div className="collapse navbar-collapse" id="navbarsExample04">
                     <ul class="navbar-nav mr-auto">
                           {/* <li class="nav-item active">
                              <Link class="nav-link" to={"/admin"}>AdimnHome</Link>
                           </li> */}
                           <li class="nav-item">
                           <Link class="nav-link" to={"/addsubcategory"}>Add Book</Link>
                           </li>
                           <li class="nav-item">
                           <Link class="nav-link" to={"/ManageUser"}>ManageUser</Link>
                           </li>
                           <li class="nav-item">
                               <Link class="nav-link" to={"/epAdmin"}>EpAdmin</Link>
                           </li>
                           <li class="nav-item">
                             <Link class="nav-link" to={"/cpAdmin"}>CHange Pas.</Link>
                           </li>
                           <li class="nav-item">
                             <Link class="nav-link" to={"/addCategory"}>AddCategory</Link>
                           </li>
                           <li class="nav-item" >
                              <div class="col-md-2 d_none">
                                 <Link class="nav-link"  to={"/Logout"}>Logout</Link>
                              </div>
                             
                           </li>
                        </ul>
                     </div>
                     {/* Moved the toggler button here */}
                     <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   </div>
</header>
   
   {/* end header */}
   </>
)
   }
   else if(localStorage.getItem('role')==='user')
   {
      setHeaderContent(
      <>
      {/* header */}
      <header>
   <div className="header">
      <div className="container-fluid">
         <div className="row d-flex">
            <div className="col-md-2 col-sm-3 logo_section">
               <div className="full">
                  <div className="center-desk">
                     <div className="logo">
                        <img 
                           src={'/assets/images/logo (3).png'} 
                           alt={"not available"} 
                           className="cart-image img-fluid" 
                           style={{ width: "auto", height: "9vh", borderRadius: "8px" }} 
                        /> 
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-10 col-sm-9">
               <nav className="navigation navbar navbar-expand-lg navbar-dark">
                  <div className='container-fluid'>
                     <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                           {/* <li className="nav-item active">
                              <Link className="nav-link" to={"/pr"}>Home</Link>
                           </li> */}
                           <li className="nav-item">
                              <Link className="nav-link" to={"/products"}>Home</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to={"/portfolio"}>Portfolio</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to={"/contactUs"}>ContactUs</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to={"/epUser"}>EpUser</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to={"/logout"}>Logout</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to={"/cart"}>
                                 <img 
                                    src={'/assets/subcaticons/cart.png'} 
                                    alt={"not available"} 
                                    className="cart-image img-fluid" 
                                    style={{ width: "auto", height: "4vh", borderRadius: "8px" }} 
                                 /> 
                              </Link>
                           </li>
                        </ul>
                     </div>
                     {/* Moved the toggler button here */}
                     <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   </div>
</header>

      {/* end header */}
      </>
      )
   }
   else
   {
   setHeaderContent(
   <>
   
      
      {/* header */}
      <header >
   <div className="header">
      <div className="container-fluid">
         <div className="row d-flex">
            <div className="col-md-2 col-sm-3 logo_section">
               <div className="full">
                  <div className="center-desk">
                     <div className="logo">
                        <img 
                           src={'/assets/images/logo (3).png'} 
                           alt={"not available"} 
                           className="cart-image img-fluid" 
                           style={{ width: "auto", height: "9vh", borderRadius: "8px" }} 
                        /> 
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-10 col-sm-9">
               <nav className="navigation navbar navbar-expand-lg navbar-dark">
                  <div className='container-fluid'>
                     <div className="collapse navbar-collapse" id="navbarsExample04">
                     <ul class="navbar-nav mr-auto">
                              <li class="nav-item active">
                                 <Link class="nav-link" to={"/"}>Home</Link>
                              </li>
                              <li class="nav-item">
                              <Link class="nav-link" to={"/about"}>About</Link>
                              </li>
                              <li class="nav-item">
                              <Link class="nav-link" to={"/WhatWeDo"}>What we Do</Link>
                              </li>
                              <li class="nav-item">
                                  <Link class="nav-link" to={"/portfolio"}>Portfolio</Link>
                              </li>
                              <li class="nav-item">
                                <Link class="nav-link" to={"/contactUs"}>ContactUs</Link>
                              </li>
                              <li class="nav-item">
                                <Link class="nav-link" to={"/register"}>Register</Link>
                              </li>
                              <li class="nav-item" >
                                 <div class="col-md-2 d_none">
                                    <Link class="nav-link"  to={"/login"}>Login</Link>
                                 </div>
                                
                              </li>
                           </ul>
                     </div>
                     {/* Moved the toggler button here */}
                     <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   </div>
</header>
      {/* end header */}
      </>
   )
   
   }
   
},1)

},[])

   return (
    <>
    <Auth/>
     {
      headerContent
     }
    </>
    
    

   );
}

export default Header;
