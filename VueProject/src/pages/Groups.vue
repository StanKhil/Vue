<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'

import {ref , reactive} from 'vue'
import { useGoTo } from '@/useGoTo'

const { goTo } = useGoTo()

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
    <HeaderComponent title="Groups" >
    </HeaderComponent>
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



