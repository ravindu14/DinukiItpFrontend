import React, { Component, Fragment } from "react";

import Layout from "components/adminLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";

import "./styles.scss";

class AdminAddSuppliersPage extends Component {
  render() {
    return (
      <Layout
        breadcrumbs={["Add New Supplier"]}
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
        <div className="add-supplier">
          <div className="add-supplier-container">
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Supplier Id
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
                    Address
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
                    Contact Number
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
export default AdminAddSuppliersPage;
