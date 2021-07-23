import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import pt from 'vuetify/src/locale/pt'
import theme from './theme'

Vue.use(Vuetify)

export default new Vuetify({
  theme,
  lang: {
    locales: { pt },
    current: 'pt',
  },
})
