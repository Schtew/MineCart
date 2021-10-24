import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Card, CardContent, Typography, Button } from '@mui/material';
// import useState from 'react';

import '../styles/Header.css';

// const handleLogin = () => set

function PageNames() {
    function darkenFont(e) {
        e.target.style.color = 'black';
    }

    function lightenFont(e) {
        e.target.style.color = 'rgb(215, 215, 215)';
    }

    return (
        <div className="PageNames">
            <div className="PageName">
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    {/*<h1 onMouseOver={darkenFont} onMouseLeave={lightenFont} >Home</h1>*/}
                    <Typography
                        onMouseOver={darkenFont}
                        onMouseLeave={lightenFont}
                        className={"MuiTypography--heading"}
                        variant={"h5"}

                        align={"center"}
                      >
                        Home
                    </Typography>
                </Link>
            </div>
            <div className="PageName">
                <Link to='/shopping' style={{ textDecoration: 'none', color: 'inherit' }}>
                   <Typography
                        onMouseOver={darkenFont}
                        onMouseLeave={lightenFont}
                        className={"MuiTypography--heading"}
                        variant={"h5"}

                        align={"center"}
                      >
                        Shopping
                    </Typography>
                </Link>
            </div>
            <div className="PageName">
                <Typography
                    onMouseOver={darkenFont}
                    onMouseLeave={lightenFont}
                    className={"MuiTypography--heading"}
                    variant={"h5"}

                    align={"center"}
                  >
                    Search
                </Typography>
            </div>
        </div>
    );
}

// function Login() {

// }



class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {userData: { id: '7777777777'}, isLoggedIn: false, isLoggingIn: false};
    }

    render () {

    // const [userID, setUserID] = React.useState('');
    // const [user, setUser] = React.useState(null);
    // const [balance, setBalance] = React.useState(null);
    // const [quest1prog, setQuest1Prog] = React.useState(0);
    // const [isLoggedIn, setLogin] = React.useState(false);
    // const [isLoggingIn, setLoggingIn] = React.useState(false);

    var userData = this.state.userData;

    // React.useEffect(() => {
    //     fetch("/getUser")
    //       .then((res) => res.json())
    //       .then((data) => setData(data));
    // }, []);

    const getUserInfo = (e) => {
        axios.post("/getUser", {
            userData
        }).then((res) => res.data)
        .then((data) => {
            // setUser(data.username);
            this.setState({
                user: data.username,
                currency: data.currency
            });
            this.props.handler(data.quest_one);
            this.props.setUserHandler(data.username, data.currency, data.quest_one);
            // setBalance(data.currency);
            // setQuest1Prog(data.quest_one >= 10 ? 100 : (data.quest_one / 10) * 100);
        });
        // setLogin(true);
        this.setState({isLoggedIn: true});
        this.props.loginHandler();
        // this.props.handler(userData.id);
    }

    class Currency extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div className="Currency">
                    {/*<Typography
                        className={"MuiTypography--heading"}
                        variant={"h5"}
                        gutterBottom
                        align={"center"}
                        style={{ textDecoration: 'none', color: 'inherit', margin: 'auto' }}
                      >
                        Points:
                    </Typography>*/}
                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h5"}
                        gutterBottom
                        align={"center"}
                        style={{ textDecoration: 'none', color: 'inherit', margin: 'auto' }}
                      >
                        {this.props.isLoggedIn ? "Points: " + this.props.currency : 'log in to see balance'}
                    </Typography>
                    {/*<h1>{this.props.isLoggedIn ? this.props.currency : 'log in to see balance'}</h1>*/}
                </div>
            );
        }
    }

    // class Login extends React.Component {
    function Login(props) {
        // constructor(props) {
        //     super(props);
        //     this.handleChange = this.handleChange.bind(this);
        // }

        // render() {







            function darkenLogin(e) {
                if (!props.isLoggedIn) {
                    e.target.style.color = 'green';
                }
              }

            function lightenLogin(e) {
                if (!props.isLoggedIn) {
                    e.target.style.color = 'black';
                }
            }

            return props.isLoggingIn ? (
                <form onSubmit={props.handleSubmit}>
                    <label>
                      UUID:
                      <input type="text" value={props.userID} onChange={props.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
            ) : (
                <h1 onMouseOver={darkenLogin} onMouseLeave={lightenLogin} onClick={!props.isLoggedIn ? props.startLoggingIn : null}>{props.isLoggedIn ? props.user : 'Log In'}</h1>
            );
        // }
    };

    const handleLogin = (e) =>  {
        e.target.style.color = 'black';
        // setLogin(true);
        this.setState({isLoggedIn: true});
    }

    const startLoggingIn = (e) => {
                // setLoggingIn(true);
                this.setState({isLoggingIn: true});
            }

    const handleChange = (event) => {
                // setUserID(event.target.value);
                this.setState({userData: {id: event.target.value}});
              };

    const handleSubmit = (event) => {
                // console.log(userID);
                // userData.id = userID;
                // this.setState({userID: userID})
                // console.log(userData);
                getUserInfo(event);
                this.setState({isLoggingIn: false})
                // setLoggingIn(false);
                event.preventDefault();
              };

        return (
            <div className="Header">
                <Typography
                    className={"MuiTypography--heading"}
                    variant={"h4"}

                    align={"center"}
                  >
                    MineCart
                </Typography>
                <PageNames/>
                {/*<h1 onMouseOver={darkenLogin} onMouseLeave={lightenLogin} onClick={!isLoggedIn ? getUserInfo : null}>{isLoggedIn ? user : 'Log In'}</h1>*/}
                <Link to='/login' style={{ textDecoration: 'none', color: 'inherit', margin: 'auto' }}>
                    {/*<h1>{this.props.loggedIn ? this.props.user_info.user_name : "LOG IN"}</h1>*/}
                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h4"}

                        align={"center"}
                      >
                        {this.props.loggedIn ? this.props.user_info.user_name : "Log In"}
                    </Typography>
                </Link>
                {/*{<Login handleChange = {handleChange} handleSubmit={handleSubmit} startLoggingIn = {startLoggingIn} isLoggingIn = {this.state.isLoggingIn} isLoggedIn = {this.props.loggedIn} userID = {this.state.userData.id} user={this.props.user_info.user_name}/>}*/}
                <Currency isLoggedIn = {this.props.loggedIn} currency = {this.props.user_info.currency}/>
            </div>
        );
    }
}

export default Header
// const styles = StyleSheet.create()
