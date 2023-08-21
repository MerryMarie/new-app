<template>
<v-container>
  <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        color="success"
        outlined
      >
        {{ text }}
    </v-snackbar>

     <v-snackbar
        v-model="snackbar_err"
        :timeout="timeout"
        color="red accent-2"
        outlined
      >
      <p class="text-center pt-5">
      {{ error }}
      </p>
        
    </v-snackbar>
</v-container>
 </template>
  <script>
import { mapState ,mapMutations,mapGetters} from 'vuex';
export default {
  name: 'NotifyBlock',
  data(){
    return {};
  },
  computed: {
    ...mapState({
           timeout: state => state.NotifyBlock.timeout,
           text: state => state.NotifyBlock.text,
           error: state => state.NotifyBlock.error,
           snackbar:state => state.NotifyBlock.snackbar,
           snackbar_err:state => state.NotifyBlock.snackbar_err,
           }
        ),//'error','timeout','snackbar_err'
      ...mapGetters('NotifyBlock',{
        txt:'text',
        snackbar1:'snackbar',}
        ),
        snackbar: {
           get(){
             return this.snackbar1;
           },
           set(newName){
             return  this.$store.commit('NotifyBlock/setSnackbar1',newName);
           } 
        }

  },
   methods: {
    ...mapMutations('NotifyBlock',['setText1','setSnackbar1']),
  },
}
</script>