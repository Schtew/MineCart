import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import logo from './logo.svg';
import {render} from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import './styles/MainPage.css';

import Header from './components/Header';
import QuestsScreen from './screens/QuestsScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import LoginScreen from './screens/LoginScreen';
import LoginPage from './screens/LoginPage';


// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Switch>
//        <Route path='/' element={<QuestsScreen/>}/>
//        <Route path='/shopping' element={<ShoppingScreen/>}/>
//     </Switch>
//    </BrowserRouter>,
//    rootElement
// );

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user_info: {user_name: '', currency: 0, cur_prog: 0, cur_quest: 0}, loggedIn: false};
  }

  // React.useEffect(() => {
  //   fetch("/test")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // function clickAddQuest = () =>



  render() {

    const setUserHandler = (user_name, currency, cur_prog, cur_quest) => {
      console.log("hehe");
      this.setState({user_info:{user_name: user_name, currency: currency, cur_prog: cur_prog, cur_quest: cur_quest}});
    }

    const loginHandler = () => {
      this.setState({loggedIn: true});
    }

    return (
          // <button> Add Quest </button>}
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={() => <QuestsScreen user_info={this.state.user_info} loggedIn={this.state.loggedIn} setUserHandler={setUserHandler} loginHandler={loginHandler}/>}/>
              <Route exact path='/shopping' component={() => <ShoppingScreen user_info={this.state.user_info} loggedIn={this.state.loggedIn} setUserHandler={setUserHandler} loginHandler={loginHandler}/>}/>
              {/*<Route exact path='/login' component={() => <LoginScreen setUserHandler={setUserHandler} loginHandler={loginHandler}/>}/>*/}
              <Route exact path='/login' component={() => <LoginPage setUserHandler={setUserHandler} loginHandler={loginHandler}/>}/>
            </Switch>
          </BrowserRouter>
    );
  }
}

export default App;
