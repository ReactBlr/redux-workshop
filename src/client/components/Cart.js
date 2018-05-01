import React from "react";
import { ListGroup, ListGroupItem, Alert } from "reactstrap";
import DeleteCartItem from "./DeleteCartItem";
import { connect } from "react-redux";

function CartItem({ cartItem }) {
  return (
    <ListGroupItem>
      <div className="row">
        <div className="col-auto mr-auto">{cartItem.product.name}</div>
        <div className="col-auto">
          <DeleteCartItem id={cartItem.id} />
        </div>
      </div>
    </ListGroupItem>
  );
}

export class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    if (!cartItems.length) {
      return <Alert color="primary">Cart is empty</Alert>;
    }
    return (
      <ListGroup>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ListGroup>
    );
  }
}

export default connect(state => ({ cartItems: state.cartItems }))(Cart);
