import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { Badge } from "reactstrap";

class CartBadge extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getCartItems();
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

const mapStateToProps = state => ({
  cartItems: state.cartItems
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartBadge);
