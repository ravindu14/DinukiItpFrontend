import React, { Component, Fragment } from "react";

import Layout from "components/inventoryLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";

import "./styles.scss";

class AddProductPage extends Component {
  render() {
    return (
      <Layout
        breadcrumbs={["Add New Product"]}
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
        <div className="add-product">
          <div className="add-product-container">
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Product Code
                  </Col>
                  <Col sm={12} md={6}>
                    <Input id="productCode" onChange={() => {}} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Product Name
                  </Col>
                  <Col sm={12} md={6}>
                    <Input id="productCode" onChange={() => {}} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Size
                  </Col>
                  <Col sm={12} md={6}>
                    <Input id="productCode" onChange={() => {}} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Price
                  </Col>
                  <Col sm={12} md={6}>
                    <Input id="productCode" onChange={() => {}} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Quantity
                  </Col>
                  <Col sm={12} md={6}>
                    <Input id="productCode" onChange={() => {}} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Store Location
                  </Col>
                  <Col sm={12} md={6}>
                    <Input id="productCode" onChange={() => {}} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}
export default AddProductPage;
