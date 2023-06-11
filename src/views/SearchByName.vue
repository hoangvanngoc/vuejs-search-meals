<template>
    <div class="p-8">
        <input type="text" @change="searchMeals" class="rounded border-2 border-grey-200 w-full" placeholder="Search for meals"/>
    </div>
    <div class="grid grid-cols-1 px-8 gap-4 md:grid-cols-3">
        <div v-for="meal of meals" :key="meal.idMeal" class="p-2 bg-white shadow rounded-xl">
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" >
            </router-link>
            <h3 class="text-xl my-4 font-bold text-center">{{ meal.strMeal }}</h3>
            <p class="mt-4 mb-4 text-base text-ellipsis overflow-hidden h-[100px] line-clamp-4">{{ meal.strInstructions }}</p>
            <div class="flex flex-col gap-y-2">
                <a target="_blank" class="w-full px-8 text-center rounded-6 g-transparent hover:bg-bl.ue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded py-4" :href="meal.strYoutube">Youtube</a>
                
                <router-link to="/" class="w-full px-8 text-center text-white rounded-6 bg-blue-500 hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded py-4">View</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
    
    const keyword = ref('')
    const meals =  computed(() => store.state.searchedMeals)

    function searchMeals() {
        store.dispatch('searchMeals', keyword.value)
    }
</script>