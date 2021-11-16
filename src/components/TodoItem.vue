<template>
    <div class="wrapper">
        <div class="item-body">
            <input
                type="checkbox"
                value="data?.isCompleted"
                @click="completedItem"
            />

            <div class="item-todo" :class="{ completed: data?.isCompleted }">
                {{ data.name }}
            </div>

            <button @click="removeItem" class="del-icon">x</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["data"],
    methods: {
        removeItem() {
            this.$emit("remove-item", { id: this.data.id });
        },
        completedItem() {
            this.$emit("complete-task", { id: this.data.id });
        },
    },
    computed: {
        isCompletedTask() {
            return this.data && this.data?._isCompleted;
        },
    },
    watch: {
        data(newValue, oldValue) {
            console.log("new", newValue);
            console.log("old", oldValue);
        },
    },
};
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
.item-body {
    width: 400px;
    display: flex;
}
.item-todo {
    font-size: 24px;
    margin-right: 20px;
    width: 200px;
    justify-content: start;
    display: flex;
}
.completed {
    text-decoration: line-through;
}
.del-icon {
    color: red;
    background-color: #fff;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0.6;
}
.del-icon:hover {
    opacity: 1;
}
input[type="checkbox"] {
    height: 20px;
    width: 20px;
    margin-right: 20px;
}
</style>
