import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

import todoReducer from './reducers/reducer-todo';
import taskReducer from './reducers/reducer-task';
import activeTodoReducer from './reducers/reducer-active-todo';

import App from './containers/container-app';

const store = createStore(
    combineReducers({
        todo_list: todoReducer,
        active_todo: activeTodoReducer,
        tasks: taskReducer
    }),
    {},
    applyMiddleware(createLogger())
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById('root')
);