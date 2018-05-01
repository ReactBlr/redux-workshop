import React from "react";
import { Badge } from "reactstrap";
import { connect } from "react-redux";
import { fetchCartItems } from "../actions";

class CartBadge extends React.Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }
  render() {
    const { cartItems } = this.props;
    if (!cartItems) {
      return null;
    }
    return cartItems.length ? (
      <Badge color="dark">{cartItems.length}</Badge>
    ) : null;
  }
}

export default connect(state => ({ cartItems: state.cartItems }), {
  fetchCartItems
})(CartBadge);
