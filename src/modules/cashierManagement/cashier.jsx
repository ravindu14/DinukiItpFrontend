import React, { Component } from "react";

import Layout from "components/mainLayout";
import Tabs from "components/tabs";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";
import Button from "components/button";

import "./styles.scss";

class CashierPage extends Component {
  render() {
    return (
      <Layout>
        <div className="main-page">
          <Tabs
            items={[
              {
                title: "Cashier",
                content: (
                  <div className="cashier-page">
                    <Row>
                      <Col size="4">
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
                            <Row>
                              <Col>
                                <Button>Search</Button>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="field-label" sm={12} md={6}>
                                Product Name
                              </Col>
                              <Col sm={12} md={6}>
                                <Input id="productName" onChange={() => {}} />
                              </Col>
                            </Row>
                            <Row>
                              <Col className="field-label" sm={12} md={6}>
                                Size
                              </Col>
                              <Col sm={12} md={6}>
                                <Input id="productSize" onChange={() => {}} />
                              </Col>
                            </Row>
                            <Row>
                              <Col className="field-label" sm={12} md={6}>
                                Color
                              </Col>
                              <Col sm={12} md={6}>
                                <Input id="productColor" onChange={() => {}} />
                              </Col>
                            </Row>
                            <Row>
                              <Col className="field-label" sm={12} md={6}>
                                Unit Price
                              </Col>
                              <Col sm={12} md={6}>
                                <Input
                                  id="productUnitPrice"
                                  onChange={() => {}}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col className="field-label" sm={12} md={6}>
                                Quantity
                              </Col>
                              <Col sm={12} md={6}>
                                <Input
                                  id="productQuantity"
                                  onChange={() => {}}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col className="field-label" sm={12} md={6}>
                                Discount
                              </Col>
                              <Col sm={12} md={6}>
                                <Input
                                  id="productDiscount"
                                  onChange={() => {}}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col className="field-label" sm={12} md={6}>
                                Line Total
                              </Col>
                              <Col sm={12} md={6}>
                                <Input id="productTotal" onChange={() => {}} />
                              </Col>
                            </Row>
                            <Row className="button-container">
                              <Col>
                                <Button>Reset</Button>
                              </Col>
                              <Col>
                                <Button>Add</Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <div className="table-container">
                          <div className="table-section">
                            <table>
                              <tbody>
                                <tr className="table-heading">
                                  <th>Product Code</th>
                                  <th>Product Name</th>
                                  <th>Unit Price</th>
                                  <th>Quantity</th>
                                  <th>Discount</th>
                                  <th>Line Total</th>
                                  <th>Action</th>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="label-container">
                          <Row>
                            <Col className="field-label" sm={12} md={6}>
                              Net Total
                            </Col>
                            <Col sm={12} md={6}>
                              <Input id="netTotal" onChange={() => {}} />
                            </Col>
                          </Row>
                          <Row>
                            <Col className="field-label" sm={12} md={6}>
                              Cashier
                            </Col>
                            <Col sm={12} md={6}>
                              <Input id="cashierId" onChange={() => {}} />
                            </Col>
                          </Row>
                          <Row>
                            <Col className="field-label" sm={12} md={6}>
                              Sales Person
                            </Col>
                            <Col sm={12} md={6}>
                              <Input id="salesPersonId" onChange={() => {}} />
                            </Col>
                          </Row>
                          <Row>
                            <Col className="field-label" sm={12} md={6}>
                              Customer Payment
                            </Col>
                            <Col sm={12} md={6}>
                              <Input id="netDiscount" onChange={() => {}} />
                            </Col>
                          </Row>
                          <Row>
                            <Col className="field-label" sm={12} md={6}>
                              Customer Balance
                            </Col>
                            <Col sm={12} md={6}>
                              <Input id="netDiscount" onChange={() => {}} />
                            </Col>
                          </Row>
                        </div>
                        <div className="sales-button">
                          <Button type={Button.TYPE.SUCCESS}>
                            Finalize Order
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )
              },
              {
                title: "Returns",
                content: (
                  <div className="return-page">
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
                          <Button className="search-button">Search</Button>
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
                              Return Reason
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
                              Cashier
                            </Col>
                            <Col sm={12} md={6}>
                              <Input id="productCode" onChange={() => {}} />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </div>
                )
              },
              {
                title: "My Sales",
                content: <div className="return-page">sales</div>
              }
            ]}
          />
        </div>
      </Layout>
    );
  }
}
export default CashierPage;
