import '@testing-library/jest-dom'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { render } from '@testing-library/vue'

Vue.use(Vuetify)

const renderWithVuetify: typeof render = (component, options?) => {
  const root = document.createElement('div')
  root.setAttribute('data-app', 'true')

  return render(component, {
    container: document.body.appendChild(root),
    // for Vuetify components that use the $vuetify instance property
    vuetify: new Vuetify(),
    ...options,
  })
}

export * from '@testing-library/vue'

export { renderWithVuetify as render }
