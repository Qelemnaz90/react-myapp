import React from 'react'
import { Link } from 'react-router-dom'
import style from './Contact.module.css'

function Contact() {
return (
<div>   
    <div className={style.but}>
                <button><Link to = '/'>Home</Link></button>
                <button><Link to = '/about'>About</Link></button>
    </div>
    


    <div className={style.inf}>
        <ul>Bizimle elaqe saxlayin</ul>
            <li>Unvan: Baki seheri</li>
            <li>Elaqe nomresi: 1234567</li>
            <li>email: bookbook@gmail.com</li>
    </div>

</div> 
)
}

export default Contact
