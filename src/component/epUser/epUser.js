import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";



function EpUser (){
    const Navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
   
    const [mobile,setMobile] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [gender,setGender] = useState("");
    const [output,setOutput] = useState("");
    const [male,seMale]=useState("");
    const [female,seFeMale]=useState("");

    useEffect(()=>{
         axios.get("http://localhost:5001/user/fetch?email="+localStorage.getItem('email'))
         .then((response)=>{
              var users = response.data[0]
              setName(users.name);
              setEmail(users.email);
              setMobile(users.mobile);
              setAddress(users.address);
              setCity(users.city);
              if(users.gender=="male")
              {
                seMale("checked")
              }
              else{
                seFeMale("checked")
              }
              
         }).catch((error)=>{
                    console.log(error);
         })
    },[])




    
    const handleSubmit = ()=>{
var Updae_detail = {"condition_obj" :{"email":localStorage.getItem('email')},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};

axios.patch("http://localhost:5001/user/update",Updae_detail).then((response)=>{
    setOutput("user Updated");
    Navigate("/epUser");
}).catch((error)=>{
    console.log(error);
})

    }


    return(
        <>
           {/* about section */}
     <section class="about_section layout_padding">
      <div class="container  ">
       <div class="row">
        <div class="col-md-12">
            <h1>Edit User Profile</h1> 
            <font style={{"color":"blue"}}>{output}</font>
            <form>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" class="form-control" placeholder="Enter Name" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <br/>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <br/>
            
            <br/>
            <div class="form-group">
              <label for="mobile">Mobile:</label>
              <input type="text" class="form-control" placeholder="Enter Mobile" value={mobile} onChange={e=>setMobile(e.target.value)}/>
            </div>
            <br/>
            <div class="form-group">
              <label for="Address">Address:</label>
              <textarea rows={10} cols={20} class="form-control" placeholder="Enter Address" value={address} onChange={e=>setAddress(e.target.value)}></textarea>            
            </div>
            <br/>
            <div class="form-group">
              <label for="city">City:</label>
              <select class="form-control" value={city} onChange={e=>setCity(e.target.value)}>
                  <option>select city</option>
                  <option>Indore</option>
                  <option>Bhopal</option>
                  <option>Dewas</option>
                  <option>Ujjain</option>
              </select>
            </div>
            <br/>
            <div class="form-group">
              <label for="gender">Gender:</label> <br/>
              Male &nbsp;&nbsp;<input type="radio" name="gender" value="male" onChange={e=>setGender(e.target.value)}/>
              &nbsp;&nbsp;&nbsp;&nbsp;
             Female &nbsp;&nbsp;<input type="radio" name="gender" value="female" onChange={e=>setGender(e.target.value)}/>
            </div>
            <br/>
              
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>Update User</button>
        </form>
  
        </div>
      </div>
    </div>
  </section>

  {/* end about section */}
        </>
    )
}

export default EpUser