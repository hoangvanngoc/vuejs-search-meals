<template>
    <div class="p-2 bg-white shadow rounded-xl">
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" >
        </router-link>
        <h3 class="text-xl my-4 font-bold text-center">{{ meal.strMeal }}</h3>
            <p class="mt-4 mb-4 text-base text-ellipsis overflow-hidden h-[100px] line-clamp-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <div class="flex flex-col gap-y-2">
               <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
            </div>
        </div>
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue';

    const { meal } = defineProps({
        meal: {
            required: true,
            type: Object
        }
    })
</script>