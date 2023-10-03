import React from "react";
import { useSearchParams } from "react-router-dom";

const EditPage=()=>{
    const [params]=useSearchParams();
    return (
        <div>
            <img src={params.get("url")} width="250px" alt="meme"/>
        </div>
    )
}

export default EditPage;