import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'


function Navbar() {
    return (

        <div className={style.list}>
            
                <button><Link>Home</Link></button>
                <button><Link to= '/about'>About</Link></button>
                <button><Link to = '/contact'>Contact</Link></button>
                
        </div>
    
        
    )
}

export default Navbar