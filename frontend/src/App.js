import React from "react";
import { Route, Switch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={({ match }) => <ChatPage match={match} />}
      />
    </Switch>
  );
}

export default App;
