import './SideBar.css';


function SideBar() {
  return (
    <>
      <div id="sidebar">
        {/* start slider section */}
      <div id="top_section" class=" banner_main">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div id="myCarousel" class="carousel slide" data-ride="carousel">
                     <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="container-fluid">
                              <div class="carousel-caption relative">
                                 <div class="bluid">
                                    <h1>Creative  <br/>Work Idea </h1>
                                    <p>There are many variations of passages of Lorem Ipsum <br/>available, but the majority have suffered alteration
                                    </p>
                                    <a class="read_more" href="about.html">About Company </a><a class="read_more" href="contact.html">Contact </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container-fluid">
                              <div class="carousel-caption relative">
                                 <div class="bluid">
                                    <h1>Creative  <br/>Work Idea </h1>
                                    <p>There are many variations of passages of Lorem Ipsum <br/>available, but the majority have suffered alteration
                                    </p>
                                    <a class="read_more" href="about.html">About Company </a><a class="read_more" href="contact.html">Contact </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container-fluid">
                              <div class="carousel-caption relative">
                                 <div class="bluid">
                                    <h1>Creative  <br/>Work Idea </h1>
                                    <p>There are many variations of passages of Lorem Ipsum <br/>available, but the majority have suffered alteration
                                    </p>
                                    <a class="read_more" href="about.html">About Company </a><a class="read_more" href="contact.html">Contact </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container-fluid">
                              <div class="carousel-caption relative">
                                 <div class="bluid">
                                    <h1>Creative  <br/>Work Idea </h1>
                                    <p>There are many variations of passages of Lorem Ipsum <br/>available, but the majority have suffered alteration
                                    </p>
                                    <a class="read_more" href="about.html">About Company </a><a class="read_more" href="contact.html">Contact </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                     <i class="fa fa-angle-left" aria-hidden="true"></i>
                     <span class="sr-only">Previous</span>
                     </a>
                     <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                     <i class="fa fa-angle-right" aria-hidden="true"></i>
                     <span class="sr-only">Next</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* end slider section */}

      </div>
    </>   
     );
}

export default SideBar;
