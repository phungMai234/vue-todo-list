<template>
    <h1>List todo</h1>
    <ol>
        <li v-for="todo in todos" :key="todo.name">
            <TodoItem :data="todo"></TodoItem>
        </li>
    </ol>
    <input type="text" v-model="item" />
    <button @click="addItem">Add</button>
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
                    name: "work",
                },
                {
                    id: 2,
                    name: "study",
                },
            ],
            item: "",
        };
    },
    methods: {
        addItem() {
            this.todos.push({ id: Math.random(1, 4), name: this.item });
            this.item = "";
        },
    },
};
</script>
