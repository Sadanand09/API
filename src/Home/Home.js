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
            <div>
                <p className="font-extrabold text-center text-5xl"></p>
            </div>

            <div className='flex flex-wrap justify-center'>
                {
                    items.map((items, index) => {
                        return (
                            <div>
                                <div>
                                    <App key={index} id={items.id} title={items.title} price={items.price}
                                        description={items.description} category={items.category}
                                        image={items.image} />
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </>
    )
}

export default Home
