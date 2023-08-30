<template>
  <div>
    <p style="font-size: 4rem">{{ error.statusCode }}</p>
    <p style="font-size: 2rem">Ooops</p>
    <p style="font-size: 1.2rem">{{ error.message }}</p>
    <button @click="handleClearError">Go Home</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
