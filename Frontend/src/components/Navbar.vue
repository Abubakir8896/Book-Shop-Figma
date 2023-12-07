<template>
<div>
  <nav
      class="navbar"
    >
      <router-link class="h1" to="/">Badiiyat</router-link>
      <div class="buttons">
        <router-link class="button" to="/">Bosh Sahifa</router-link>
        <router-link class="button" to="/">Nasr</router-link>
        <router-link class="button" to="/">Nazm</router-link>
        <router-link class="button" to="/">Maqolalar</router-link>
        <router-link class="button" to="/">Forum</router-link>
        <Button
          style="margin-right: 50px;"
          @click="logout"
          >Logout</Button
        >
      </div>
    </nav>
</div>
</template>

<script setup>
import Button from "./base/base-button.vue";
import { useStore } from "vuex";

const store = useStore();

function logout() {
  store.commit("LOGOUT");
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar{
  display: flex;
  justify-content: space-between;
  background-color: #191919;
  height: 70px;
  border: 1px solid #FFFFFF1A;
}
.h1{
  margin-left: 50px;
  margin-top: 18px;
  font-family: Rotterburg Stylish FREE;
  font-size: 25px;
  font-weight: 400;
  color: #C9AC8C;
  text-decoration: none;
}
.buttons{
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button{
  text-decoration: none;
  color: white;
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-weight: 300;
}
</style>
