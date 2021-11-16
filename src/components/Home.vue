<template>
    <h1>List todo</h1>
    <input type="text" v-model="item" />
    <button @click="addItem">Add</button>
    <ul>
        <li v-for="todo in todos" :key="todo.name">
            <TodoItem
                :data="todo"
                @remove-item="removeItemById"
                @complete-task="completeTask"
            ></TodoItem>
        </li>
    </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
    name: "Home",
    components: {
        TodoItem,
    },
    data() {
        return {
            todos: [
                {
                    id: 1,
                    name: "clean the house",
                    isCompleted: false,
                },
                {
                    id: 2,
                    name: "study Vue",
                    isCompleted: false,
                },
            ],
            item: "",
        };
    },
    methods: {
        addItem() {
            this.todos.push({
                id: Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, "")
                    .substr(0, 5),
                name: this.item,
                isCompleted: false,
            });
            this.item = "";
        },
        removeItemById({ id }) {
            const newTodos = this.todos.filter(
                (e) => e.id.toString() !== id.toString()
            );

            this.todos = newTodos;
        },
        completeTask({ id }) {
            const newTodos = this.todos.map((e) => {
                if (e.id.toString() === id.toString()) {
                    return {
                        ...e,
                        isCompleted: !e.isCompleted,
                    };
                }
                return e;
            });

            this.todos = newTodos;
        },
    },
};
</script>

<style scoped>
input {
    font-size: 20px;
    padding: 4px 5px;
}
button {
    font-size: 20px;
    background-color: #04aa6d;
    color: #fff;
    border: 1px solid #ddd;
    padding: 6px 20px;
    margin-left: 20px;
    border-radius: 3px;
    cursor: pointer;
}
button:hover {
    opacity: 0.6;
}
ul {
    list-style-type: none;
}
</style>
