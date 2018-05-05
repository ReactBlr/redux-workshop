import React from "react";
import { Badge } from "reactstrap";

class CartBadge extends React.Component {
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

export default CartBadge;
