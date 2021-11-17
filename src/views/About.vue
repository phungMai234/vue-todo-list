<template>
    <h1>About</h1>
    <div>{{ count }}</div>
    <button @click="increment">Up</button>
    <button @click="decrement">Down</button>
</template>

<script>
export default {
    name: "About",
    computed: {
        count() {
            return this.$store.state.count;
        },
    },
    methods: {
        increment() {
            this.$store.dispatch("increment", { step: 3 });
        },
        decrement() {
            this.$store.dispatch("decrement", { step: 3 });
        },
    },
};
</script>
