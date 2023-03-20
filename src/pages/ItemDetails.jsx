
import { useEffect, useState} from "react"
import { useParams} from "react-router-dom"

function ItemDetails(){
    const params = useParams()

    const [product, setProduct] = useState()

    useEffect( ()=>
    {
        fetch('https://dummyjson.com/products/' + params.id)
        .then (async (res) => await res.json())
        .then(i => setProduct(i))

    },[])


    return (
      <div>
        {product == null?
        <p>Loading...</p>
        :
        <>
            
            {/* <p>{product.title}</p>
            <p>{product.description}</p>
            <img src={product.images[0]} alt="" /> */}
            <div className='container'>  
                <div className='card'>
                    <h1> {product.title}</h1>
                     <img src={product.images[0]}/> 
                     <p> {product.description}</p>
                     <p> P {product.price} </p>
                     <p>Discount: {product.descriptionPercentage}%</p>
            </div>  
        </div>
            
        </>
        }
      </div>
    )
}

export default ItemDetails