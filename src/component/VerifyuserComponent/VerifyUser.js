import { Navigate,useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import {__userapi} from '../../ApiUrl';
import axios from 'axios';

function VerifyUser()
{
    const params = useParams(); 
    useEffect(()=>{
     axios.get("http://localhost:5001/user/fetch?email="+params.email).then((response)=>{
        if(response.data[0].__v==0)
        {
            var updateDetails={"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}}; 
            axios.patch("http://localhost:5001/user/update",updateDetails).then((response)=>{
               console.log("User verified....");    
            });    
        }       
     });
    },[]);

    return(
        <div>
            <Navigate to='/login' />
        </div>
    )
}

export default VerifyUser