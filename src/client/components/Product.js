import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Media } from "reactstrap";
import * as actionCreators from "../redux/actions";
import AddToCart from "./AddToCart";
import Price from "./Price";

class Product extends React.Component {
  componentDidMount() {
    const { product, actions, match } = this.props;
    if (!product) {
      const productId = parseInt(match.params.id, 10);
      actions.getProducts(productId);
    }
  }

  render() {
    const { products, match } = this.props;
    const productId = parseInt(match.params.id, 10);
    const product = products.ids.length && products.byId[productId];
    if (!product) {
      return null;
    }
    return (
      <Media>
        <Media left>
          <img src={product.url} alt="product" />
        </Media>
        <Media body>
          <Media heading>{product.name}</Media>
          <div>{product.description}</div>
          <div>
            Price: <Price value={product.price} />
          </div>
          <AddToCart product={product} />
        </Media>
      </Media>
    );
  }
}

const mapStateToProps = (state, props) => ({
  products: state.products
});

const mapDisptachToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDisptachToProps)(Product);
