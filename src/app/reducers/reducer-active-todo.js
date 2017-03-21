import {ACTIVE_TODO} from "../actions/action-active-todo";

const activeTodoReducer = (state = null, action) => {
    switch (action.type) {

        case ACTIVE_TODO:
            state = action.payload;
            break;

    }
    return state;
};

export default activeTodoReducer;