import React, { Component, Fragment } from "react";

import Layout from "components/adminLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";

import "./styles.scss";

class AdminAddLeavesPage extends Component {
  render() {
    return (
      <Layout
        breadcrumbs={["Add Leaves"]}
        actions={
          <Fragment>
            <Button type={Button.TYPE.DANGER} onClick={() => {}}>
              Reset
            </Button>
            <Button type={Button.TYPE.SUCCESS} onClick={() => {}}>
              Apply Leaves
            </Button>
          </Fragment>
        }
      >
        <div className="add-leave">
          <div className="add-leave-container">
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
                <Button>Search</Button>
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
                    Leave Type
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
                    Reason
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
                    From
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
                    To
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
export default AdminAddLeavesPage;
