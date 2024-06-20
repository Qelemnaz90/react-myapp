import React from 'react'
import { Link } from 'react-router-dom'
import style from './About.module.css'

function About() {
    return (
        <div>
    
    <div className= {style.btn}>
        <button><Link to = '/'>Home</Link></button>
        <button><Link to = '/contact'>Contact</Link></button>
    </div>


        <h6>What We Sell :
            
            The University Bookshop is open to students and the public.

We sell a wide range of recommended texts for all academic subjects. Outside of academic texts, we have a range of fiction and non-fiction, all recommended by us or our customers, as well as children’s books and gifts.

• Blue Dot Books are 50% off – this includes many children’s books and a selection of fiction and non-fiction

• Blind Date with a Book – a wrapped mystery book for just £5

• Next day ordering – most books can be ordered to arrive in the shop the following day

• Free gift-wrapping service

• Events – the bookshop works with the University to host guest speakers and run book signings

University Merchandise
Varsity jackets, hoodies, sweatshirts, and joggers are available in store in a range of sizes and colours. If we don’t have your size, we can order them in for you.</h6>
</div>
)
}

export default About
