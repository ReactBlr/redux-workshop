import React from "react";
import { Media } from "reactstrap";
import AddToCart from "./AddToCart";
import Price from "./Price";
import { connect } from "react-redux";

export class Product extends React.Component {
  render() {
    const { product } = this.props;
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

export default connect((state, props) => {
  return {
    product: state.products.find(
      p => p.id === parseInt(props.match.params.id, 10)
    )
  };
})(Product);
