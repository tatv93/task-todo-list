export const MARK_TASK_AS_DONE = "MARK_TASK_AS_DONE";
export const ADD_NEW_TASK = "ADD_NEW_TASK";

export const actionMarkTaskAsDone = (task) => {
    return {
        type: MARK_TASK_AS_DONE,
        payload: task
    };
};

export const actionAddNewTask = (task) => {
    return {
        type: ADD_NEW_TASK,
        payload: task
    };
};
