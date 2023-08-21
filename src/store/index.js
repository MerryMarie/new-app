import Vue from 'vue'
import Vuex from 'vuex'
import IPage from './modules/page.js';
import TopBar from './modules/top_bar.js';
import NotifyBlock from './modules/notify_block.js';
import DialogModals from './modules/dialogs.js';
Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    modules: {
        IPage,
        TopBar,
        NotifyBlock,
        DialogModals
    },
    state: {
        logged: false,
        user_name: ''
    },
    getters: {
        logged: state => {
            return state.logged;
        },
        user_name: state => {
            return state.user_name;
        },
    },
    mutations: {
        isLogged(state, payload) {
            state.logged = payload;
        },
        setUsrName(state, payload) {
            state.user_name = payload;
        },
    },
    actions: {
        isLogged({ commit }, pl) {
            commit(' isLogged', pl);
        },
        setUsrName({ commit }, pl) {
            commit(' setUsrName', pl);
        }

    }
})