// @flow
import { type Action } from "shared/types/ReducerAction";
import {
  type AsyncStatusType,
  type NotificationType
} from "shared/types/General";

import { ASYNC_STATUS } from "constants/async";
import {
  ASYNC_EMPLOYEE_INIT,
  HANDLE_NOTIFICATION,
  GET_EMPLOYEE_SUCCESS,
  INIT_EMPLOYEE
} from "actionTypes/employee";

export type EmployeeStateType = {
  status: AsyncStatusType,
  notification: NotificationType,
  employees: Array<any>,
  employee: null | object
};

const initialState: EmployeeStateType = {
  status: ASYNC_STATUS.INIT,
  notification: null,
  employees: [],
  employee: null
};

function asyncEmployeeInit(state: EmployeeStateType) {
  return {
    ...state,
    status: ASYNC_STATUS.LOADING,
    notification: null
  };
}

function handleNotification(
  state: EmployeeStateType,
  { isSuccess, notification }
) {
  return {
    ...state,
    notification,
    status: isSuccess ? ASYNC_STATUS.SUCCESS : ASYNC_STATUS.FAILURE
  };
}

export default (
  state: EmployeeStateType = initialState,
  { type, payload = {} }: Action
) => {
  switch (type) {
    case ASYNC_EMPLOYEE_INIT:
      return asyncEmployeeInit(state);
    case HANDLE_NOTIFICATION:
      return handleNotification(state, payload);
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        status: ASYNC_STATUS.SUCCESS,
        employees: payload
      };
    case INIT_EMPLOYEE:
      return {
        ...state,
        status: ASYNC_STATUS.INIT,
        notification: null
      };
    default:
      return state;
  }
};
