<script setup>
import {ref,reactive} from 'vue'
let login=ref("")
let password=ref("")
import { useRouter } from 'vue-router'
const router = useRouter()


function EnterData(){
    console.log(login.value + " " + password.value)
    router.push('/home')
    
}
</script>

<template>
    <div class="head">
        <h1 class="title">Login</h1>
    </div>
    <div class="main">
        <input v-model="login" placeholder="Enter your login">
        <br>
        <input v-model="password" placeholder="Enter your password" type="password">
        <br>
        <button @click="EnterData">Enter</button>
    </div>
</template>

<style scoped>
.main{
    border: 0px;
}
.head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#5083cf;
    color:white;
}
input{
    padding: 10px;
    padding-left: 80px;
    margin: 15px 200px;
}
button{
    margin: 15px 300px;
}
.title{
    padding-left: 50px;
    color:white;
}
</style>