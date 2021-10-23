import React from 'react';
// import useState from 'react';

import '../styles/ShopCard.css';
import jeans from './jeans.png';

function ShopCard() {

    /** 
    const [isLoggedIn, setLogin] = React.useState(false);

    const handleLogin = (e) =>  {
        e.target.style.color = 'black';
        setLogin(true);
    }

    function darkenFont(e) {
        if (!isLoggedIn) {
            e.target.style.color = 'green';
        }
      }

    function lightenFont(e) {
        if (!isLoggedIn) {
            e.target.style.color = 'black';
        }
    }
    */

    return (
        <div class="card">
            <img src={jeans} alt="Denim Jeans" style={{ width:`100%` }} />
            <h1>Tailored Jeans</h1>
            <p class="initPrice">$19.99</p>
            <p class="price">$18.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
    );
}

export default ShopCard