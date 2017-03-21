export const ACTIVE_TODO = "ACTIVE_TODO";

export const actionActiveTodo = (todo) => {
    return {
        type: ACTIVE_TODO,
        payload: todo
    };
};
