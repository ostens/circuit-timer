import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import TimerForm from "../TimerForm/TimerForm";
import TimerList from "../TimerList/TimerList";
import TimerPage from "../TimerPage/TimerPage";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Circuit timer app</h1>
          <BrowserRouter>
            <Switch>
              <Redirect exact from="/" to={"/timers"} />
              <Route exact path={"/timers"} component={TimerList} />
              <Route exact path={"/timers/new"} component={TimerForm} />
              <Route exact path={"/timers/1"} component={TimerPage} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
