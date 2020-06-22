import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import TimerForm from "../TimerForm/TimerFormContainer";
import TimerList from "../TimerList/TimerList";
import TimerPage from "../TimerPage/TimerPage";
import "./App.scss";

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Redirect exact from="/" to={"/timers"} />
              <Route exact path={"/timers"} component={TimerList} />
              <Route exact path={"/timers/new"} component={TimerForm} />
              <Route exact path={"/timers/1"} component={TimerPage} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
