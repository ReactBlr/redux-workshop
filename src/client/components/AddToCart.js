import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import * as actionCreators from "../redux/actions";

class AddToCart extends React.Component {
  render() {
    const {
      actions: { addItemsToCart },
      cartItems: { isLoading },
      product
    } = this.props;
    return (
      <Button
        className="mt-4"
        color="primary"
        onClick={() => addItemsToCart(product)}
      >
        Add to cart
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartItems
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
