import React, { useEffect, useState } from 'react'



function Jwellery() {
    const[fake,setFake]=useState([])
    console.log(fake);
    useEffect(()=>{
        const fakestore=async() =>{
            const response=await fetch("https://fakestoreapi.com/products/category/jewelery");
            // console.log(response)
            const jsonData=await response.json()
            // console.log(jsonData)
            setFake(jsonData)
        }
        fakestore();
    },[])
     
    
    
    return (
        <>
            <div className="container">

                {fake.map((values)=>{
                    return(
                        <>
                        <div className='box'>
                    <div className="heart">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </a>

                    </div>

                    <img src={values.image}></img>
                    <div className="content">
                        <p>{values.title}</p>
                        <p>${values.price}</p>
                        <p>{values.rating.rate}</p>
                        <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>Add to Cart</button>
                    </div>

                </div>
                        </>
                    )
                })}
                
           </div>

        </>
    )
}
export default Jwellery