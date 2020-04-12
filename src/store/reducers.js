// @flow
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth, { type AuthStateType } from "reducers/auth";
import product, { type ProductStateType } from "reducers/product";
import employee, { type EmployeeStateType } from "reducers/employee";
import supplier, { type SupplierStateType } from "reducers/supplier";
import leave, { type LeaveStateType } from "reducers/leave";

export type ApplicationState = {
  auth: AuthStateType,
  product: ProductStateType,
  employee: EmployeeStateType,
  supplier: SupplierStateType,
  leave: LeaveStateType
};

export default (history: History) =>
  combineReducers({
    auth,
    product,
    employee,
    supplier,
    leave,
    router: connectRouter(history)
  });
