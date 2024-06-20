import React from 'react'
import StyleList from './ProductList.module.css'
import { ProductImgMath, ProductImgLiterature, ProductImgGeography } from '../../images'
import {useState} from 'react'


function ProductList() {




    const products = [
        {id:1, name: "Math", price: 10, image: ProductImgMath },
        {id:2, name: "Literature", price: 20, image: ProductImgLiterature },
        {id:3, name: "Geography", price: 30, image: ProductImgGeography } ,

    ]

    const Product = ({ product }) => (
        <div className={StyleList.product}>
            <img src={product.image} alt={product.name}></img>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={addData}>Buy</button>
            <span>{num}</span>
            <button onClick={removeData}>Remove</button>
        </div>
    );

    const [num, setNum] = useState(0)
    const addData = () => {
        setNum(a => a + 1)
    }


    const removeData = () => {
        setNum(a => a - 1)
    }

console.log(num);


return (
    <div className={StyleList.list}>
        {products.map(product =>(
            <Product key={product.id} product={product} />
        ))}
    </div>
    
)
}

export default ProductList
