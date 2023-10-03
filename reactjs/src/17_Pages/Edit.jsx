import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../17_Components/Text";

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <div>
                <img src={params.get("url")} width="250px" alt="meme" />
                {
                    Array(count).fill(0).map((e, index) => (
                        <Text key={index} />
                    ))
                }
            </div>
            <button onClick={addText}>Add Text</button>
        </div>
    )
}

export default EditPage;
