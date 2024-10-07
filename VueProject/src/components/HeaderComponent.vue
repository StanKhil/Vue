<script setup>
import { useGoTo } from '@/useGoTo'

// Принимаем пропсы
const props = defineProps({
  title: String,
  subtitle: String
})

const { goTo } = useGoTo()
</script>

<template>
    <div class="header">
      <h1 class="title">{{ title }}</h1> <!-- Заголовок передается через пропсы -->
      <div id="pages">
        <button @click="goTo('/home')">Home</button>
        <button @click="goTo('/about')">About Us</button>
        <button @click="goTo('/groups')">Groups</button>
        <button @click="goTo('/profile')">Profile</button>
      </div>
    </div>
    <RouterView />
</template>