
export default {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
        count: state => {
            return state.count;
        },
    },
    mutations: {
        setCount(state, payload) {
            state.count = payload;
        },

    },
    actions: {
        setCount({ commit }, pl) {
            commit(' setCount', pl,);
        }

    }
}