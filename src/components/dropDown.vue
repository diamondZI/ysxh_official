<template>
<div @click="show=!show"  ref="outerClickElement"  class=" hover:c-red-500  cursor-pointer select-none pos-relative" to="/">{{ props.name }}   
  <span v-if="props.list.length>1"  class=" w5 h5 i-mdi-menu-down "></span>
<div :style="{display:!show?'none':'flex'}" style="background-image: url('http://www.cnosonline.com/public/new/images/header-bg.png');"  class="gap2 
 transition-all-800  transition-ease-linear  
flex-around flex-col pos-absolute select-none border-t-[#c6191f] border-t-solid w-150% mt-2 -transform-translate-x-20% h-auto">
  <RouterLink :to="'/'" v-for="item in props.list"> 
    {{ item.name }}
  </RouterLink>
</div>
</div>
</template>
<script setup lang='ts'>
import {ref,onMounted, onUnmounted} from 'vue'

import { RouterLink } from 'vue-router';
const show=ref(false)
const props = defineProps(['name','list'])
const outerClickElement = ref<HTMLDivElement | null>(null);
function handleDocumentClick(event:MouseEvent) {
  if (!outerClickElement.value?.contains(event.target as Node)) {
    show.value=false
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick);
});

</script>
<style scoped>

 </style>
