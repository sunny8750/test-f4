import { createStore } from "redux";

const initialState = {
    user: {},
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                error: "",
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                user: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;