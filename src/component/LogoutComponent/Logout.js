
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

function Logout (){

    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("_id");
        localStorage.removeItem("name");
        localStorage.removeItem("password");
        localStorage.removeItem("email");
        localStorage.removeItem("mobile");
        localStorage.removeItem("city");
        localStorage.removeItem("address");
        localStorage.removeItem("gender");
        localStorage.removeItem("role");
        localStorage.removeItem("status");
        // localStorage.clear();
        toast.success("by by")
        navigate("/")
    })

    return(
        <></>
    )
    
}

export default Logout;

