import React, { useState, useEffect } from 'react'
 import {Link} from 'react-router-dom'
import './HomePage.css'


import Products from './Products/Products'

function HomePage() {

    const [fake, setFake] = useState([])

    useEffect(() => {
        const fakestore = async () => {
            const response = await fetch("https://fakestoreapi.com/products");

            const jsonData = await response.json()

            setFake(jsonData)
        }

        fakestore();
    }, [])






    return (
        <>
            

            <div className='products'>
                <Products />

            </div>
        </>

    )
}


export default HomePage