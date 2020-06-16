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
              <Redirect exact from="/" to={"/list"} />
              <Route exact path={"/form"} component={TimerForm} />
              <Route exact path={"/page"} component={TimerPage} />
              <Route exact path={"/list"} component={TimerList} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
