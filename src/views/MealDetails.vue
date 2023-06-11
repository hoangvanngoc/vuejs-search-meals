<template>
   <div>
    <pre>{{ meals }}</pre>
   </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';


    const route = useRoute()
    const meals = ref('')

    onMounted(() => {
        console.log('abcd:', route.params)
        axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({data}) => {
            debugger
            meals.value = data
        })
    })
</script>