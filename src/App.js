import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import history from "./history";

import "./App.css";
import AppLayout from "./component/AppLayout";
import store from "./store/Store";
import "./styles/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <AppLayout history={history} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
