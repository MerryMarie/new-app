import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'font-awesome/css/font-awesome.min.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
});
