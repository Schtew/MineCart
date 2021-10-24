import React from "react";

import Header from '../components/Header';
import ShopCard from '../components/ShopCard';

class ShoppingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header user_info={this.props.user_info} loggedIn={this.props.loggedIn} setUserHandler={this.props.setUserHandler} loginHandler = {this.props.loginHandler}/>
                <ShopCard user_info={this.props.user_info} setUserHandler={this.props.setUserHandler} currency = {this.props.user_info.currency}/>
            </div>
          );
    }
}

export default ShoppingScreen;
