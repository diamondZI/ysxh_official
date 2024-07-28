<template>
<div class="h60 bg-coolgray">
  <div class="flex-around flex-wrap  all:transition-400 hidden md:flex gap4 ">
    <DropDown  v-for="item in Linklist"  :name="item.name" :list="[]"></DropDown> 
  </div>
</div>
</template>
<script setup lang='ts'>
import {Linklist} from '@/datatype/index'
import DropDown from './dropDown.vue';
</script>
