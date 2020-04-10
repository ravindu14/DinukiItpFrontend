// @flow
import {
  ASYNC_AUTH_INIT,
  HANDLE_NOTIFICATION,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT_SUCCESS,
  AUTH_AUTHENTICATION_FAILURE
} from "actionTypes/auth";
import Alert from "components/Alert";

function asyncAuthInit() {
  return {
    type: ASYNC_AUTH_INIT
  };
}

function notificationHandler(isSuccess, message) {
  return {
    type: HANDLE_NOTIFICATION,
    payload: {
      isSuccess,
      notification: {
        type: isSuccess ? Alert.TYPE.SUCCESS : Alert.TYPE.ERROR,
        message
      }
    }
  };
}

export function authSignUp(payload: Object) {
  return (dispatch, getState, serviceManager) => {
    dispatch(asyncAuthInit());

    let authService = serviceManager.get("AuthService");

    authService
      .signUp(payload)
      .then(({ success, data }) => {
        if (success) {
          dispatch({ type: AUTH_SIGN_UP_SUCCESS, payload: data });
        }
        dispatch(
          notificationHandler(
            success,
            success
              ? "Please check your email"
              : data.errorMessage
              ? data.errorMessage
              : "Something went wrong. Please try again"
          )
        );
      })
      .catch(() => {
        dispatch(
          notificationHandler(false, "Something went wrong. Please try again")
        );
      });
  };
}

export function authSignIn(payload) {
  return (dispatch, getState, serviceManager) => {
    dispatch({
      type: AUTH_SIGN_IN_SUCCESS,
      payload: {
        user: { user: { firstName: "Ravindu", lastName: "Landekumbura" } }
      }
    });
    // dispatch(asyncAuthInit());

    // let authService = serviceManager.get("AuthService");

    // authService
    //   .signIn(payload)
    //   .then(({ success, data }) => {
    //     if (success) {
    //       const { token } = data;

    //       serviceManager.get("ApiService").authToken = token;

    //       authService
    //         .getCurrentUser()
    //         .then(({ success, data }) => {
    //           if (success) {
    //             dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: data });
    //           } else {
    //             dispatch(
    //               notificationHandler(
    //                 success,
    //                 data.errorMessage
    //                   ? data.errorMessage
    //                   : "Something went wrong. Please try again"
    //               )
    //             );
    //           }
    //         })
    //         .catch(() =>
    //           dispatch(
    //             notificationHandler(
    //               false,
    //               "Something went wrong. Please try again"
    //             )
    //           )
    //         );
    //     } else {
    //       dispatch(
    //         notificationHandler(false, "Username or password is incorrect")
    //       );
    //     }
    //   })
    //   .catch(({ message }) => {
    //     dispatch(
    //       notificationHandler(
    //         false,
    //         message ? message : "Something went wrong. Please try again"
    //       )
    //     );
    //   });
  };
}

export function isUserAuthenticated() {
  return (dispatch, getState, serviceManager) => {
    dispatch(asyncAuthInit());

    let authService = serviceManager.get("AuthService");

    localStorage
      .getItem("token")
      .then(token => {
        serviceManager.get("ApiService").authToken = token;

        authService
          .getCurrentUser()
          .then(({ success, data }) => {
            if (success) {
              dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: data });
            } else {
              dispatch(
                notificationHandler(
                  success,
                  data.errorMessage
                    ? data.errorMessage
                    : "Something went wrong. Please try again"
                )
              );
            }
          })
          .catch(() =>
            dispatch(
              notificationHandler(
                false,
                "Something went wrong. Please try again"
              )
            )
          );
      })
      .catch(() => {
        dispatch({ type: AUTH_AUTHENTICATION_FAILURE });
      });
  };
}

export function authSignOut() {
  return dispatch => {
    // localStorage.removeItem("Token").then(() => {
    //   dispatch({ type: AUTH_SIGN_OUT_SUCCESS });
    // });
    dispatch({ type: AUTH_SIGN_OUT_SUCCESS });
  };
}
