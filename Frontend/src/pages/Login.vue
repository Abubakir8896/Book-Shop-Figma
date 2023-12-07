<template>
    <form @submit.prevent="onSubmit" >
        <div class="flex">
            <div class="login11">
                <img class="image2" src="../assets/images/Frame.svg" alt="">
            </div>
            <div class="login22">
                <h1 style="font-family: Arial Black; font-size: 36px; font-weight: 900; text-align: left; padding-bottom: 10px;">Sign In</h1>
                <p style="font-family: Roboto; font-size: 14px; font-weight: 400;">Do not you have an account? <a style="color:#549FF9; text-decoration: none;" href="/login">Sign up</a></p>
                <div>
                    <input v-model="username" class='input1' type="text" placeholder="Username"  required><br>
                    <input v-model="password" class='input2' type="password" placeholder="Password" required>
                </div>
                <Button type="submit" class="btn">Next step</Button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

import Button from "../components/base/base-button.vue";
import Input from "../components/base/base-input.vue";

const store = useStore();


const username = ref("__zikirov__08__");
const password = ref("2222");


async function onSubmit() {
  if (!username.value.length && !password.value.length) {
    return;
  }
  await store.dispatch("login", {
    username: username.value,
    password: password.value,
  });
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.login11{
    width: 700px;
    height: 650px;
    padding: 20px;
    padding-left: 50px;
    background-color: #C9AC8C;
}
.login22{
    margin-left: 250px;
    width: 750px;
    justify-content: center;
    padding-top: 180px;
}
.input1{
    margin-top: 30px;
    border: 1px solid #B4B4BB;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 55px;
    border-radius: 8px;
}
.input2{
    margin-top: 15px;
    border: 1px solid #B4B4BB;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    border-radius: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 55px;
}
.btn{
    margin-top: 30px;
    padding: 10px 100px;
    border-radius: 99px;
    background-color: #152540;
    font-family: Red Hat Display;
    font-size: 18px;
    font-weight: 500;
    color: white;
}
.image2{
    margin-top: 50px;
}
</style>