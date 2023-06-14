<template>
    <div class="p-8">
        <input type="text" @change="searchMeals" v-model="keyword" class="rounded border-2 border-orange-500 outline-orange-500 placeholder-orange-500 w-full" placeholder="Search for meals"/>
    </div>
    <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue';
import { useRoute } from 'vue-router';
    
    const route = useRoute()
    const keyword = ref('')
    const meals = computed(() => store.state.searchedMeals)

    watch(route, () => {
        store.dispatch('searchMeals', route.params.name)
    })

    function searchMeals() {
        store.dispatch('searchMeals', keyword.value)
    }

    onMounted(() => {
        store.dispatch('searchMeals', route.params.name)
    })
</script>