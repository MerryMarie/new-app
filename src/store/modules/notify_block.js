
export default {
    namespaced: true,
    state: {
        error: '',
        text: '',
        timeout: 1500,
        snackbar: false,
        snackbar_err: false,
    },
    getters: {
        snackbar: state => {
            return state.snackbar;
        },
        snackbar_err: state => {
            return state.snackbar_err;
        },
        error: state => {
            return state.error;
        },
        timeout: state => {
            return state.timeout;
        },
        text: state => {
            return state.text;
        },
    },
    mutations: {

        setSnackbarErr(state, payload) {
            state.snackbar_err = payload;
        },
        setSnackbar1(state, payload) {
            state.snackbar = payload;
        },
        setText1(state, payload) {
            state.text = payload;
        },
        setTimeout(state, payload) {
            state.timeout = payload;
        },
        setError(state, payload) {
            state.error = payload;
        },

    },
    actions: {

        /* setText({ commit }, pl) {
             commit(' setText1', pl, { root: true });
         },
         setError({ commit }, pl) {
             commit(' setError', pl);
         },
         setTimeout({ commit }, pl) {
             commit(' setTimeout', pl);
         },
         setSnackbarErr({ commit }, pl) {
             commit(' setSnackbarErr', pl);
         },
         setSnackbar({ commit }, pl) {
             commit(' setSnackbar1', pl, { root: true });
         }
 */
    }
}