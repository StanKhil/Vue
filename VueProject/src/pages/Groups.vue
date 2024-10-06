<script setup>
import { useRouter } from 'vue-router'
import {ref , reactive} from 'vue'
const router = useRouter()

function goTo(route) {
    router.push(route)
}

/*let group = reactive({
    title:"group1"
})
let groups=new Array()
groups.push(group)*/

</script>

<template>
    <div class="header">
      <h1 class="title">Groups</h1>
      <div id="pages">
        <button @click="goTo('/')">Home</button>
        <button @click="goTo('/about')">About Us</button>
        <button @click="goTo('/groups')">Groups</button>
        <button @click="goTo('/profile')">Profile</button>
      </div>
    </div>
    <div class="main">
        <h2>Your groups:</h2>
        <div class="listGroups">
            <li  v-for="group in groups">
                {{ item.title }}
            </li>
        </div>
    </div>
    <RouterView />
</template>





