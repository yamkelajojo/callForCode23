<template>
  <div id="productsGrid">
    <div id="product" v-for="product in products">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup>
// import {definePageMeta} from "nuxt/dist/pages/runtime";
definePageMeta({
  layout: "products",
});

//fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");

//1 way to change head
useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>

<style scoped>
#product {
  border: red solid 1px;
}
</style>
