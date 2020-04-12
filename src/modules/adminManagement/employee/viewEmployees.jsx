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

import { getEmployees, deleteEmployee } from "action/employee";
import { ASYNC_STATUS } from "constants/async";
import { filters } from "constants/user";

import "./styles.scss";

type AdminViewEmployeePageProps = {
  getEmployees: Function,
  deleteEmployee: Function,
  status: AsyncStatusType,
  notification: NotificationType,
  employees: Array<any>
};

type AdminViewEmployeePageState = {
  filters: {
    employeeName: string,
    employeeType: string,
    nic: string
  }
};
class AdminViewEmployeePage extends Component<
  AdminViewEmployeePageProps,
  AdminViewEmployeePageState
> {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        employeeName: "",
        employeeType: "",
        nic: ""
      }
    };

    // $FlowFixMe
    this.onChangeFilterField = this.onChangeFilterField.bind(this);
    // $FlowFixMe
    this.resetEmployeeFilter = this.resetEmployeeFilter.bind(this);
    // $FlowFixMe
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    this.props.getEmployees({ ...filters });
  }

  resetEmployeeFilter() {
    this.setState(({ form }) => ({
      form: {
        ...form,
        employeeName: "",
        employeeType: "",
        nic: ""
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

  deleteEmployee(employeeId) {
    this.props.deleteEmployee(employeeId);
  }

  render() {
    const {
      filters: { employeeName, employeeType, nic }
    } = this.state;

    const { status, notification, employees } = this.props;

    return (
      <Layout
        breadcrumbs={["View Employees"]}
        actions={
          <Fragment>
            <Button
              type={Button.TYPE.DANGER}
              onClick={this.resetEmployeeFilter}
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
                <Col>
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Employee Name
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="employeeName"
                        text={employeeName}
                        onChange={employeeName =>
                          this.onChangeFilterField({ employeeName })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      Employee Type
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="employeeType"
                        text={employeeType}
                        onChange={employeeType =>
                          this.onChangeFilterField({ employeeType })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="field-label" sm={12} md={6}>
                      NIC
                    </Col>
                    <Col sm={12} md={6}>
                      <Input
                        id="nic"
                        text={nic}
                        onChange={nic => this.onChangeFilterField({ nic })}
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
                      <th>Employee Name</th>
                      <th>Employee Type</th>
                      <th>Contact Number</th>
                      <th>Address</th>
                      <th>NIC</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                    {employees.length > 0 &&
                      employees.map(employee => {
                        return (
                          <tr key={employee.employeeId}>
                            <td>{employee.employeeId}</td>
                            <td>{employee.employeeName}</td>
                            <td>{employee.employeeType}</td>
                            <td>{employee.contactNumber}</td>
                            <td>{employee.address}</td>
                            <td>{employee.nic}</td>
                            <td>{employee.email}</td>
                            <td>
                              <Button
                                type={Button.TYPE.DANGER}
                                onClick={() =>
                                  this.deleteEmployee(employee.employeeId)
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
    status: state.employee.status,
    notification: state.employee.notification,
    employees: state.employee.employees
  };
}

const Actions = {
  getEmployees,
  deleteEmployee
};

export default connect(mapStateToProps, Actions)(AdminViewEmployeePage);
