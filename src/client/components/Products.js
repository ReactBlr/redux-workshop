import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import * as productActionCreators from "../redux/actions";
import Price from "./Price";
import ProductSelect from "./ProductSelect";

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

class Products extends React.Component {
  componentDidMount() {
    const { productActions, match } = this.props;
    const brand = match.params.brand;
    productActions.getProducts(brand);
  }

  componentWillReceiveProps(nextProps) {
    const { match, productActions } = this.props;
    if (nextProps.match.params.brand !== match.params.brand) {
      productActions.getProducts(nextProps.match.params.brand);
    }
  }

  render() {
    const { products, match } = this.props;
    // const brand = match.params.brand;
    // const filteredProducts =
    //   brand ?
    //     Object.values(products.byId).filter(product => {
    //       console.log(product.brand);
    //       return product.brand.toLowerCase() === brand.toLowerCase();
    //     })
    //     : Object.values(products.byId);
    return (
      <div>
        Products
        <ListGroup>
          {Object.values(products.byId).map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  productActions: bindActionCreators(productActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
