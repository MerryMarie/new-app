import Vue from 'vue'
import Vuex from 'vuex'
import IPage from './modules/page.js';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        IPage
    }
})