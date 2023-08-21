export default {
    namespaced: true,
    state: {
        show: false,
        show1: false,
        dialog: false,
        dialog1: false,
        hint: "",
        hint1: "",
        login: '',
        pass: '',
        drawer: false
    },
    /* getters: {
         snackbar: state => {
             return state.snackbar;
         },
 
     },*/
    mutations: {

        setShow(state, payload) {
            state.show = payload;
        },
        setShow1(state, payload) {
            state.show1 = payload;
        },
        setDialog(state, payload) {
            state.dialog = payload;
        },
        setDialog1(state, payload) {
            state.dialog1 = payload;
        },
        setHint(state, payload) {
            state.hint = payload;
        },
        setHint1(state, payload) {
            state.hint1 = payload;
        },
        setLogin(state, payload) {
            state.login = payload;
        },
        setPass(state, payload) {
            state.pass = payload;
        },
        setDrawer(state, payload) {
            state.drawer = payload;
        },

    },
    actions: {

        /*   setText({ commit }, pl) {
               commit(' setText1', pl, { root: true });
           },
   */


    }
}