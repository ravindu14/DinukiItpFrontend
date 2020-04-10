import React, { Component, Fragment } from "react";

import Layout from "components/adminLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";

import "./styles.scss";

class AdminViewEmployeePage extends Component {
  render() {
    return (
      <Layout
        breadcrumbs={["View Suppliers"]}
        actions={
          <Fragment>
            <Button type={Button.TYPE.SUCCESS} onClick={() => {}}>
              Search
            </Button>
          </Fragment>
        }
      >
        <div className="view-employee">
          <div className="filter-container">
            <Row>
              <Col size="3">
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Supplier Code
                  </Col>
                  <Col sm={12} md={6}>
                    <Input />
                  </Col>
                </Row>
              </Col>
              <Col size="3">
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Supplier Name
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
                    <th>Supplier Id</th>
                    <th>Supplier Name</th>
                    <th>Contact Number</th>
                    <th>Address</th>
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
export default AdminViewEmployeePage;
