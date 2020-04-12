// @flow
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  type AsyncStatusType,
  type NotificationType
} from "shared/types/General";

import Layout from "components/adminLayout";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";
import Loader from "components/loader";
import Alert from "components/Alert";

import { getSuppliers, deleteSupplier } from "action/supplier";
import { ASYNC_STATUS } from "constants/async";
import { filters } from "constants/user";

import "./styles.scss";

type AdminViewSupplierPageProps = {
  getSuppliers: Function,
  deleteSupplier: Function,
  status: AsyncStatusType,
  notification: NotificationType,
  suppliers: Array<any>
};

type AdminViewSupplierPageState = {
  filters: {
    supplierCode: string,
    supplierName: string
  }
};
class AdminViewSupplierPage extends Component<
  AdminViewSupplierPageProps,
  AdminViewSupplierPageState
> {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        supplierCode: "",
        supplierName: ""
      }
    };

    // $FlowFixMe
    this.onChangeFilterField = this.onChangeFilterField.bind(this);
    // $FlowFixMe
    this.resetSupplierFilter = this.resetSupplierFilter.bind(this);
    // $FlowFixMe
    this.deleteSupplier = this.deleteSupplier.bind(this);
  }

  componentDidMount() {
    this.props.getSuppliers({ ...filters });
  }

  resetSupplierFilter() {
    this.setState(({ form }) => ({
      form: {
        ...form,
        supplierCode: "",
        supplierName: ""
      }
    }));
  }

  onChangeFilterField(value) {
    this.setState(({ form }) => ({
      form: {
        ...form,
        ...value
      }
    }));
  }

  deleteSupplier(supplierCode) {
    this.props.deleteSupplier(supplierCode);
  }

  render() {
    const {
      filters: { supplierCode, supplierName }
    } = this.state;

    const { status, notification, suppliers } = this.props;

    return (
      <Layout
        breadcrumbs={["View Suppliers"]}
        actions={
          <Fragment>
            <Button
              type={Button.TYPE.DANGER}
              onClick={this.resetSupplierFilter}
            >
              Reset
            </Button>
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
          <div className="view-employee">
            <div className="filter-container">
              <Row>
                <Col size="3">
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Supplier Code
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="supplierCode"
                        text={supplierCode}
                        onChange={supplierCode =>
                          this.onChangeFilterField({ supplierCode })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col size="3">
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Supplier Name
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="supplierName"
                        text={supplierName}
                        onChange={supplierName =>
                          this.onChangeFilterField({ supplierName })
                        }
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
                      <th>Supplier Id</th>
                      <th>Supplier Name</th>
                      <th>Contact Number</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                    {suppliers.length > 0 &&
                      suppliers.map(supplier => {
                        return (
                          <tr key={supplier.supplierCode}>
                            <td>{supplier.supplierCode}</td>
                            <td>{supplier.supplierName}</td>
                            <td>{supplier.contactNumber}</td>
                            <td>{supplier.contactNumber}</td>
                            <td>
                              <Button
                                type={Button.TYPE.DANGER}
                                onClick={() =>
                                  this.deleteSupplier(supplier.supplierCode)
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
    status: state.supplier.status,
    notification: state.supplier.notification,
    suppliers: state.supplier.suppliers
  };
}

const Actions = {
  getSuppliers,
  deleteSupplier
};

export default connect(mapStateToProps, Actions)(AdminViewSupplierPage);
