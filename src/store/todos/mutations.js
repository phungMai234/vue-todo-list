const mutations = {
    addNewTodo(state, payload) {
        const id = Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 5);

        state.todos.push({
            id,
            title: payload.title,
            done: false,
        });
    },
    removeTodo(state, payload) {
        const newTodos = state.todos.filter(
            (todo) => todo.id.toString() !== payload.id.toString()
        );

        state.todos = newTodos;
    },
    doneTodo(state, payload) {
        const newTodos = state.todos.map((todo) => {
            if (todo.id.toString() === payload.id.toString()) {
                return {
                    ...todo,
                    done: !todo.done,
                };
            }
            return todo;
        });

        state.todos = newTodos;
    },
};
export default mutations;
