function ProductCard(post){
    
    return (
    <a href= {"/products/" + post.post.id} >
        <div className='container'>  
            <div className='card'>
             <h1> {post.post.title}</h1>
            <img src={post.post.images[0]}/> 
            <p> {post.post.description}</p>
            <p> P {post.post.price} </p>
            <p>Discount: {post.post.descriptionPercentage}%</p>
            </div>  
        </div>

    </a>
    )
}

export default ProductCard