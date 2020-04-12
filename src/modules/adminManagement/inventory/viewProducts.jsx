// @flow
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  type AsyncStatusType,
  type NotificationType
} from "shared/types/General";

import Layout from "components/adminLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";
import Loader from "components/loader";
import Alert from "components/Alert";

import { ASYNC_STATUS } from "constants/async";
import { getProducts, deleteProduct } from "action/product";
import { filters } from "constants/user";

import "./styles.scss";

type AdminViewProductPageProps = {
  getProducts: Function,
  deleteProduct: Function,
  status: AsyncStatusType,
  notification: NotificationType,
  products: Array<any>
};

type AdminViewProductPageState = {
  filters: {
    supplier: string,
    size: string,
    color: string,
    storeLocation: string
  }
};

class AdminViewProductPage extends Component<
  AdminViewProductPageProps,
  AdminViewProductPageState
> {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        supplier: "",
        size: "",
        color: "",
        storeLocation: ""
      }
    };

    // $FlowFixMe
    this.onChangeFilterField = this.onChangeFilterField.bind(this);
    // $FlowFixMe
    this.resetProductFilter = this.resetProductFilter.bind(this);
    // $FlowFixMe
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.props.getProducts({ ...filters });
  }

  resetProductFilter() {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        supplier: "",
        size: "",
        color: "",
        storeLocation: ""
      }
    }));
  }

  onChangeFilterField(value) {
    this.setState(({ form }) => ({
      filters: {
        ...form,
        ...value
      }
    }));
  }

  deleteProduct(productCode) {
    this.props.deleteProduct(productCode);
  }

  render() {
    const {
      filters: { supplier, storeLocation, size, color }
    } = this.state;

    const { status, notification, products } = this.props;

    return (
      <Layout
        breadcrumbs={["View Products"]}
        actions={
          <Fragment>
            <Button type={Button.TYPE.DANGER} onClick={this.resetProductFilter}>
              Reset
            </Button>
            <Button type={Button.TYPE.SUCCESS} onClick={() => {}}>
              Search
            </Button>
          </Fragment>
        }
      >
        {notification && (
          <Alert type={notification.type}>{notification.message}</Alert>
        )}
        {status === ASYNC_STATUS.LOADING ? (
          <Loader isLoading />
        ) : (
          <div className="view-product">
            <div className="filter-container">
              <Row>
                <Col>
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Supplier
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="supplier"
                        text={supplier}
                        onChange={supplier =>
                          this.onChangeFilterField({ supplier })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Size
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="size"
                        text={size}
                        onChange={size => this.onChangeFilterField({ size })}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Color
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="color"
                        text={color}
                        onChange={color => this.onChangeFilterField({ color })}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Store Location
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="storeLocation"
                        text={storeLocation}
                        onChange={storeLocation =>
                          this.onChangeFilterField({ storeLocation })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className="table-container">
              <div className="table-section">
                <table>
                  <tbody>
                    <tr className="table-heading">
                      <th>Product Code</th>
                      <th>Product Name</th>
                      <th>Supplier Code</th>
                      <th>Size</th>
                      <th>Price</th>
                      <th>Color</th>
                      <th>Margin</th>
                      <th>Quantity</th>
                      <th>Store Location</th>
                      <th>Action</th>
                    </tr>
                    {products.length > 0 &&
                      products.map(product => {
                        return (
                          <tr key={product.productCode}>
                            <td>{product.productCode}</td>
                            <td>{product.productName}</td>
                            <td>{product.supplierCode}</td>
                            <td>{product.size}</td>
                            <td>{product.price}</td>
                            <td>{product.color}</td>
                            <td>{product.margin}</td>
                            <td>{product.quantity}</td>
                            <td>{product.storeLocation}</td>
                            <td>
                              <Button
                                type={Button.TYPE.DANGER}
                                onClick={() =>
                                  this.deleteProduct(product.productCode)
                                }
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.product.status,
    notification: state.product.notification,
    products: state.product.products
  };
}

const Actions = {
  getProducts,
  deleteProduct
};

export default connect(mapStateToProps, Actions)(AdminViewProductPage);
