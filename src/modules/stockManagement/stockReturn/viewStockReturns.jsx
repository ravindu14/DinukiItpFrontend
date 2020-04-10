import React, { Component, Fragment } from "react";

import Layout from "components/inventoryLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";

import "./styles.scss";

class ViewStockReturnsPage extends Component {
  render() {
    return (
      <Layout
        breadcrumbs={["View Returns"]}
        actions={
          <Fragment>
            <Button type={Button.TYPE.SUCCESS} onClick={() => {}}>
              Search
            </Button>
          </Fragment>
        }
      >
        <div className="view-returns">
          <div className="filter-container">
            <Row>
              <Col size="3">
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Return Id
                  </Col>
                  <Col sm={12} md={6}>
                    <Input />
                  </Col>
                </Row>
              </Col>
              <Col size="3">
                <Row>
                  <Col className="field-label" sm={12} md={6}>
                    Date
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
                    <th>Return Id</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Date</th>
                    <th>Reason</th>
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
export default ViewStockReturnsPage;
