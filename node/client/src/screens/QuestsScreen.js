import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
// import CardContent from "@material-ui/core/CardContent";
// import Route from 'react-router-dom';

import '../styles/MainPage.css';
import questBanner from '../img/questBanner.png';

import Header from '../components/Header';

class QuestsScreen extends React.Component {


    constructor(props) {
        super(props);
        // this.state = {progress: 0};
        // this.handler = this.handler.bind(this);
        this.state = {userID: '', progress: 0, redeemedQuest: false};
    }

    render() {
        // const [data, setData] = React.useState(null);
        const progress = this.props.progress;

        var userData = {userData: { id: this.props.user_info.user_name}};

        const resetQuests = (e) => {
            axios.post("/resetQuests", {
                userData
            }).then((res) => res.data)
        };

        const handler = (progress) => {
            console.log("caling handler",progress);
            this.setState({
                progress: progress
            })
        };


        const reedeemHandler = (e) => {
            console.log("redeeming");
            resetQuests(e);
            this.props.setUserHandler(this.props.user_info.user_name, this.props.user_info.currency+100, 0, 0);
            this.setState({
                redeemedQuest: true
            });
            //resetQuests();
        };

        class Quest extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                console.log(this.props.redeemed);

                const styles =  makeStyles({
                  card: {
                    maxWidth: 300,
                    backgroundColor: '#fff',
                    margin: "auto",
                    transition: "20s",
                    boxShadow: "0 8px 40px 12px rgba(0,0,0,0.2)",
                    "&:hover": {
                      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.2)"
                    }
                  },
                    content: {
                        textAlign: "left",
                        // padding: muiBaseTheme.spacing.unit * 3
                      }
                    });

                return (
                    <Card style = {{
                        maxWidth: 600,
                        backgroundColor: '#fff',
                        margin: "auto",
                        marginBottom: 40,
                        borderRadius: 15,
                        transition: "20s",
                        boxShadow: "0 8px 40px 5px rgba(0,0,0,0.1)",
                        "&:hover": {
                          boxShadow: "0 16px 70px -5px rgba(0,0,0,0.1)"
                        }
                        }}>
                        <CardContent style = {{
                            textAlign: "left"
                        }}>
                            <CardContent style = {{
                                display: "flex",
                                flexDirection: "row"

                            }}>
                              <Typography
                                className={"MuiTypography--heading"}
                                variant={"h4"}
                                gutterBottom
                                align={"center"}
                              >

                                {this.props.description}
                            </Typography>
                            <Typography
                                className={"MuiTypography--heading"}
                                variant={"h4"}
                                gutterBottom
                                align={"center"}
                              >

                                Reward: 100 Points
                            </Typography>
                          </CardContent>
                          <CardContent style = {{
                                display: "flex",
                                flexDirection: "row"

                            }}>
                              <div className="Bar">
                                 <ProgressBar completed={this.props.progress} bgColor="green" />
                               </div>
                               <Button variant="contained" disabled={this.props.redeemed || this.props.progress != 100} onClick={reedeemHandler}>Redeem</Button>
                           </CardContent>
                        </CardContent>
                    </Card>
                );
            }
        };


        // handleChange(e) {
        //     this.props.onProgressChange(e.target.value);
        //   };

        // React.useEffect(() => {
        //     fetch("/")
        //       .then((res) => res.json())
        //       .then((data) => setData(data.message));
        // }, []);

        return (
            <div>
                <Header user_info={this.props.user_info} loggedIn={this.props.loggedIn} setUserHandler={this.props.setUserHandler} handler ={handler} loginHandler = {this.props.loginHandler}/>
                {/*<h1 className="Title">Quests</h1>*/}
                <Typography
                        style = {{
                                marginBottom: 35
                            }}
                        variant={"h3"}
                        gutterBottom
                        align={"center"}
                      >
                        Quests
                      </Typography>
                {/*<div className="ProgressBar" >
                  <h1 className="Words">Kill 10 Zombies</h1>
                  <ProgressBar completed={this.props.user_info.progress >= 10 ? 100 : (this.props.user_info.progress / 10) * 100} bgColor="green" />
                </div>*/}
                <Quest description = "Nike™ Kill 10 Zombies" redeemed = {this.state.redeemedQuest} progress={this.props.user_info.cur_quest == 1 ? (this.props.user_info.cur_prog >= 10 ? 100 : (this.props.user_info.cur_prog / 10) * 100) : 0}/>
                <Quest description = "Publix™ Collect 5 Carrots" redeemed = {this.state.redeemedQuest} progress={this.props.user_info.cur_quest == 2 ? (this.props.user_info.cur_prog >= 5 ? 100 : (this.props.user_info.cur_prog / 5) * 100) : 0}/>
                <Quest description = "Nike™ Shoot Your Shot" redeemed = {this.state.redeemedQuest} progress={this.props.user_info.cur_quest == 3 ? (this.props.user_info.cur_prog >= 3 ? 100 : (this.props.user_info.cur_prog / 3) * 100) : 0}/>
                {/*<button> Add Quest </button>*/}
            </div>
          );
    }

}

export default QuestsScreen;
