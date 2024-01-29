import React, { useEffect, useState } from 'react'
import axios from 'axios'
import App from '../App'


function Home() {

    const [items, setitems] = useState([])

    const fetchNew = async () => {
        const response = await axios('https://fakestoreapi.com/products')
        setitems(response.data)
    }
    useEffect(() => {
        fetchNew();
    }, [])

    return (
        <>
            <div className=" flex flex-wrap justify-around">

                {
                    items.map((items, index) => {
                        return (<App key={index} id={items.id} title={items.title} price={items.price}
                            description={items.description.substring(0,115)} category={items.category}
                            image={items.image} />)
                    })
                }
            </div>

        </>
    )
}

export default Home
