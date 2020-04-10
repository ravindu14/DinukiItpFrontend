import React, { Component, Fragment } from "react";

import Layout from "components/adminLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";

import "./styles.scss";

class AdminViewProductPage extends Component {
  render() {
    return (
      <Layout
        breadcrumbs={["View Products"]}
        actions={
          <Fragment>
            <Button type={Button.TYPE.DANGER} onClick={() => {}}>
              Reset
            </Button>
            <Button type={Button.TYPE.SUCCESS} onClick={() => {}}>
              Save
            </Button>
          </Fragment>
        }
      >
        <div className="view-product">
          <div className="filter-container">
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Supplier
                  </Col>
                  <Col sm={12} md={6}>
                    <Input />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Size
                  </Col>
                  <Col sm={12} md={6}>
                    <Input />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Color
                  </Col>
                  <Col sm={12} md={6}>
                    <Input />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Store Location
                  </Col>
                  <Col sm={12} md={6}>
                    <Input />
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default AdminViewProductPage;
