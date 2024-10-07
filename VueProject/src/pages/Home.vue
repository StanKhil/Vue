<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>
<template>
    <HeaderComponent title="Home">
    </HeaderComponent>
</template>


<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#5083cf
}
#pages {
  display: flex;
  gap: 10px;
  padding-right: 10px;
  
}
button {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  color:white;
  background-color:#5083cf; 
  &:hover{background-color:#376ec2 ;}
}
.title{
    padding-left: 50px;
    color:white;
}
.main{
    margin-top: 40px;
    padding-left: 10px;
    border:solid rgb(48, 47, 45) 2px;
    padding-bottom: 400px;
}
</style>