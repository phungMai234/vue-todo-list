<template>
    <h1>Vue basic</h1>
    <ul>
        <li>
            <router-link to="/">Todo list</router-link>
        </li>
        <li :class="tab_active">
            <router-link to="/detect">Detect device</router-link>
        </li>
        <li>
            <router-link to="/about">Count</router-link>
        </li>
    </ul>

    <Layout>
        <router-view></router-view>
    </Layout>
</template>

<script>
import Layout from "./components/Layout";

export default {
    name: "App",
    components: {
        Layout,
    },
    methods: {
        tabActive: function (type) {
            if (type === window.location.pathname) {
                return { tab_active: true };
            }
            return { tab_active: false };
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 960px;
    background-color: #f2f2f2;
    margin: 60px auto;
    color: #2c3e50;
    padding: 20px;
}
</style>
<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 960px;
    margin: 60px auto;
    color: #2c3e50;
}
ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
}
li {
    display: block;
    background-color: #333;
}
li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
li a:hover {
    background-color: #111;
}
.tab_active {
    background-color: #04aa6d;
}
</style>
