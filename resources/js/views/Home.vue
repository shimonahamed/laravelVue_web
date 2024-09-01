<template>
    <div>
        <h1 class="example">I am Home Component</h1>

        <router-link class="example" to="/admin/home"><h1>Home</h1></router-link>
        <router-link class="example" to="/admin/about"><h1>About</h1></router-link>
    </div>
</template>

<script>
    export default {
        name: "Home",
        mounted() {}
    }
</script>

<style scoped>
    .example {
        color: #a0aec0;
        text-decoration: none;
    }

</style>