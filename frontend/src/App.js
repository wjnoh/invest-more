import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import NewPage from "./pages/NewPage";
import RecoPage from "./pages/RecoPage";
import InputPage from "./pages/InputPage";
import CompletePage from "./pages/CompletePage";
import InvestPage from "./pages/InvestPage";
import ScenarioPage from "./pages/ScenarioPage";

function App(props) {
  const { history } = props;

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={({ match }) => <NewPage match={match} />}
        />
        <Route
          exact
          path="/reco"
          render={({ match }) => <RecoPage match={match} />}
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
          render={({ match }) => <InvestPage match={match} />}
        />
        <Route
          exact
          path="/scenario"
          render={({ match }) => <ScenarioPage match={match} />}
        />
        <Route
          exact
          path="/chat"
          render={({ match }) => <ChatPage match={match} />}
        />
        } />
      </Switch>
      <div className="scenario-btn" onClick={() => history.push("/scenario")} />
    </>
  );
}

export default withRouter(App);
