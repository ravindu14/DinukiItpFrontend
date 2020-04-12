// @flow
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  type AsyncStatusType,
  type NotificationType
} from "shared/types/General";

import Layout from "components/inventoryLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";
import Loader from "components/loader";
import Alert from "components/Alert";

import {
  getCustomerReturns,
  deleteCustomerReturn
} from "action/customerReturn";
import { ASYNC_STATUS } from "constants/async";
import { filters } from "constants/user";

import "./styles.scss";

type ViewStockReturnsPageProps = {
  getCustomerReturns: Function,
  deleteCustomerReturn: Function,
  status: AsyncStatusType,
  notification: NotificationType,
  customerReturns: Array<any>
};

type ViewStockReturnsPageState = {
  filters: {
    returnId: string,
    date: string
  }
};

class ViewStockReturnsPage extends Component<
  ViewStockReturnsPageProps,
  ViewStockReturnsPageState
> {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        returnId: "",
        date: ""
      }
    };

    // $FlowFixMe
    this.onChangeFilterField = this.onChangeFilterField.bind(this);
    // $FlowFixMe
    this.resetReturnFilter = this.resetReturnFilter.bind(this);
    // $FlowFixMe
    this.deleteCustomerReturn = this.deleteCustomerReturn.bind(this);
  }

  componentDidMount() {
    this.props.getCustomerReturns({ ...filters });
  }

  resetReturnFilter() {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        returnId: "",
        date: ""
      }
    }));
  }

  onChangeFilterField(value) {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        ...value
      }
    }));
  }

  deleteCustomerReturn(returnId) {
    this.props.deleteCustomerReturn(returnId, { ...filters });
  }

  render() {
    const {
      filters: { returnId, date }
    } = this.state;

    const { status, notification, customerReturns } = this.props;

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
        {notification && (
          <Alert type={notification.type}>{notification.message}</Alert>
        )}
        {status === ASYNC_STATUS.LOADING ? (
          <Loader isLoading />
        ) : (
          <div className="view-returns">
            <div className="filter-container">
              <Row>
                <Col size="3">
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Return Id
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="returnId"
                        text={returnId}
                        onChange={returnId =>
                          this.onChangeFilterField({ returnId })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col size="3">
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Date
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="date"
                        type="date"
                        text={date}
                        onChange={date => this.onChangeFilterField({ date })}
                      />
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
                      <th>Action</th>
                    </tr>
                    {customerReturns.length > 0 &&
                      customerReturns.map(customerReturn => {
                        return (
                          <tr key={customerReturn.returnId}>
                            <td>{customerReturn.returnId}</td>
                            <td>{customerReturn.productCode}</td>
                            <td>{customerReturn.ProductName}</td>
                            <td>{customerReturn.color}</td>
                            <td>{customerReturn.size}</td>
                            <td>{customerReturn.date}</td>
                            <td>{customerReturn.reason}</td>
                            <td>
                              <Button
                                type={Button.TYPE.DANGER}
                                onClick={() =>
                                  this.deleteCustomerReturn(
                                    customerReturn.returnId
                                  )
                                }
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.customerReturn.status,
    notification: state.customerReturn.notification,
    customerReturns: state.customerReturn.customerReturns
  };
}

const Actions = {
  getCustomerReturns,
  deleteCustomerReturn
};

export default connect(mapStateToProps, Actions)(ViewStockReturnsPage);
