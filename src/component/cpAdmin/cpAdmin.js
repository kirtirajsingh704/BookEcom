
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";



function CPadmin (){
    const Navigate = useNavigate();
    const [opass,setOldPass] = useState();
    const [npass,setNPass] = useState();
    const [cnpass,setCnPass] = useState();
    const [output,setOutput] = useState();

    




    
    const handleSubmit = ()=>{
    axios.get("http://localhost:5001/user/fetch?email="+localStorage.getItem('email')+"&password="+opass).then((response)=>{
      // var userList= response.data
      // console.log(userList)
      if(npass===cnpass)
        {
          const updateDetail={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpass}};
          axios.patch("http://localhost:5001/user/update",updateDetail).then((response)=>{
              setOutput("Password Changed succesfully");
              setOldPass("");
              setCnPass("");
              setNPass("");
              Navigate("/cpadmin");  
            })
        }
        else
        {
          setOutput("New & confirm new password mismatch , please try again....");
          setNPass("");
          setCnPass("");  
        } 

    }).catch((response)=>{
         setOutput("Invalide Old pass");
    })

    }


    return(
        <>
           {/* about section */}
     <section class="about_section layout_padding">
      <div class="container  ">
       <div class="row">
        <div class="col-md-12">
            <h1>Chnage Password</h1> 
            <font style={{"color":"blue"}}>{output}</font>
            <form>
            <div class="form-group">
              <label for="OldPass">Old Password</label>
              <input type="password" class="form-control"  placeholder="Enter Old Password" value={opass} onChange={e=>setOldPass(e.target.value)}/>
            </div>
            <br/>
            <div class="form-group">
              <label for="Newpass">New Password</label>
              <input type="password" class="form-control" placeholder="Enter New Password" value={npass} onChange={e=>setNPass(e.target.value)}/>
            </div>
            <br/>
            
            <br/>
            <div class="form-group">
              <label for="cnpass">Confirm Password</label>
              <input type="password" class="form-control" placeholder="Enter New Password Again" value={cnpass} onChange={e=>setCnPass(e.target.value)}/>
            </div>
            <br/>
            <br/>
              
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>Change Password</button>
        </form>
  
        </div>
      </div>
    </div>
  </section>

  {/* end about section */}
        </>
    )
}

export default CPadmin