<template>
<header style="background-image: url('http://www.cnosonline.com/public/new/images/header-bg.png');" class="p5 pt0">
  <div class=" w-100% p6   flex-between ">
    <img class="hauto sm:w94 w70 " src="/top_logo.png" alt="">
    <span  class="ml3 min-w10 min-h10 i-carbon-menu md:hidden"></span>
  </div>
  <nav class=" pl-8 pr-8 flex-around flex-wrap  all:transition-400 hidden md:flex gap4 ">
   <DropDown  v-for="item in Linklist"  :name="item.name" :list="item.child??[]"></DropDown> 
  </nav>
</header>
</template>
<script setup lang='ts'>
import {ref,reactive} from 'vue'
import DropDown from './dropDown.vue';
import {Linklist} from '@/datatype/index'
</script>
<style scoped>
 </style>
