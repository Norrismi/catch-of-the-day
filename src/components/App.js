import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import NotFound from "./NotFound";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  // componentDidMount() {
  //   const { params } = this.props.match;
  //   this.ref = base.syncState(`${params.storeId}/fishes`, {
  //     context: this,
  //     state: "fishes"
  //   });
  // }

  addFish = fish => {
    //Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    //Add our new fish to that variable
    fishes[`fish ${Date.now()}`] = fish;
    //Set the new fishes object to state
    //fishes: fishes
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //take a copy of state
    const order = { ...this.state.order };
    //either add to the order, or update the number in out order
    order[key] = order[key] + 1 || 1;
    //call setState to update out state object
    //order:order
    this.setState({ order });
  };

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
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => (
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              ))}
            </ul>
          </div>
          <Order fishes={this.state.fishes} order={this.state.order} />
          <Inventory
            addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes}
          />
        </div>
      </div>
    );
  }
}

export default App;
