import React,{useState} from 'react';
import { useEffect } from 'react';


const Cart = ({cart, setCart, handleChange}) => {
    const[fake,setFake]=useState([])
    console.log(fake);
    useEffect(()=>{
        const fakestore=async() =>{
            const response=await fetch("https://fakestoreapi.com/products");
            
            const jsonData=await response.json()
           
            setFake(jsonData)
        }
        fakestore();
    },[])
    const [price, setPrice] = useState(fake);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
    </article>
  )
}

export default Cart