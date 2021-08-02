<template>
  <v-btn
    class="btn-cta pa-0 align-stretch font-weight-bold"
    color="primary"
    retain-focus-on-click
    x-large
    depressed
    ripple
    block
    v-bind="$attrs"
    v-on="$listeners"
  >
    {{ text }}
    <v-icon right dark>mdi-chevron-right</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CTAButton',

  props: {
    text: String,
  },
})
</script>

<style lang="scss" scoped>
.btn-cta {
  $icon-size: #{map-get($btn-sizes, 'x-large')}px !important;
  $icon-size-lg-breakpoint: 70px !important;
  padding-right: $icon-size;

  @media only screen and (max-width: 400px) {
    font-size: 12px !important;
  }

  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    height: $icon-size-lg-breakpoint;
    padding-right: $icon-size-lg-breakpoint;
  }

  &,
  .v-icon {
    border-top-right-radius: $btn-border-radius;
    border-bottom-right-radius: $btn-border-radius;
  }

  &:hover,
  &:focus {
    box-shadow: $custom-box-shadow;
  }

  .v-icon {
    position: absolute;
    right: -$icon-size;
    width: $icon-size;
    height: 100%;
    padding: 18px 22px;
    background-color: rgba($black, 50%);
    margin-right: 0;

    @media #{map-get($display-breakpoints, 'lg-and-up')} {
      right: -$icon-size-lg-breakpoint;
      width: $icon-size-lg-breakpoint;
      font-size: 30px;
    }
  }
}
</style>
