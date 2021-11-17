const actions = {
    //context: commit, state, ...
    addNewTodoAction({ commit }, payload) {
        commit("addNewTodo", payload);
    },
    removeTodoAction({ commit }, payload) {
        commit("removeTodo", payload);
    },
    doneTodoAction({ commit }, payload) {
        commit("doneTodo", payload);
    },
};

export default actions;
