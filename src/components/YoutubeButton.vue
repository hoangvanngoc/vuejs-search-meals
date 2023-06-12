<template>
     <a target="_blank" class="px-8 w-fit block text-center rounded-6 g-transparent hover:bg-bl.ue-500 text-red-500 font-semibold transition-all hover:text-white border border-red-500 hover:bg-red-600 rounded py-3" :href="props.href"><slot></slot></a>
</template>

<script setup>
    const props = defineProps({
        href: String
    })
</script>