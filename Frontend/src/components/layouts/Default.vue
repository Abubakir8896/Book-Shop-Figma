<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchProducts");
});
</script>

<style lang="scss" scoped></style>
