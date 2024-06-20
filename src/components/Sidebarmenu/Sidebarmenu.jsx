import React, { useState } from 'react';
import style from './Sidebarmenu.module.css';

function Sidebarmenu() {
const [showSubMenu, setShowSubMenu] = useState({
    games: false,
    electronics: false
});

const handleMouseEnter = (menu) => {
    setShowSubMenu((prev) => ({
    ...prev,
    [menu]: true
    }));
};

const handleMouseLeave = (menu) => {
    setShowSubMenu((prev) => ({
    ...prev,
    [menu]: false
    }));
};

    return (
    <div className={style.menu}>
        <h1>MENU</h1>
        <ul>
            <li><a href='#bestsellers'>Bestsellers</a></li>
            <li 
            onMouseEnter={() => handleMouseEnter('games')}
            onMouseLeave={() => handleMouseLeave('games')} >
                    <a href='#game and toys'>Game and Toys</a>
            {showSubMenu.games && (
            <ul className={style.submenu}>
                <li><a href='#board-games'>Board Games</a></li>
                <li><a href='#video-games'>Video Games</a></li>
                <li><a href='#puzzles'>Puzzles</a></li>
            </ul>
        )}
        </li>
        <li><a href='#gifts'>Gifts</a></li>
        <li
        onMouseEnter={() => handleMouseEnter('electronics')}
        onMouseLeave={() => handleMouseLeave('electronics')}
        >
        <a href='#electronics'>Electronics</a>
        {showSubMenu.electronics && (
            <ul className={style.submenu}>
            <li><a href='#mobiles'>Mobiles</a></li>
            <li><a href='#computers'>Computers</a></li>
            <li><a href='#accessories'>Accessories</a></li>
            </ul>
        )}
        </li>
        <li><a href='#handicrafts'>Handicrafts</a></li>
    </ul>
    </div>
);
}

export default Sidebarmenu;
