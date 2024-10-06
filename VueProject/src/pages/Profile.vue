<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goTo(route) {
    router.push(route)
}
</script>

<template>
    <div class="header">
      <h1>Profile</h1>
      <div id="pages">
        <button @click="goTo('/')">Home</button>
        <button @click="goTo('/about')">About Us</button>
        <button @click="goTo('/groups')">Groups</button>
      </div>
    </div>
    <RouterView />
</template>



<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#pages {
  display: flex;
  gap: 10px;
}
button {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>