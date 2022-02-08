import React from "react";

import {useNavigate} from "react-router-dom";

function Profile()
{
    let navigate=useNavigate();
    return(
        <div>
            Profile<button onClick={()=>{
                navigate("/home");
            }}
            >
                Change
            </button>
        </div>
    )
}

export default Profile;