import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";
import Header from "./Header";
import { Container } from "reactstrap";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.incrementCounter();
    this.props.setFirstName();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header location={this.props.location} />
        <Container className="mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    couter: state.counter
    // firstName: state.user.firstName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () =>
      dispatch({
        type: "INCREMENT"
      }),
    setFirstName: () =>
      dispatch({
        type: "SET_FIRST_NAME",
        firstName: "kiran"
      })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
