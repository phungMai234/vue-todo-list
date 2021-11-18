const getters = {
    countDone(state) {
        return state.todos.filter((todo) => todo.done).length;
    },
    totalTask(state) {
        return state.todos.length;
    },
};
export default getters;
