<template>
  <div class="home-page">
    <MainSection />
    <!-- productos/servicios -->
    <ProductsSection />
    <!-- software -->
    <SoftwareSection />
    <!-- productos sector educativo -->
    <EducationSection />
    <!-- contacto -->
    <ContactSection />
  </div>
</template>

<script setup>
import MainSection from "../components/MainSection.vue"
import ProductsSection from "../components/ProductsSection.vue"
import SoftwareSection from "../components/SoftwareSection.vue"
import EducationSection from "../components/EducationSection.vue"
import ContactSection from "../components/ContactSection.vue"
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}
</style>
