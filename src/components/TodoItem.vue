<template>
    <div>Todo:{{ data.name }}</div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["data"],
};
</script>
