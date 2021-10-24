import React from 'react';
import axios from 'axios';
// import useState from 'react';

import '../styles/ShopCard.css';
import jeans from './jeans.png';

function ShopCard(props) {

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
    var userData = {userData: { id: props.user_info.user_name}};

    const resetBalance = (e) => {
            axios.post("/resetBalance", {
                userData
            }).then((res) => res.data)
        };

    const reedeemHandler = (e) => {
        console.log("redeeming");
        resetBalance(e);
        props.setUserHandler(props.user_info.user_name, 0, props.user_info.cur_prog, props.user_info.cur_quest);
        // resetQuests();
    };

    return (
        <div class="card">
            <img src={jeans} alt="Denim Jeans" style={{ width:`100%` }} />
            <h1>Tailored Jeans</h1>
            <p class="initPrice">$19.99</p>
            <p class="price">{"$" + (Math.round((19.99 - (props.currency/1000)) * 100) / 100)}</p>
            <p>Some text about the jeans..</p>
            <p><button onClick={reedeemHandler}>Add to Cart</button></p>
        </div>
    );
}

export default ShopCard
