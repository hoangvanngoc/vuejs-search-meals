<template>
   <div>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5"> {{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal"/>
        <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
            <div><strong>Category:</strong> {{ meal.strCategory }}</div>
            <div><strong>Area:</strong> {{ meal.strArea }}</div>
            <div><strong>Tags:</strong> {{ meal.strTags }}</div>
        </div>
        <div>
            <p class="mt-4 mb-4 text-base">{{ meal.strInstructions }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 mb-2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                            {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measure</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]">
                            {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <YoutubeButton :href="meal.strYoutube">Go to Youbute</YoutubeButton>
            </div>
        </div>
    </div>
   </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';

    const route = useRoute()
    const meal = ref('')

    onMounted(() => {
        axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({data}) => {
            meal.value = data.meals[0]
        })
    })
</script>