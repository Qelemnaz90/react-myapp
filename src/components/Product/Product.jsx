import React from 'react'
import styles from './Product.module.css'


function Product(props) {
    const {name,price} = props
    console.log(name);

    const [num, setNum] = useState(0)
    const addData = () => {
        setNum(a => a + 1)
    }



return (
    <div className={styles.tex2}>
        <h2 className={styles.name}>{name}</h2>
        <p>{price}</p>
        <button onClick={addData}>Buy</button>
        <button onClick={removeData}>Remove</button>
    </div>
)
}

export default Product

