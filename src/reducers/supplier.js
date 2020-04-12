// @flow
import { type Action } from "shared/types/ReducerAction";
import {
  type AsyncStatusType,
  type NotificationType
} from "shared/types/General";

import { ASYNC_STATUS } from "constants/async";
import {
  ASYNC_SUPPLIER_INIT,
  HANDLE_NOTIFICATION,
  GET_SUPPLIERS_SUCCESS
} from "actionTypes/supplier";

export type SupplierStateType = {
  status: AsyncStatusType,
  notification: NotificationType,
  suppliers: Array<any>
};

const initialState: SupplierStateType = {
  status: ASYNC_STATUS.INIT,
  notification: null,
  suppliers: []
};

function asyncSupplierInit(state: SupplierStateType) {
  return {
    ...state,
    status: ASYNC_STATUS.LOADING,
    notification: null
  };
}

function handleNotification(
  state: SupplierStateType,
  { isSuccess, notification }
) {
  return {
    ...state,
    notification,
    status: isSuccess ? ASYNC_STATUS.SUCCESS : ASYNC_STATUS.FAILURE
  };
}

export default (
  state: SupplierStateType = initialState,
  { type, payload = {} }: Action
) => {
  switch (type) {
    case ASYNC_SUPPLIER_INIT:
      return asyncSupplierInit(state);
    case HANDLE_NOTIFICATION:
      return handleNotification(state, payload);
    case GET_SUPPLIERS_SUCCESS:
      return {
        ...state,
        status: ASYNC_STATUS.SUCCESS,
        suppliers: payload
      };
    default:
      return state;
  }
};
