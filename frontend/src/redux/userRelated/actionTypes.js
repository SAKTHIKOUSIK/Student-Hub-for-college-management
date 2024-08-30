export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

// src/redux/classReducer.js

const initialState = {
    classes: [],
    loading: false,
    error: null,
};

export const classReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_USER_SUCCESS':
            return {
                ...state,
                classes: state.classes.filter(item => item.id !== action.payload.id),
            };
        // other cases
        default:
            return state;
    }
};


