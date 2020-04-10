// @flow
import React, { Component, Fragment } from "react";
import {
  type AsyncStatusType,
  type NotificationType
} from "shared/types/General";

import Input from "components/Input";
import Icon from "components/icon";
import Button from "components/button";
import Row from "components/Row";
import Col from "components/Col";
import Alert from "components/Alert";

import { ASYNC_STATUS } from "constants/async";
import { AUTH_TYPE } from "constants/auth";
import { hasWhiteSpace } from "shared/utils";
import { isEmail } from "shared/kernel/cast";

type SignUpPageProps = {
  status: AsyncStatusType,
  notification: NotificationType,
  isCapsLockActive: boolean,
  toggleAuthType: Function,
  onSignUpSubmit: Function
};

type SignUpPageState = {
  values: {
    firstName: string,
    lastName: string,
    email: string,
    companyName: string,
    country: string,
    city: string,
    phoneNumber: string,
    baseCurrency: string,
    industry: string,
    password: string,
    repeatPassword: string,
    role: string
  },
  errors: {
    firstName: null | string,
    lastName: null | string,
    email: null | string,
    companyName: null | string,
    country: null | string,
    city: null | string,
    phoneNumber: null | string,
    baseCurrency: null | string,
    industry: null | string,
    password: null | string,
    repeatPassword: null | string
  }
};

class SignUpPage extends Component<SignUpPageProps, SignUpPageState> {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        country: "",
        city: "",
        phoneNumber: "",
        baseCurrency: "",
        industry: "",
        password: "",
        repeatPassword: "",
        role: "admin"
      },
      errors: {
        firstName: null,
        lastName: null,
        email: null,
        companyName: null,
        country: null,
        city: null,
        phoneNumber: null,
        baseCurrency: null,
        industry: null,
        password: null,
        repeatPassword: null
      }
    };
    // $FlowFixMe
    this.resetForm = this.resetForm.bind(this);
    // $FlowFixMe
    this.validateForm = this.validateForm.bind(this);
    // $FlowFixMe
    this.setFormErrors = this.setFormErrors.bind(this);
    // $FlowFixMe
    this.handleInputChange = this.handleInputChange.bind(this);
    // $FlowFixMe
    this.toggleAuthType = this.toggleAuthType.bind(this);
    // $FlowFixMe
    this.onSubmitForm = this.onSubmitForm.bind(this);
    // $FlowFixMe
    this.onEnterKeyPress = this.onEnterKeyPress.bind(this);
  }

  componentDidMount() {
    this.resetForm();
  }

  resetForm() {
    this.setState({
      errors: {
        firstName: null,
        lastName: null,
        email: null,
        companyName: null,
        country: null,
        city: null,
        phoneNumber: null,
        baseCurrency: null,
        industry: null,
        password: null,
        repeatPassword: null
      }
    });
  }

  validateForm() {
    const {
      values: {
        firstName,
        lastName,
        email,
        companyName,
        country,
        city,
        phoneNumber,
        baseCurrency,
        industry,
        password,
        repeatPassword
      }
    } = this.state;

    let hasError = false;

    this.resetForm();

    if (firstName === "") {
      this.setFormErrors("firstName", "firstName is required.");
      hasError = true;
    }
    if (lastName === "") {
      this.setFormErrors("lastName", "lastName is required.");
      hasError = true;
    }
    if (email === "") {
      this.setFormErrors("email", "Email is required.");
      hasError = true;
    } else if (hasWhiteSpace(email)) {
      this.setFormErrors("email", "Email cannot contain spaces.");
      hasError = true;
    } else if (!isEmail(email)) {
      this.setFormErrors("email", "Email is invalid.");
      hasError = true;
    }

    if (companyName === "") {
      this.setFormErrors("companyName", "Company Name is required.");
      hasError = true;
    }
    if (country === "") {
      this.setFormErrors("country", "Country is required.");
      hasError = true;
    }
    if (city === "") {
      this.setFormErrors("city", "firstName is required.");
      hasError = true;
    }
    if (phoneNumber === "") {
      this.setFormErrors("phoneNumber", "Phone Number is required.");
      hasError = true;
    }
    if (baseCurrency === "") {
      this.setFormErrors("baseCurrency", "Base Currency is required.");
      hasError = true;
    }
    if (industry === "") {
      this.setFormErrors("industry", "industry is required.");
      hasError = true;
    }

    if (password === "") {
      this.setFormErrors("password", "Password is required.");
      hasError = true;
    } else if (password !== repeatPassword) {
      this.setFormErrors(
        "repeatPassword",
        "Password and Repeat password does not match."
      );
      hasError = true;
    }
    return hasError;
  }

  onEnterKeyPress(event) {
    if (event.key === "Enter") {
      this.onSubmitForm();
    }
  }

  onSubmitForm() {
    if (!this.validateForm()) {
      const {
        values: {
          firstName,
          lastName,
          email,
          companyName,
          country,
          city,
          phoneNumber,
          baseCurrency,
          industry,
          password,
          role
        }
      } = this.state;

      this.props.onSignUpSubmit({
        firstName,
        lastName,
        email: email.toLowerCase(),
        companyName,
        country,
        city,
        phone: phoneNumber,
        baseCurrency,
        industry,
        password,
        role
      });
    }
  }

  setFormErrors(field: string, message: string) {
    this.setState(({ errors }) => ({
      errors: {
        ...errors,
        [field]: message
      }
    }));
  }

  handleInputChange(value) {
    this.setState(({ values }) => ({
      values: {
        ...values,
        ...value
      }
    }));
  }

  toggleAuthType(authType: string) {
    const { toggleAuthType } = this.props;

    this.resetForm();
    toggleAuthType(authType);
  }

  render() {
    const { values, errors } = this.state;
    const { isCapsLockActive, status, notification } = this.props;

    return (
      <Fragment>
        {notification && (
          <Alert type={notification.type}>{notification.message}</Alert>
        )}
        <form autoComplete="off">
          <Row>
            <Col sm={12} md={6}>
              <div className="form-group">
                <label>First Name</label>
                <Input
                  placeholder="Enter your first name"
                  id="firstName"
                  text={values.firstName}
                  onChange={firstName => this.handleInputChange({ firstName })}
                  error={errors.firstName}
                />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="form-group">
                <label>Last Name</label>
                <Input
                  placeholder="Enter your last name"
                  id="lastName"
                  text={values.lastName}
                  onChange={lastName => this.handleInputChange({ lastName })}
                  error={errors.lastName}
                />
              </div>
            </Col>
          </Row>
          <div className="form-group">
            <label>Email</label>
            <Input
              placeholder="Eg: user@example.com"
              id="email"
              text={values.email}
              onChange={email => this.handleInputChange({ email })}
              error={errors.email}
              autoComplete={false}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Input
              placeholder="at least 6 characters including a number, a special character, lower case and upper case letters."
              id="password"
              text={values.password}
              onChange={password => this.handleInputChange({ password })}
              type="password"
              error={errors.password}
              autoComplete={false}
            />
            {isCapsLockActive && (
              <span className="warning">
                <Icon icon="exclamation-circle" />
                &nbsp; Warning: Caps lock enabled.
              </span>
            )}
          </div>
          <div className="form-group">
            <label>Repeat Password</label>
            <Input
              placeholder="repeat password"
              id="repeatPassword"
              text={values.repeatPassword}
              onChange={repeatPassword =>
                this.handleInputChange({ repeatPassword })
              }
              type="password"
              error={errors.repeatPassword}
              autoComplete={false}
              onKeyPress={this.onEnterKeyPress}
            />
            {isCapsLockActive && (
              <span className="warning">
                <Icon icon="exclamation-circle" />
                &nbsp; Warning: Caps lock enabled.
              </span>
            )}
          </div>
        </form>

        <div className="button-container">
          <Button
            htmlType={Button.HTML_TYPE.BUTTON}
            onClick={this.onSubmitForm}
            loading={status === ASYNC_STATUS.LOADING}
          >
            SignUp
          </Button>
        </div>
        <Fragment>
          <div className="secondary-link">
            Already have an account? &nbsp;
            <span
              onClick={() => this.toggleAuthType(AUTH_TYPE.SIGN_IN)}
              className="link"
            >
              SignIn
            </span>
          </div>
        </Fragment>
      </Fragment>
    );
  }
}

export default SignUpPage;
