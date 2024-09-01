<script>
    export default {
        name: "About.vue"
    }
</script>

<template>
    <div>
        <h1 class="example">I am About Component</h1>

        <router-link class="example" to="/admin/home"><h1>Home</h1></router-link>
        <router-link class="example" to="/admin/about"><h1>About</h1></router-link>
    </div>
</template>

<style scoped>


    .example {
        color: #a0aec0;
        text-decoration: none;
    }
</style>