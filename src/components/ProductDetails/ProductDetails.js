import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { getProductId } from '../../Apiservice/Api'
import { Link, useParams } from 'react-router-dom'
function ProductDetails() {

    const { id } = useParams()
    const [ProductDetails, setProductDetails] = useState({})
    useEffect(() => {
        const fetchProductDetails = async () => {
            const data = await getProductId(id)
            setProductDetails(data)
        }
        fetchProductDetails()
    }, [id])

    const handleBuyNow =()=>{
        window.confirm("The productis out of stock")
    }
    return (
        <div className='productd-details'>
            <img src={ProductDetails.image} alt='Image' className='Image' />
            <div className='product-info'>
                <h2 className='product-title'>{ProductDetails.title}</h2>
                <p className='product-description'>
                    {ProductDetails.description}
                </p>
                <p className='product-price'>
                    ${ProductDetails.price}
                </p>
                <button className='button' onClick={handleBuyNow}>Buy Now</button>
                <Link to='/'>
                    <button className='go- back'>Go back Home</button>
                </Link>

            </div>
        </div>
    )
}

export default ProductDetails
