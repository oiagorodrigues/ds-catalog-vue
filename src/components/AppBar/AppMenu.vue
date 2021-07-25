<template>
  <v-list
    :class="['app-menu', menuClass, { horizontal }]"
    color="primary"
    tag="nav"
    dark
    role="menu"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list-item
      v-for="link in links"
      :key="`${link.name}_menu_${
        $vuetify.breakpoint.xsOnly ? 'mobile' : 'desktop'
      }`"
      :to="{ name: link.name }"
      :class="['app-menu-item', menuItemClass]"
      :ripple="false"
      role="menuitem"
      active-class="app-menu-item--active"
      exact-path
    >
      <v-list-item-title class="app-menu-item__title">
        {{ link.label }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import { links } from './constants'

export default Vue.extend({
  name: 'AppMenu',

  props: {
    menuClass: String,
    menuItemClass: String,
    horizontal: Boolean,
  },

  data() {
    return {
      links,
    }
  },
})
</script>

<style lang="scss" scoped>
.app-menu {
  padding: 1.75em 2.25em;

  &.horizontal {
    display: flex;
    flex-flow: row nowrap;
    padding: 0;

    .app-menu-item {
      margin: 0 0.5em;

      @include media-breakpoint-up(lg) {
        margin: 0 1em;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .app-menu-item {
    opacity: 0.5;
    transition: opacity 0.4s;

    &:hover,
    &:focus,
    &:active,
    &--active {
      opacity: 1;
    }

    &__title {
      font-size: 1.125em !important;
      text-transform: uppercase;
    }
  }
}
</style>
