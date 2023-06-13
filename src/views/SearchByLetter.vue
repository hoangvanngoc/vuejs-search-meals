<template>
    <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
    <div class="grid grid-cols-1 px-8 gap-4 md:grid-cols-3">
        <meal-item v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';

    const route = useRoute()
    const letters = 'ASBDADASJKDBBSAJHDASJKDBSAJK'.split('')
    const meals = computed(() => store.state.mealsByLetter)

    watch(route, () => {
        store.dispatch('searchMealsByLetter', route.params.letter)
    })

    onMounted(() => {
        store.dispatch('searchMealsByLetter', route.params.letter)
    })
</script>