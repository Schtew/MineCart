import React, {Component} from 'react';
import {Container, Grid, Typography, TextField, Button, FormControlLabel, Paper} from '@material-ui/core';
import axios from 'axios';
import { Link, useHistory, Redirect } from "react-router-dom";
import logo from '../img/minecart.png';
import MineCartLobby from '../img/MineCartLobby.png';
import "../styles/App.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: { id: ''},
            failed: false
        }
    }

    render() {
        // var userData = this.state.userData;
        const getUserInfo = (e, userData) => {
            console.log(userData);
            axios.post("/getUser", {
                userData
            }).then((res) => res.data)
            .then((data) => {
                this.props.setUserHandler(data.username, data.currency, data.cur_prog, data.cur_quest);
            }).then(() => this.props.loginHandler());
        };

        const handleSubmit = (event) => {
            // const history = useHistory();
            var username = document.getElementById("username").value;
            var userData = {id: username};
            // this.setState({userData: {id: username}});
            getUserInfo(event, userData);
            // this.setState({redirect: true});
            // console.log(this.state.redirect);
            event.preventDefault();
          };
{/*<div class="animated-background" style={{height: "100vh", backgroundColor: "#EF6351"}}>*/}
        return (

            <div style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${MineCartLobby})`
                }}>
                <div>
                    <Container>
                        <img src={logo} style={{paddingTop: "10%", marginBottom: "-5%", display: "block", marginLeft: "auto", marginRight: "auto", width:"40vh"}} component="h1" variant="h3" />
                        <Typography className="typography" style={{paddingTop: "8%", textAlign: "center", color: 'white'}} component="h1" variant="h6">
                            Craft a New Retail Future.
                        </Typography>
                    </Container>
                    <Container component="main" maxWidth="sm" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                        <Paper style={{opacity: 0.7, backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center"}} elevation={24}>

                            <Typography className="typography" style={{paddingTop: "5%", marginBottom: "2%"}} component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <form>
                                <TextField
                                    className="typography"
                                    error = {this.state.failed}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    label="Username"
                                    id="username"
                                    autoFocus
                                    style={{width: "80%", marginLeft: "10%"}}
                                />
                                <Button
                                    className="typography"
                                    onClick = {handleSubmit}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{width: "80%", marginLeft: "10%", marginTop: "3%", marginBottom: "5%"}}
                                >
                                    Sign In
                                </Button>

                                <Grid container style={{marginBottom: "5%", backgroundColor:"#EF6351"}}>
                                    <Grid item xs style={{backgroundColor:"#EF6351"}}>
                                    </Grid>
                                </Grid>
                            </form>
                            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button
                                    className="typography"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{width: "80%", marginLeft: "10%", marginTop: "3%", marginBottom: "50%"}}
                                >
                                    Home
                                </Button>
                                {/*<Typography className="typography" style={{paddingTop: "5%", marginBottom: "2%", margin: 'auto'}} component="h1" variant="h5">
                                    Home
                                </Typography>*/}
                            </Link>
                        </Paper>
                    </Container>
                </div>
            </div>
        )
    }
}

export default LoginPage;
