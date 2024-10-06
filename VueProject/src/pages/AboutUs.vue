<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goTo(route) {
    router.push(route)
}
</script>

<template>
    <div class="header">
      <h1 class="title">About Us</h1>
      <div id="pages">
        <button @click="goTo('/')">Home</button>
        <button @click="goTo('/about')">About Us</button>
        <button @click="goTo('/groups')">Groups</button>
        <button @click="goTo('/profile')">Profile</button>
      </div>
    </div>
    <div class="main">
        <p>about us</p>
    </div>
    <RouterView />
</template>

<style>
.main{
    padding-left: 10px;
    border:solid gold 2px;
    padding-bottom: 400px;
}
</style>

