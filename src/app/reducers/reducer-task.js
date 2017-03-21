import {dataTasks} from "../static/data-tasks";
import {MARK_TASK_AS_DONE, ADD_NEW_TASK} from '../actions/action-task';

const taskReducer = (state = dataTasks, action) => {
    switch (action.type) {
        case MARK_TASK_AS_DONE:
            let index = state.indexOf(action.payload);
            let current = state[index];
            if (index > -1) {
                state = [...state];
                state[index] = {...current, done: !current.done};
            }
            break;

        case ADD_NEW_TASK:
            state = state.concat(action.payload);
            break;
    }
    return state;
};

export default taskReducer;