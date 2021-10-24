import React from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import axios from 'axios';

import '../styles/Login.css';



class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userData: { id: ''}, redirect: false};
    }



    render() {

        var userData = this.state.userData;
        const getUserInfo = (e) => {
            axios.post("/getUser", {
                userData
            }).then((res) => res.data)
            .then((data) => {
                this.props.setUserHandler(data.username, data.currency, data.cur_prog, data.cur_quest);
            }).then(() => this.props.loginHandler())
            .then({handleLeave});
            // setLogin(true);
            this.props.loginHandler();
            // this.props.handler(userData.id);
        };

        const handleLeave = () => {
            this.setState({ redirect: true });
        }

        const handleSubmit = (event) => {
            // const history = useHistory();
            getUserInfo(event);
            this.setState({redirect: true});
            console.log(this.state.redirect);
            event.preventDefault();
          };

        const handleChange = (event) => {
            // setUserID(event.target.value);
            this.setState({userData: {id: event.target.value}});
          };

        // if (this.state.redirect) {
        //    return <Redirect to='/'/>;
        //  }

        // function LoginFunction (props) {
        //     return !props.redirect ? (
        //         <form onSubmit={props.handleSubmit}>
        //             <label>
        //               UUID:
        //               <input type="text" value={props.user_name} onChange={props.handleChange} />
        //             </label>
        //             <input type="submit" value="Submit" />
        //           </form>
        //     ) : (<Redirect to='/'/>);
        // }

        // return (<LoginFunction redirect = {this.state.redirect} handleSubmit ={handleSubmit} handleChange={handleChange} user_name={this.state.userData.id}/>);
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                      UUID:
                      <input type="text" value={this.state.user_name} onChange={handleChange} />
                    </label>
                        <input type="submit" value="Submit" />
                    <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h1>goback</h1>
                    </Link>
                  </form>
            </div>
        );
    }
}

export default LoginScreen;
