<template>
    <div class="grid grid-cols-1 px-8 gap-4 md:grid-cols-3">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <div v-if="!meals?.length" class="text-center p-8 pt-0">
        <span class="text-xl font-bold tracking-normal">Search no result</span>
    </div>
</template>
<script setup>
    import MealItem from '../components/MealItem.vue';

    const { meals } = defineProps({
        meals: {
            required: true,
            type: Array
        }
    })

    console.log('meals:', meals)

</script>