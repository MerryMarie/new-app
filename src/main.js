import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  data: {
    value: 'Hello!',
    dialog: false,
    bg: "#888b7a21",
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    // dateFormatted: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu2: false,
  },
  computed: {
    dateFormatted() {
      return this.formatDate(this.date)
    },
  },
  methods: {
    weekDay(date) {
      return new Date(date).toLocaleString('ru-RU', { weekday: 'short' });
    },
    titleDate(dates) {
      return dates
        .map(n => new Date(n).toLocaleString('ru-RU', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        }))
        .join(' - ');
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}-${month}-${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  render: h => h(App)
}).$mount('#app')
