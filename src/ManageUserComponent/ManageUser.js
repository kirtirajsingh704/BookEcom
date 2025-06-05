import { useState, useEffect } from "react";
import axios from "axios";
import { __userapi } from '../ApiUrl';
import { useNavigate } from "react-router-dom";

function ManageUser() {
    const Navigate = useNavigate();
    const [userDetail, setUserDetail] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/user/fetch?role=user")
            .then((response) => {
                setUserDetail(response.data);
              Navigate("/ManageUser");
            })

            .catch((error) => {
                console.log(error); // Log any errors
            });
    }, []);

    const changeStatus = async(_id,str)=>{
        try {
            if(str==='verify'||str==='block'){
                 let updateDetails = {
                    condition_obj :{_id:_id},
                    content_obj:{status:str==='verify'?1:0}
                 }
                 await axios.patch("http://localhost:5001/user/update",updateDetails)
                 alert("operation success")
                 
            }
            else if (str=="delete"){
                await axios.delete("http://localhost:5001/user/delete",{
                    data:{_id:_id}
                })
                alert("user deleted successfully")
            }
            axios.get("http://localhost:5001/user/fetch?role=user")
            .then((response) => {
                setUserDetail(response.data);
              
            })
              Navigate("/ManageUser");
        }
        catch(error){
    
        }

    
    }

    return (
        <>
            <h1>Manage User</h1>
            <table className="table table-bordered" border="2px">
                <thead>
                    <tr>
                        <th>Reg ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Info</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetail.map((row) => (
                        <tr key={row._id}>
                            <td>{row._id}</td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.mobile}</td>
                            <td>{row.address}</td>
                            <td>{row.city}</td>
                            <td>{row.gender}</td>
                            <td>{row.info}</td>
                            <td >
                    {row.status===1?
                    (
                        <a onClick={()=>{ changeStatus(row._id,"block")}}
                        style={{color:"red",cursor:"pointer"}}
                        >Block</a>
                    ):(
                        <a onClick={()=>{ changeStatus(row._id,"verify")}}
                        style={{color:"green",cursor:"pointer"}}
                        >Verify</a>
                    )
                    }
                      
                    </td>
                        <td>
                        <a onClick={()=>{ changeStatus(row._id,"delete")}}
                        style={{color:"blue",cursor:"pointer"}}
                        >Delete</a>
                        </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ManageUser;
