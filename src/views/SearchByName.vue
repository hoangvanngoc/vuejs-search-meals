<template>
    <div class="p-8">
        <input type="text" @change="searchMeals" v-model="keyword" class="rounded border-2 border-grey-200 w-full" placeholder="Search for meals"/>
    </div>
    <Meals :meals="meals"/>
</template>

<script setup>
import { computed, ref } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue';
    
    const keyword = ref('')
    const meals = computed(() => store.state.searchedMeals)

    function searchMeals() {
        store.dispatch('searchMeals', keyword.value)
    }
</script>