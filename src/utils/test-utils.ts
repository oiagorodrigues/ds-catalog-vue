import '@testing-library/jest-dom'
import Vue, { ComponentOptions } from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import { VueClass } from '@vue/test-utils'
import {
  render,
  RenderOptions,
  ConfigurationCallback,
} from '@testing-library/vue'

import routes from '@/router/routes'

Vue.use(Vuetify)
Vue.use(VueRouter)

async function renderApp<V extends Vue>(
  component: VueClass<V> | ComponentOptions<V>,
  options?: RenderOptions<V>,
  callback?: ConfigurationCallback<V>
) {
  const root = document.createElement('div')
  root.setAttribute('data-app', 'true')

  const router = new VueRouter({
    mode: 'abstract',
    routes,
  })

  const renderResult = render(
    component,
    {
      container: document.body.appendChild(root),
      // for Vuetify components that use the $vuetify instance property
      vuetify: new Vuetify(),
      routes: router,
      ...options,
    },
    callback
  )

  await router.push('/')

  return renderResult
}

const wait = (timeout?: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

const resizeWindow = (
  width = window.innerWidth,
  height = window.innerHeight
) => {
  ;(window as any).innerWidth = width
  ;(window as any).innerHeight = height
  window.dispatchEvent(new Event('resize'))
  return wait(200)
}

export * from '@testing-library/vue'

export { renderApp as render, resizeWindow, wait }
