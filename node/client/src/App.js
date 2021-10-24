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
  }

  // React.useEffect(() => {
  //   fetch("/test")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // function clickAddQuest = () =>

  render() {
    return (
          // <button> Add Quest </button>}
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={QuestsScreen}/>
              <Route exact path='/shopping' component={ShoppingScreen}/>
            </Switch>
          </BrowserRouter>
    );
  }
}

export default App;
