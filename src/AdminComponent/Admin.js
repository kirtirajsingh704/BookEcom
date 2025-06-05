import toast from "react-hot-toast";

function AdminHome() {
  // toast.success("Han Bhai Admin Welcome")
    return (  
      <>
          {/* about section */}
  
    <section class="about_section layout_padding">
      <div class="container  ">
        <div class="row">
          <div class="col-md-12">
            <div class="detail-box">
              <div class="heading_container">
                <h2>Welcome to <span>Admin Home Page</span></h2>
              </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  
    {/* end about section */}
  
      </>
        
       );
  }
  
  export default AdminHome;