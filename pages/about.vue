<template>
  <div>
    <h2>About</h2>
    <h3>{{ data }}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod totam
      asperiores labore ea voluptatum reiciendis tempore distinctio sit veniam.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quisquam
      minus cumque animi odit doloremque?
    </p>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja");
</script>

<style scoped>
div {
  background-color: darksalmon;
}
</style>
