<template>
    <header class="bg-white h-16 px-4 flex justify-between items-center">
        <router-link class="!bg-transparent !text-black" :to="{ name: 'home' }">
            Home
        </router-link>
        <div class="flex h-full">
            <router-link :to="{ name: 'byName' }" class="px-3 h-full inline-flex hover:bg-orange-400 hover:text-white items-center transition-all">
              Search Meals
            </router-link>
            <router-link :to="{ name: 'byLetter' }" class="px-3 h-full inline-flex hover:bg-orange-400 hover:text-white items-center transition-all">
              Meals By Letter
            </router-link> 
            <router-link :to="{ name: 'byIngredient' }" class="px-3 h-full inline-flex hover:bg-orange-400 hover:text-white items-center transition-all">
              Meals By Ingredients
            </router-link>
          </div>
    </header>
</template>

<style scoped>
  .router-link-active {
    @apply bg-orange-500 text-white;
  }
</style>