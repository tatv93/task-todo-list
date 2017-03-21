import {dataTodo} from '../static/data-todo';

export const GET_TODO_LIST = "GET_TODO_LIST";
export const FILTER_TODO_LIST = "FILTER_TODO_LIST";
export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const SELECT_TODO = "SELECT_TODO";

export const actionGetToDoList = () => {
    return {
        type: GET_TODO_LIST,
        payload: dataTodo
    };
};

export const actionFilterTodoList = (text) => {
    return {
        type: FILTER_TODO_LIST,
        payload: text
    };
};

export const actionAddNewTodo = (title) => {
    return {
        type: ADD_NEW_TODO,
        payload: title
    };
};
