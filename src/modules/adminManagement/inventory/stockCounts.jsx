import React, { Component, Fragment } from "react";

import Layout from "components/adminLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";

import "./styles.scss";

class AdminStockCountsPage extends Component {
  render() {
    return (
      <Layout
        breadcrumbs={["View Stock Counts"]}
        actions={
          <Fragment>
            <Button type={Button.TYPE.SUCCESS} onClick={() => {}}>
              Refresh
            </Button>
          </Fragment>
        }
      >
        <div className="stock-counts">
          <div className="stock-counts-container">
            <Row>
              <Col className="count-label" sm={12} md={6}>
                Total Stock
              </Col>
              <Col sm={12} md={6}>
                <Input />
              </Col>
            </Row>
            <Row>
              <Col className="count-label" sm={12} md={6}>
                Total Return Stock
              </Col>
              <Col sm={12} md={6}>
                <Input />
              </Col>
            </Row>
            <Row>
              <Col className="count-label" sm={12} md={6}>
                Total Damage Stock
              </Col>
              <Col sm={12} md={6}>
                <Input />
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}
export default AdminStockCountsPage;
