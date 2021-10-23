import React from "react";

import Header from '../components/Header';
import ShopCard from '../components/ShopCard';

function ShoppingScreen() {
    return (
        <div>
            <Header/>
            <h1>Buy Things!</h1>
            <ShopCard/>
        </div>
      );
}

export default ShoppingScreen;
