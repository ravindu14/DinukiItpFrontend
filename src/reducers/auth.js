// @flow
import { type Action } from "shared/types/ReducerAction";
import {
  type AsyncStatusType,
  type NotificationType
} from "shared/types/General";

import { USER_ROLES } from "constants/user";
import { ASYNC_STATUS } from "constants/async";
import {
  ASYNC_AUTH_INIT,
  HANDLE_NOTIFICATION,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT_SUCCESS,
  AUTH_AUTHENTICATION_FAILURE,
  GET_INVITED_USER_INFO_SUCCESS,
  PASSWORD_RESET_SUCCESS,
  RESET_PASSWORD_EMAIL_SENT_SUCCESS
} from "actionTypes/auth";

export type AuthStateType = {
  status: AsyncStatusType,
  notification: NotificationType,
  isAuthenticated: boolean,
  isUserInitiated: boolean,
  role: null | typeof USER_ROLES.ADMIN,
  isAuthSuccess: boolean,
  isEmailSent: boolean,
  isPasswordReset: boolean,
  user: null | Object,
  invitedUser: null | Object
};

const initialState: AuthStateType = {
  status: ASYNC_STATUS.INIT,
  notification: null,
  isAuthenticated: true,
  isUserInitiated: true,
  role: USER_ROLES.ADMIN,
  isAuthSuccess: true,
  isEmailSent: false,
  user: null,
  invitedUser: null,
  isPasswordReset: false
};

function userInitiatedSuccess(state) {
  return state;
}

function asyncAuthInit(state: AuthStateType) {
  return {
    ...state,
    status: ASYNC_STATUS.LOADING,
    notification: null,
    isAuthSuccess: false,
    isEmailSent: false,
    isPasswordReset: false
  };
}

function handleNotification(state: AuthStateType, { isSuccess, notification }) {
  return {
    ...state,
    notification,
    status: isSuccess ? ASYNC_STATUS.SUCCESS : ASYNC_STATUS.FAILURE
  };
}

export default (
  state: AuthStateType = initialState,
  { type, payload = {} }: Action
) => {
  switch (type) {
    case "USER_INITIATED_SUCCESS":
      return userInitiatedSuccess(state, payload);
    case ASYNC_AUTH_INIT:
      return asyncAuthInit(state);
    case HANDLE_NOTIFICATION:
      return handleNotification(state, payload);
    case AUTH_SIGN_UP_SUCCESS:
      return {
        ...state,
        isEmailSent: true,
        isAuthSuccess: true,
        isUserInitiated: true,
        user: payload,
        status: ASYNC_STATUS.SUCCESS
      };
    case AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthSuccess: true,
        isUserInitiated: true,
        user: payload,
        status: ASYNC_STATUS.SUCCESS
      };
    case AUTH_SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isAuthSuccess: false,
        user: null,
        notification: null,
        status: ASYNC_STATUS.SUCCESS
      };
    case AUTH_AUTHENTICATION_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        notification: null,
        isUserInitiated: true,
        status: ASYNC_STATUS.FAILURE
      };
    case GET_INVITED_USER_INFO_SUCCESS:
      return {
        ...state,
        invitedUser: payload,
        status: ASYNC_STATUS.SUCCESS
      };
    case RESET_PASSWORD_EMAIL_SENT_SUCCESS:
      return {
        ...state,
        isEmailSent: true,
        status: ASYNC_STATUS.SUCCESS
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        isPasswordReset: true,
        status: ASYNC_STATUS.SUCCESS
      };
    default:
      return state;
  }
};
