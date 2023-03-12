import React, {useState, useEffect, useCallback} from 'react'

function Component1() {
    const [state1s, setState1s] = useState([]);
    useEffect(  ()=>{
        const aaa = async ()=>{
            const  res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setState1s(data);
        }
        aaa()
        
    }, []);
  return (
    <>
        <div>Component1</div>
        <div className='container'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-1 fakestore">            
            {
                state1s.map((item) => {
                    return (
                        <div className="col" key={item.id}>
                        <div className='card p-3 d-flex justify-content-between align-items-center' style={{height: "100%"}}>
                            <p className='text-center img-cont'>
                                <img src={item.image} alt={item.title} style={{width:"70px"}} />
                            </p>
                            <h2 className='fs-5 ttl'>{item.title}</h2>
                            <p className='fs-6'>Price: <b>₹{item.price}</b></p>  
                            <button className='btn btn-primary'>Add to Cart</button>                          
                        </div>
                        </div>                        
                    )                    
                })  
            }
            </div>
        </div>
        
    </>
  )
}

export default Component1

