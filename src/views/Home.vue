<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store'
import axiosClient from '../axiosClient'

const meals = computed(() => store.state.meals)
const intedients = ref([])

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    intedients.value = response.data
})
</script>

<template>
    <div class="flex flex-col items-center p-8 justify-center">
        
    </div>
</template>
