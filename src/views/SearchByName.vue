<template>
    <div class="p-8">
        <input type="text" @change="searchMeals" v-model="keyword" class="rounded border-2 border-grey-200 w-full" placeholder="Search for meals"/>
    </div>
    <div class="grid grid-cols-1 px-8 gap-4 md:grid-cols-3">
        <div v-for="meal of meals" :key="meal.idMeal" class="p-2 bg-white shadow rounded-xl">
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" >
            </router-link>
            <h3 class="text-xl my-4 font-bold text-center">{{ meal.strMeal }}</h3>
            <p class="mt-4 mb-4 text-base text-ellipsis overflow-hidden h-[100px] line-clamp-4">{{ meal.strInstructions }}</p>
            <div class="flex flex-col gap-y-2">
               <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import YoutubeButton from '../components/YoutubeButton.vue';
import store from '../store';
    
    const keyword = ref('')
    const meals =  computed(() => store.state.searchedMeals)

    function searchMeals() {
        store.dispatch('searchMeals', keyword.value)
    }
</script>