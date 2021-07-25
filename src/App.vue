<template>
  <v-app>
    <AppBar />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { AppBar } from '@/components/AppBar'

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
  },
})
</script>
