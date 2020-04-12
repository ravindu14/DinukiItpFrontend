// @flow
import { type Action } from "shared/types/ReducerAction";
import {
  type AsyncStatusType,
  type NotificationType
} from "shared/types/General";

import { ASYNC_STATUS } from "constants/async";
import {
  ASYNC_CUSTOMER_RETURN_INIT,
  HANDLE_NOTIFICATION,
  GET_CUSTOMER_RETURN_SUCCESS
} from "actionTypes/customerReturn";

export type CustomerReturnStateType = {
  status: AsyncStatusType,
  notification: NotificationType,
  customerReturns: Array<any>
};

const initialState: CustomerReturnStateType = {
  status: ASYNC_STATUS.INIT,
  notification: null,
  customerReturns: []
};

function asyncCustomerReturnInit(state: CustomerReturnStateType) {
  return {
    ...state,
    status: ASYNC_STATUS.LOADING,
    notification: null
  };
}

function handleNotification(
  state: CustomerReturnStateType,
  { isSuccess, notification }
) {
  return {
    ...state,
    notification,
    status: isSuccess ? ASYNC_STATUS.SUCCESS : ASYNC_STATUS.FAILURE
  };
}

export default (
  state: CustomerReturnStateType = initialState,
  { type, payload = {} }: Action
) => {
  switch (type) {
    case ASYNC_CUSTOMER_RETURN_INIT:
      return asyncCustomerReturnInit(state);
    case HANDLE_NOTIFICATION:
      return handleNotification(state, payload);
    case GET_CUSTOMER_RETURN_SUCCESS:
      return {
        ...state,
        status: ASYNC_STATUS.SUCCESS,
        customerReturns: payload
      };
    default:
      return state;
  }
};
