<script setup>
    import NavBar from './NavBar.vue';
    import { RouterView } from 'vue-router';
</script>
<template>
    <div class="bg-gray-100 h-full min-h-screen">
        <NavBar/>
        <main>
            <RouterView/>
        </main>
    </div>
</template>