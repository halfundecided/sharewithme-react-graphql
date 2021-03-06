import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";
import Search from "./Search";
import "../Styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/new/:page" component={LinkList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
