import React from "react";
import { Route, Switch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import NewInputPage from "./pages/NewInputPage";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={({ match }) => <NewInputPage match={match} />}
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
