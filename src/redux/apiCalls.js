import { publicRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure,logout } from "./userRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const logoutUser = async (dispatch) => {
    dispatch(logout());
}