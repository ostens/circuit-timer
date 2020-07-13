import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import TimerForm from "../TimerForm/TimerFormContainer";
import TimerList from "../TimerList/TimerListContainer";
import SelectedTimer from "../SelectedTimer/SelectedTimer";
import { path } from "../../constants";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Redirect exact from="/" to={path.list} />
          <Route exact path={path.list} component={TimerList} />
          <Route exact path={path.form} component={TimerForm} />
          <Route exact path={`${path.list}/:id`} component={SelectedTimer} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
