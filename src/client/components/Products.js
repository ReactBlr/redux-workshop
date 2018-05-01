import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import ProductSelect from "./ProductSelect";
import Price from "./Price";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";

function Product({ product }) {
  return (
    <ListGroupItem>
      <div className="row">
        <div className="col-auto mr-auto">
          <ProductSelect product={product} />
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </div>
        <div className="col-auto">
          <Price value={product.price} />
        </div>
      </div>
    </ListGroupItem>
  );
}

export class Products extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products } = this.props;
    return (
      <div>
        Products
        <ListGroup>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default connect(state => ({ products: state.products }), {
  fetchProducts
})(Products);
