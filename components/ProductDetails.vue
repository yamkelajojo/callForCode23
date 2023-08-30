<template>
  <div class="flex">
    <div class="imgContainer">
      <img :src="product.image" alt="" />
    </div>
    <div class="detailsContainer">
      <p>{{ product.title }}</p>
      <p>${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
img {
  max-width: 250px;
  height: auto;
}

p {
  margin: 20px auto;
}
</style>
