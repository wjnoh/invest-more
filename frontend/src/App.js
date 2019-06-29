import React from "react";
import { Route, Switch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import NewPage from "./pages/NewPage";
import RecoPage from "./pages/RecoPage";
import InputPage from "./pages/InputPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={({ match }) => <NewPage match={match} />} />
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
        path="/chat"
        render={({ match }) => <ChatPage match={match} />}
      />
      } />
    </Switch>
  );
}

export default App;
