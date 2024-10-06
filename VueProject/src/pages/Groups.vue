<script setup>
import { useRouter } from 'vue-router'
import {ref , reactive} from 'vue'
const router = useRouter()

function goTo(route) {
    router.push(route)
}

let group = reactive({
    title:"group1"
})
let group2 = reactive({
    title:"group2"
})
let groups=new Array()
groups.push(group)
groups.push(group2)

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
            <ul>
                <li v-for="group in groups">
                    {{ group.title }}
                </li>
            </ul>
        </div>
    </div>
    <RouterView />
</template>

<style>
li{
    list-style-type: none;
    background-color:#5083cf;
    width: fit-content;
    padding: 10px;
    margin: 15px 0px;
    color:white;
}
h2{
    background-color:#5083cf;
    color:white;
    padding: 10px;
    margin: 15px 0px;
}
</style>



