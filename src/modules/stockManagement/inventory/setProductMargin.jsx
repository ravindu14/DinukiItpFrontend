import React, { Component, Fragment } from "react";

import Layout from "components/inventoryLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";

import "./styles.scss";

class ProductMarginPage extends Component {
  render() {
    return (
      <Layout
        breadcrumbs={["UpdateProduct"]}
        actions={
          <Fragment>
            <Button type={Button.TYPE.DANGER} onClick={() => {}}>
              Reset
            </Button>
            <Button type={Button.TYPE.SUCCESS} onClick={() => {}}>
              Set Margin
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
                    <Button className="search-button">Search</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Supplier Name
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
                    Set margin
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
export default ProductMarginPage;
