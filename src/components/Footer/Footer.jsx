import React from 'react'
import styleFooter from './Footer.module.css'

function Footer() {
    return (
    <div className={styleFooter.div}>
        
        <h1 className={styleFooter.finish}>Bize muraciet edin</h1> 
        <ul className={styleFooter.foot}>
            <li>Unvan</li>
            <li>Elaqe: 1234567</li>

        </ul>
        
    
    </div>
)
}


export default Footer