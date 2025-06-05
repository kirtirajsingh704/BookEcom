
import { useState } from 'react';
import axios from 'axios';

import {useNavigate} from 'react-router-dom';
function AddCategory() {

  const navigate=useNavigate();
  const [output,setOutput]=useState();
  const [catname,setCatname]=useState();
  const [File,setFile]=useState();    
  
  const handleChange =(event)=>{
     setFile(event.target.files[0]);
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    var formData= new FormData();
    formData.append("catnm",catname);
    formData.append("caticon",File);
    const config={
        "content-type":'multipart/form-data'
    }
    axios.post("http://localhost:5001/category/save",formData,config).then((response)=>{
        setOutput("Category Added Successfully");
        setCatname("");
        navigate("/addcategory");
    }).catch((error)=>{
        setOutput("Category not Added Successfully");
    });
}

  return (  
    <>
        {/* about section */}

  <section class="about_section layout_padding">
    <div class="container  ">
      <div class="row">
        <div class="col-md-12">
          <h1>Add Category Here</h1>		
          <span style={{"color":"red"}}>{output}</span>
                        <br />
                        <form>
                            <div class="form-group">
                              <label for="catnm">Category Name :</label>  
                              <input type="text" class="form-control" value={catname} onChange={e=>setCatname(e.target.value)}/>
                            </div>
                            <br />
                            <div class="form-group">
                              <label for="caticon">category Icon :</label>  
                              <input type="file" class="form-control" onChange={handleChange}/>
                              </div>
                              <br />
                              
                            <button type="button" class="btn btn-info" onClick={handleSubmit}>Add Category</button>

                        </form>
                        
        </div>
      </div>
    </div>
  </section>

  {/* end about section */}

    </>
      
     );
}

export default AddCategory;
