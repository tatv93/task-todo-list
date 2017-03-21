import {GET_TODO_LIST, FILTER_TODO_LIST, ADD_NEW_TODO, SELECT_TODO} from "../actions/action-todo";

const todoReducer = (state = [], action) => {
    switch (action.type) {

        case GET_TODO_LIST:
            state = action.payload;
            break;

        case FILTER_TODO_LIST:
            state = state.filter((item) => {
                return (item.title || '').toLowerCase().indexOf(action.payload.toLocaleLowerCase()) > -1;
            });
            break;

        case ADD_NEW_TODO:
            state = state.concat({
                id: Math.random() * 999999, // simulate random id (but not unique)
                title: action.payload
            });
            break;

        case SELECT_TODO:
            let index = state.indexOf(action.payload);
            state = state.map((item, i) => {
                return {...item, ...{selected: index === i}};
            });
            break;
    }
    return state;
};

export default todoReducer;