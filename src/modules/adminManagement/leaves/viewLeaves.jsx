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

import { ASYNC_STATUS } from "constants/async";
import { getLeaves, deleteLeave } from "action/leave";
import { filters } from "constants/user";

import "./styles.scss";
import Alert from "components/Alert";
import Loader from "components/loader";

type AdminViewLeavesPageProps = {
  getLeaves: Function,
  deleteLeave: Function,
  status: AsyncStatusType,
  notification: NotificationType,
  leaves: Array<any>
};

type AdminViewLeavesPageState = {
  filters: {
    employeeId: string,
    from: string,
    to: string
  },
  errors: {
    employeeId: null | string,
    from: null | string,
    to: null | string
  }
};

class AdminViewLeavesPage extends Component<
  AdminViewLeavesPageProps,
  AdminViewLeavesPageState
> {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        employeeId: "",
        from: "",
        to: ""
      },
      errors: {
        employeeId: null,
        from: null,
        to: null
      }
    };

    // $FlowFixMe
    this.onChangeFilterField = this.onChangeFilterField.bind(this);
    // $FlowFixMe
    this.resetLeaveFilter = this.resetLeaveFilter.bind(this);
    // $FlowFixMe
    this.deleteLeave = this.deleteLeave.bind(this);
    // $FlowFixMe
    this.searchLeaves = this.searchLeaves.bind(this);
  }

  validateForm() {
    this.resetFormErrors();

    const {
      filters: { employeeId, from, to }
    } = this.state;

    let hasError = false;

    if (employeeId === "") {
      this.setFormErrors("employeeId", "EmployeeId is required.");
      hasError = true;
    }

    if (from === "") {
      this.setFormErrors("from", "Select starting date.");
      hasError = true;
    }

    if (to === "") {
      this.setFormErrors("to", "Select ending date.");
      hasError = true;
    }

    return hasError;
  }

  resetFormErrors() {
    this.setState({
      ...this.state,
      errors: {
        reason: null,
        from: null,
        to: null
      }
    });
  }

  setFormErrors(field: string, message: string) {
    this.setState(({ errors }) => {
      return {
        errors: {
          ...errors,
          [field]: message
        }
      };
    });
  }

  onChangeFilterField(value) {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        ...value
      }
    }));
  }

  deleteLeave(leaveId) {
    const { filters: options } = this.state;

    this.props.deleteLeave(leaveId, { ...filters, ...options });
  }

  searchLeaves() {
    const { getLeaves } = this.props;
    const { filters: options } = this.state;

    if (!this.validateForm()) {
      getLeaves({ ...filters, ...options });
    }
  }

  resetLeaveFilter() {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        employeeId: "",
        from: "",
        to: ""
      }
    }));
  }

  render() {
    const {
      filters: { employeeId, from: start, to },
      errors
    } = this.state;

    const { leaves, status, notification } = this.props;

    return (
      <Layout
        breadcrumbs={["View Leaves"]}
        actions={
          <Fragment>
            <Button type={Button.TYPE.DANGER} onClick={this.resetLeaveFilter}>
              Reset
            </Button>
            <Button type={Button.TYPE.SUCCESS} onClick={this.searchLeaves}>
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
          <div className="view-leaves">
            <div className="filter-container">
              <Row>
                <Col>
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Employee ID
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="employeeId"
                        text={employeeId}
                        onChange={employeeId =>
                          this.onChangeFilterField({ employeeId })
                        }
                        error={errors.employeeId}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      From
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="to"
                        type="date"
                        text={start}
                        onChange={from => this.onChangeFilterField({ from })}
                        error={errors.from}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      To
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="to"
                        type="date"
                        text={to}
                        onChange={to => this.onChangeFilterField({ to })}
                        error={errors.to}
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
                      <th>Employee Id</th>
                      <th>Leave Type</th>
                      <th>Reason</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Action</th>
                    </tr>
                    {leaves.length > 0 &&
                      leaves.map((leave, index) => {
                        return (
                          <tr key={index}>
                            <td>{leave.employeeId}</td>
                            <td>{leave.leaveType}</td>
                            <td>{leave.reason}</td>
                            <td>{leave.from}</td>
                            <td>{leave.to}</td>
                            <td>
                              <Button
                                type={Button.TYPE.DANGER}
                                onClick={() => this.deleteLeave(leave._id)}
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
    status: state.leave.status,
    notification: state.leave.notification,
    leaves: state.leave.leaves
  };
}

const Actions = {
  getLeaves,
  deleteLeave
};

export default connect(mapStateToProps, Actions)(AdminViewLeavesPage);
