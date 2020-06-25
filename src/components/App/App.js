import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import TimerForm from "../TimerForm/TimerFormContainer";
import TimerList from "../TimerList/TimerListContainer";
import TimerPage from "../TimerPage/TimerPageContainer";
import { path } from "../../constants";
import "./App.scss";

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Redirect exact from="/" to={path.list} />
              <Route exact path={path.list} component={TimerList} />
              <Route exact path={path.form} component={TimerForm} />
              <Route exact path={`${path.list}/:id`} component={TimerPage} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
