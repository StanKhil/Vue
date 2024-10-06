<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goTo(route) {
    router.push(route)
}
</script>

<template>
    <div class="header">
      <h1 class="title">Home</h1>
      <div id="pages">
        <button @click="goTo('/')">Home</button>
        <button @click="goTo('/about')">About Us</button>
        <button @click="goTo('/groups')">Groups</button>
        <button @click="goTo('/profile')">Profile</button>
      </div>
    </div>
    <RouterView />
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
  background-color: #376ec2;
}
.title{
    padding-left: 10px;
    color:white;
}
</style>