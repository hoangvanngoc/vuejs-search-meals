<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store'
import axiosClient from '../axiosClient'

const meals = computed(() => store.state.meals)
const letters = 'ASBDADASJKDBBSAJHDASJKDBSAJK'.split('')
const intedients = ref([])

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    intedients.value = response.data
})
</script>

<template>
    <div class="flex flex-col items-center p-8 justify-center">
        <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>