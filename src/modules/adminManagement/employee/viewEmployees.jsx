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
        breadcrumbs={["View Employees"]}
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
        <div className="view-employee">
          <div className="filter-container">
            <Row>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Employee Name
                  </Col>
                  <Col sm={12} md={6}>
                    <Input />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Employee Type
                  </Col>
                  <Col sm={12} md={6}>
                    <Input />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    NIC
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
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee Type</th>
                    <th>Contact Number</th>
                    <th>Address</th>
                    <th>NIC</th>
                    <th>Email</th>
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
