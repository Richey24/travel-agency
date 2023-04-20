// import { LOGIN_REG_STARTS, LOGIN_REG_SUCCESS, LOGIN_REG_FAIL, LOGOUT } from "./types";
// import { AlertFailure, AlertSuccess } from "../alert/hooks";
// import { SIGNIN_CALL } from "./../../utils/network-requests/services";

// export const SignInUserStarts = () => ({
//     type: LOGIN_REG_STARTS,
// });

// export const SignInUserSuccess = (payload) => ({
//     type: LOGIN_REG_SUCCESS,
//     payload,
// });

// export const SignInUserFail = () => ({
//     type: LOGIN_REG_FAIL,
// });

// export function SignInUser(userDetails: any) {
//     return (dispatch, getState) => {
//         dispatch(SignInUserStarts());
//         return SIGNIN_CALL(userDetails)
//             .then((res) => {
//                 localStorage.setItem("token", res.data.data.token);
//                 dispatch(SignInUserSuccess(res.data));
//                 dispatch(AlertSuccess(res.data.message));
//             })
//             .catch((error) => {
//                 if (error.message === "Network Error") {
//                     dispatch(SignInUserFail());
//                     dispatch(AlertFailure(error.message));
//                     return;
//                 } else if (error.code === "ECONNABORTED") {
//                     dispatch(SignInUserFail());
//                     dispatch(AlertFailure("Poor Internet Connection"));
//                     return;
//                 } else if (error.response) {
//                     dispatch(SignInUserFail());
//                     dispatch(AlertFailure(error.response.data.message));
//                     return;
//                 }
//             });
//     };
// }

// //

// export const Logout = () => ({
//     type: LOGOUT,
// });

// export function LogOutUser() {
//     return (dispatch, getState) => {
//         localStorage.removeItem("token");
//         dispatch(Logout());
//         //
//         setTimeout(() => {
//             dispatch(AlertSuccess("Logout Successfully"));
//         }, 450);
//     };
// }
export const okere = "oke";
