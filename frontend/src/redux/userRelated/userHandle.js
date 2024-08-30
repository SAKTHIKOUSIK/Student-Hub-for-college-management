import axios from 'axios';
import { DELETE_USER_SUCCESS } from './actionTypes'; // Adjust the path based on your project structure

import {
    authRequest,
    stuffAdded,
    authSuccess,
    authFailed,
    authError,
    authLogout,
    doneSuccess,
    getRequest,
    getFailed,
    getError,
} from './userSlice';

// Function to extract meaningful error details
const extractErrorDetails = (error) => {
    return {
        message: error.response?.data?.message || error.message,
        status: error.response?.status,
    };
};

export const registerUser = (fields, role) => async (dispatch) => {
    if (!role) {
        console.log("Role is undefined");
        return dispatch(authFailed("Role is undefined"));
    }

    dispatch(authRequest());

    try {
        const result = await axios.post(`${"http://localhost:5000"}/${role}Reg`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (result.data.schoolName) {
            dispatch(authSuccess(result.data));
        } else if (result.data.school) {
            dispatch(stuffAdded());
        } else {
            dispatch(authFailed(result.data.message));
        }
    } catch (error) {
        dispatch(authError(extractErrorDetails(error)));
    }
};

export const loginUser = (fields, role) => async (dispatch) => {
    dispatch(authRequest());

    try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/${role}Login`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (result.data.role) {
            dispatch(authSuccess(result.data));
        } else {
            dispatch(authFailed(result.data.message));
        }
    } catch (error) {
        dispatch(authError(error));
    }
};

// //Don't forget to export it
// export {
//     loginUser,
//     registerUser,
//     logoutUser,
//     getUserDetails,
//     deleteUser,
//     updateUser,
//     addStuff,
// };


export const logoutUser = () => (dispatch) => {
    dispatch(authLogout());
};

export const getUserDetails = (id, address) => async (dispatch) => {
    if (!address) {
        console.error("Address is undefined");
        return dispatch(getFailed("Address is undefined"));
    }

    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
        if (result.data) {
            dispatch(doneSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(extractErrorDetails(error)));
    }
};

// export const deleteUser = (id, address) => async (dispatch) => {
//     if (!address) {
//         console.error("Address is undefined");
//         return dispatch(getFailed("Address is undefined"));
//     }

//     dispatch(getRequest());
//     dispatch(getFailed("Sorry, the delete function has been disabled for now."));
// };





export const deleteUser = (id, address) => async (dispatch) => {
    if (!address) {
        console.error("Address is undefined");
        return dispatch(getFailed("Address is undefined"));
    }

    try {
        dispatch(getRequest());
        
        console.log(`Sending DELETE request to: ${address}/${id}`);
        const response = await axios.delete(`${address}/${id}`);
        
        console.log('Delete response:', response);

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error("Delete operation failed", error);
        dispatch(getFailed(error.response?.data || "Delete operation failed"));
    }
};






export const updateUser = (fields, id, address) => async (dispatch) => {
    if (!address) {
        console.error("Address is undefined");
        return dispatch(getFailed("Address is undefined"));
    }

    dispatch(getRequest());

    try {
        const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (result.data.schoolName) {
            dispatch(authSuccess(result.data));
        } else {
            dispatch(doneSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(extractErrorDetails(error)));
    }
};

export const addStuff = (fields, address) => async (dispatch) => {
    if (!address) {
        console.error("Address is undefined");
        return dispatch(authFailed("Address is undefined"));
    }

    dispatch(authRequest());

    try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/${address}Create`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (result.data.message) {
            dispatch(authFailed(result.data.message));
        } else {
            dispatch(stuffAdded(result.data));
        }
    } catch (error) {
        dispatch(authError(extractErrorDetails(error)));
    }
};
