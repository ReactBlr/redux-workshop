import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Alert } from "reactstrap";
import ProductSelect from "./ProductSelect";
import Price from "./Price";

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
  render() {
    const { products } = this.props;
    if (!(products && products.length)) {
      return <Alert color="primary">There are no products yet</Alert>;
    }
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

export default Products;
