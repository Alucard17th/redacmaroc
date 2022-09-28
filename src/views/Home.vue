<template>
  <div>
    <heroslider class=""/>
    <FeaturedSection></FeaturedSection>
    <AboutSection></AboutSection>
    <ServicesSection></ServicesSection>
    <ClientsSection></ClientsSection>
  </div>
</template>
<script>
import FeaturedSection from '@/components/sections/FeaturedSection.vue';
import AboutSection from '../components/sections/AboutSection.vue';
import ServicesSection from '../components/sections/ServicesSection.vue';
import ClientsSection from '../components/sections/ClientsSection.vue';
import heroslider from '../components/HeroSlider.vue'

export default {
  name: 'HomePage',
  components: {
    FeaturedSection,
    AboutSection,
    ServicesSection,
    ClientsSection,
    heroslider
  },

}
</script>
<style scoped>
</style>