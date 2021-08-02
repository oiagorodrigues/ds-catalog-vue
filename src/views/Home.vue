<template>
  <v-card class="home py-14 fill-height flex-grow-1">
    <v-row class="justify-center">
      <v-col cols="12" md lg xl="6" order-lg="last" class="px-lg-0">
        <v-img
          class="home-img mx-auto"
          src="@/assets/img/desenho.svg"
          alt="Desenho da Home"
          content-class="w-auto"
          max-width="648"
          max-height="481"
        ></v-img>
      </v-col>

      <v-col cols="12" lg class="text-center text-lg-start pr-lg-0">
        <div class="home-text mx-auto">
          <v-card-title class="home-title font-weight-bold px-lg-0">
            Conheça o melhor catálogo de produtos
          </v-card-title>
          <v-card-text class="home-subtitle secondary--text pl-lg-0">
            Ajudaremos você a encontrar os melhores produtos disponíveis no
            mercado.
          </v-card-text>
        </div>

        <CTAButton
          class="home-cta"
          :to="{ name: 'Store' }"
          text="Inicie agora a sua busca"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { CTAButton } from '@/components/CTAButton'

export default Vue.extend({
  name: 'HomePage',

  components: {
    CTAButton,
  },
})
</script>

<style lang="scss" scoped>
%home-typograph {
  word-break: break-word;
  line-height: 1.3;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  border-radius: 20px !important;

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    padding: 150px calc(148px - (12px + 16px));
  }

  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    padding: 150px 64px;

    [class*='col-']:last-of-type {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
    }
  }

  @media only screen and (min-width: #{map-get($grid-breakpoints, 'xl')}) {
    [class*='col-']:last-of-type {
      padding-left: calc(216px + 12px) !important;
    }
  }

  &-text {
    @media only screen and (min-width: 456px) and (max-width: 960px) {
      max-width: 388px !important;
    }
  }

  &-title {
    font-size: 26px;
    @extend %home-typograph;

    @media #{map-get($display-breakpoints, 'md-and-up')} {
      font-size: 55px;
      margin-bottom: 10px;
    }

    @media #{map-get($display-breakpoints, 'lg-and-up')} {
      font-size: 48px;
    }

    @media #{map-get($display-breakpoints, 'lg-and-up')} {
      font-size: 55px;
    }
  }

  &-subtitle {
    font-size: 1rem;
    padding-right: 30px;
    padding-left: 30px;
    margin-bottom: 23px;
    @extend %home-typograph;

    @media #{map-get($display-breakpoints, 'md-and-up')} {
      font-size: 1.5rem;
      padding-right: 1rem;
      padding-left: 1rem;
      margin-bottom: 37px;
    }
  }

  &-cta {
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      margin: 0 auto;
    }

    @media only screen and (min-width: 456px) {
      min-width: 388px !important;
      max-width: 388px !important;
      width: 388px !important;
    }
  }
}
</style>
