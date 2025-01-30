<template>
  <main>
    <SiteSectionHero />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteSectionHero from '@/components/SiteSectionHero.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    SiteSectionHero,
  },

  setup() {
    return {}
  }
})
</script>

<style scoped></style>
