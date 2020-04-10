import React, { Component, Fragment } from "react";

import Layout from "components/adminLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";

import "./styles.scss";

class AdminAddEmployeePage extends Component {
  render() {
    return (
      <Layout
        breadcrumbs={["Add New Employee"]}
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
        <div className="add-employee">
          <div className="add-employee-container">
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Employee Id
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
                    Employee Name
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
                    Employee Type
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
                    NIC
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
                    Email
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
                    Salary Per Month
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
export default AdminAddEmployeePage;
