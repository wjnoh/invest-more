import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import NewPage from "./pages/NewPage";
import RecoPage from "./pages/RecoPage";
import InputPage from "./pages/InputPage";
import CompletePage from "./pages/CompletePage";
import InvestPage from "./pages/InvestPage";
import ScenarioPage from "./pages/ScenarioPage";

class App extends Component {
  componentDidMount() {
    fetch("http://122.99.178.40:5000/choosecharacter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customer_cd: "1000000001"
      })
    })
      .then(res => res.json())
      .then(json => this.updateUser1(json[0]));

    fetch("http://122.99.178.40:5000/choosecharacter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customer_cd: "1000000002"
      })
    })
      .then(res => res.json())
      .then(json => this.updateUser2(json[0]));
  }

  state = {
    user: {
      recommendation: "None"
    },
    user1: "",
    user2: "",
    chat: []
  };

  updateUser = user => {
    this.setState({
      user: user
    });
  };

  updateUser1 = user => {
    this.setState({
      user1: user
    });
  };

  updateUser2 = user => {
    this.setState({
      user2: user
    });
  };

  changeChat = inputChat => {
    this.setState({
      chat: inputChat
    });
  };

  addChat = inputChat => {
    if (JSON.stringify(this.state.chat) !== JSON.stringify([])) {
      this.setState({
        chat: this.state.chat.concat(inputChat)
      });
    }
  };

  render() {
    const { user, chat, user1, user2 } = this.state;
    const { history } = this.props;
    const { updateUser, changeChat, addChat } = this;

    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={({ match }) => (
              <ScenarioPage
                match={match}
                changeChat={changeChat}
                updateUser={updateUser}
                user1={user1}
                user2={user2}
              />
            )}
          />
          <Route
            exact
            path="/reco"
            render={({ match }) => <RecoPage match={match} user={user} />}
          />
          <Route
            exact
            path="/input"
            render={({ match }) => <InputPage match={match} />}
          />
          <Route
            exact
            path="/complete"
            render={({ match }) => <CompletePage match={match} />}
          />
          <Route
            exact
            path="/invest"
            render={({ match }) => (
              <InvestPage match={match} addChat={addChat} />
            )}
          />
          <Route
            exact
            path="/new"
            render={({ match }) => (
              <NewPage match={match} updateUser={updateUser} />
            )}
          />
          <Route
            exact
            path="/chat"
            render={({ match }) => <ChatPage match={match} chat={chat} />}
          />
          } />
        </Switch>
        <div className="scenario-btn" onClick={() => history.push("/")} />
      </>
    );
  }
}

export default withRouter(App);
