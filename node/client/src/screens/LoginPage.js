import React, {Component} from 'react';
import {Container, Grid, Typography, TextField, Button, FormControlLabel, Paper} from '@material-ui/core';
import axios from 'axios';
import logo from './img/minecart.png';
import "./App.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            failed: false
        }
    }

    render() {
        return (
            <div class="animated-background" style={{height: "100vh", backgroundColor: "#EF6351"}}>
                <div>
                    <Container>
                        <img src={logo} style={{paddingTop: "10%", marginBottom: "-5%", display: "block", marginLeft: "auto", marginRight: "auto", width:"50vh"}} component="h1" variant="h3" />
                        <Typography className="typography" style={{paddingTop: "5%", textAlign: "center"}} component="h1" variant="h6">
                            Craft a New Retail Future.
                        </Typography>
                    </Container>
                    <Container component="main" maxWidth="sm" style={{paddingTop: "3%"}}>
                        <Paper style={{backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center"}} elevation={24}>

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
                                    onClick = {this.handleSubmit}
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
                        </Paper>
                    </Container>
                </div>
            </div>
        )
    }
}

export default LoginPage;