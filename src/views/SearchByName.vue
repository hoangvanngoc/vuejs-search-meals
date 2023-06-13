<template>
    <div class="p-8">
        <input type="text" @change="searchMeals" v-model="keyword" class="rounded border-2 border-grey-200 w-full" placeholder="Search for meals"/>
    </div>
    <div class="grid grid-cols-1 px-8 gap-4 md:grid-cols-3">
       <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import store from '../store';
import MealItem from '../components/MealItem.vue';
    
    const keyword = ref('')
    const meals =  computed(() => store.state.searchedMeals)

    function searchMeals() {
        store.dispatch('searchMeals', keyword.value)
    }
</script>