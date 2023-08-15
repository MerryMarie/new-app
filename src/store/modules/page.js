
export default {
    namespaced: true,
    state: {
        msg: "",
        input: "ddd",
        items: []
    },
    getters: {
        msg: state => {
            return state.message;
        },
        items: state => {

            return state.items;
        },
    },
    mutations: {
        setMessage(state, payload) {
            state.msg = payload;
        },
        setInput(state, payload) {
            state.input = payload;
        },
        setItems(state, payload) {
            state.items = payload;
        },
        ptint() {
            console.log(this.state.input);
        }

    },
    actions: {
        setMsg({ commit }, pl) {
            console.log(pl);
            commit('setMessage', pl);
        },
        updateInput({ commit }, e) {
            console.log(e);
            commit('setInput', e);
        },
        init({ commit }, data) {


            commit('setItems', data);


        },
        ptintInput({ commit }) {
            commit('ptint');
        }
    }
}