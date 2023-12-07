<template>
    <Navbar />
  <div style="background-color: #191919; padding: 80px; height: 1700px;">
    <div>
      <div class="chast-2">
        <div class="imagee">
          <div class="chast-3">
            <div class="chast-4">
              <h1 class="h11">Qidirish</h1>
              <div class="chast-5">
                <input
                    type="text"
                    class="input"
                    placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
                    v-model="searchingTitle"
                    @input.enter="onSearchProducts"
                  />
                  <button
                    @click="searchProduct"
                    class="btn1"
                  >
                  <img src="../assets/images/Frame (2).png" alt="">
                    Izlash
                  </button>
                </div>
              </div>
              <div>
                <h1 class="h2">
                  Asosiy kategoriyalar
                </h1>
                <div class="categorys">
                  <h2 class="text" @click="start1">Temuriylar davri</h2>
                  <h2 class="text1" @click="start2">Jadid adabiyoti </h2>
                  <h2 class="text2" @click="start3">Sovet davri</h2>
                  <h2 class="text3" @click="start4">Mustaqillik davri</h2>
                </div>
              </div>
              <div class="images" style="display: flex; flex-wrap: wrap; margin-left:30px ;">
                <div v-for="product in products" :key="product.id">
                  <div style="width: 150px;">
                    <img style="border-radius:15px; width: 100px; height: 100px; margin: 10px; margin-left:70px;" :src="product.photo" alt="">
                    <h5>{{ product.title }}</h5>
                  </div>
                </div>
              </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  import {ref} from 'vue'
  import Navbar from "../components/Navbar.vue";
  import { useHome } from "../composables/home";
  import { onMounted } from 'vue';
  const category = ref('')
  const { products, searchingTitle, onSearchProducts, onFilterCategory } = useHome();
  function start1(){
    category.value = "1"
    onFilterCategory(category)
  }
  function start2(){
    category.value = "2"
    onFilterCategory(category)
  }
  function start3(){
    category.value = "3"
    onFilterCategory(category)
  }
  function start4(){
    category.value = "4"
    onFilterCategory(category)
  }

  onMounted(() => {
    const text = document.querySelector(".text");
    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");
    const text3 = document.querySelector(".text3");
    text.onclick = function () {
      text.style.color = '#C9AC8C';
      text1.style.color = '#fff';
      text2.style.color = '#fff';
      text3.style.color = '#fff';
    };
    text1.onclick = function () {
      text1.style.color = '#C9AC8C';
      text.style.color = '#fff';
      text2.style.color = '#fff';
      text3.style.color = '#fff';
    };
    text2.onclick = function () {
      text2.style.color = '#C9AC8C';
      text.style.color = '#fff';
      text1.style.color = '#fff';
      text3.style.color = '#fff';
    };
    text3.onclick = function () {
      text3.style.color = '#C9AC8C';
      text.style.color = '#fff';
      text1.style.color = '#fff';
      text2.style.color = '#fff';
    };
  });
</script>
  
<style>
h5{
  margin-left: 80px;
  font-family: Rotterburg Stylish FREE;
  font-size: 12px;
  font-weight: 400;
  color: #C9AC8C;
}
.images{
  margin-top: 50px;
  display: flex;
}
h2{
  margin-right: 80px;
  font-family: Steinbeck;
  font-size: 20px;
  font-weight: 400;
  color:#fff
}
.categorys{
  display:flex;
  margin-top:30px;
  margin-left: 250px;
}
.btn1{
  background: #C9AC8C;
  font-family: Steinbeck;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 35px;
  border-radius:15px;
  display: flex;
  align-items:center;
  color:#3C2710;

}
.input{
  background-color:#404040;
  width: 600px;
  padding: 10px;
  border-radius:15px;
  border: 1px solid #404040;
  margin-right: 10px;
  color:white
}
.h11{
    margin-left: 350px;
    margin-top: 18px;
    font-family: Rotterburg Stylish FREE;
    font-size: 35px;
    font-weight: 400;
    color: #C9AC8C;
    text-decoration: none;
    width: 25%;
    margin-bottom: 25px;
}
  .h2{
    margin-left: 450px;
    margin-top: 18px;
    font-family: Rotterburg Stylish FREE;
    font-size: 35px;
    font-weight: 400;
    color: #C9AC8C;
    text-decoration: none;
    width: 25%;
  }
.chast-5{
  display: flex;
  justify-content: center;
}
.chast-2{
  height: 346px;
  padding: 50px;
  padding-top: 10px;
  padding-left: 0px;
  background-image: url('../assets/images/Frame 71.png');
  background-size: cover;
  padding-bottom: 200px;
}
.chast-3{    
  /* background-image: url('../assets/images/Frame1.png'); */
  background-size:contain
}
.chast-4{
  padding: 10px;
  margin-top: 300px; 
  width:850px; 
  margin-left:200px; 
  height:180px;   
  background-color: #191919;
  border-radius:15px;
  box-shadow: 10px 10px 20px 10px rgb(26, 26, 26);
}
</style>
  