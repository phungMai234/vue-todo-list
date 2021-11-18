<template>
    <h1>List todo</h1>
    <input type="text" v-model="title" />
    <button @click="addItem">Add</button>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <TodoItem
                :data="todo"
                @remove-item="removeItemById"
                @complete-task="completeTask"
            ></TodoItem>
        </li>
    </ul>

    <div>Completed: {{ countDone }}</div>
    <div>All: {{ countTotal }}</div>
    <div>count: {{ count }}</div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";

export default {
    name: "Home",
    components: {
        TodoItem,
    },
    data() {
        return {
            title: "",
        };
    },
    methods: {
        addItem() {
            this.$store.dispatch("addNewTodoAction", { title: this.title });
            this.title = "";
        },
        removeItemById({ id }) {
            this.$store.dispatch("removeTodoAction", { id });
        },
        completeTask({ id }) {
            this.$store.dispatch("doneTodoAction", { id });
        },
    },
    computed: {
        todos: function () {
            return this.$store.state.todoStore.todos;
        },
        count: function () {
            return this.$store.state.countStore.count;
        },
        countDone() {
            return this.$store.getters.countDone;
        },
        countTotal() {
            return this.$store.getters.totalTask;
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
