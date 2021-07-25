<template>
  <v-app-bar :height="height" color="primary" clipped-left dark app flat>
    <v-toolbar-title class="flex-shrink-0">
      <v-btn :ripple="false" class="app-brand pl-0" to="/" depressed text>
        <h1 class="text-h5" title="Logo do DS Catalog">DS Catalog</h1>
      </v-btn>
    </v-toolbar-title>

    <template v-if="!isMobile">
      <AppMenu
        data-testid="appMenuDesktop"
        aria-label="Menu Principal Desktop"
        class="ml-auto"
        horizontal
        flat
      />

      <div class="hidden-md-and-down ml-auto" style="width: 177.57px"></div>
    </template>

    <v-menu
      v-else
      content-class="app-menu-mobile--wrap"
      transition="slide-y-transition"
      max-width="100%"
      open-on-focus
      offset-y
      eager
      tile
    >
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          class="ml-auto"
          aria-label="Abrir menu"
          v-bind="attrs"
          v-on="on"
        />
      </template>

      <AppMenu
        data-testid="appMenuMobile"
        aria-label="Menu Principal Mobile"
        color="primary"
        width="100vw"
        two-line
        nav
      />
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { APP_BAR_HEIGHT } from './constants'

export default Vue.extend({
  name: 'AppBar',

  components: {
    AppMenu: () => import('./AppMenu.vue'),
  },

  computed: {
    height() {
      return APP_BAR_HEIGHT[this.$vuetify.breakpoint.name]
    },

    isMobile() {
      return this.$vuetify.breakpoint.xsOnly
    },
  },
})
</script>

<style lang="scss" scoped>
.app-menu-mobile--wrap {
  box-shadow: none;
}

.app-brand {
  &:hover::before,
  &::before {
    opacity: 0 !important;
  }
}
</style>
