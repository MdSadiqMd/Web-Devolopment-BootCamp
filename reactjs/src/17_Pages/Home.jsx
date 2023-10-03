import React, { useEffect, useState } from 'react'
import MemeCard from '../17_Components/Card'
import { getAllMemes } from '../17_api/memes'

export const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMemes().then((memes) => setData(memes.data.memes))
    }, [])

    return (
        <div className='row'>
            {data.map((el) => (
                <MemeCard key={el.id} img={el.url} title={el.name} />
            ))}
        </div>
    )
}

export default HomePage
