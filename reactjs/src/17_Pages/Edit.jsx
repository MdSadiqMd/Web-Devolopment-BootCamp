import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../17_Components/Text";
import {exportComponentAsJPEG} from "react-component-export-image";

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1);
    }

    const memeref=createRef();

    return (
        <div>
            <div>
                <img ref={memeref} src={params.get("url")} width="250px" alt="meme" />
                {
                    Array(count).fill(0).map((e, index) => (
                        <Text key={index} />
                    ))
                }
            </div>
            <button onClick={addText}>Add Text</button>
            <button onClick={(e)=>{exportComponentAsJPEG(memeref)}}>Save</button>
        </div>
    )
}

export default EditPage;
