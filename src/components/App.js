import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import NotFound from "./NotFound";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={StorePicker} />
              <Route path="/store/:storeId" component={App} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Wes Is Cool" />
          </div>
          <Order />
          <Inventory />
        </div>
      </div>
    );
  }
}

export default App;
