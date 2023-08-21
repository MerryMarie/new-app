<template>
<v-app>
<!-- <ProgressBar :key="$route.fullPath"></ProgressBar>-->
    <TopBar app class="mt-5 mx-10 rounded-lg "></TopBar>
    
    <MainBlock app class=" mx-5 rounded-lg "> </MainBlock>
   
<!--<CoomonParts> --> 
<NotifyBlock></NotifyBlock>  
<DialogModals></DialogModals>
<SettingsDrawer></SettingsDrawer>
 </v-app>
 </template>
 <script>
import DialogModals from '../common/DialogModals.vue';
import TopBar from '../common/TopBar.vue';
import MainBlock from '../blocks/MainBlock.vue';
import NotifyBlock from '../common/NotifyBlock.vue';
import SettingsDrawer from '../common/SettingsDrawer.vue';
import { mapMutations/*mapActions,,mapState ,mapGetters*/} from 'vuex';
import {check_auth} from '../../data/api_handler';
export default {
  name: 'AppPage',
 components: { TopBar,MainBlock,NotifyBlock,DialogModals,SettingsDrawer },
  data(){
    return {value:'recent' };
  },
 /* computed: {
    ...mapState({}),
     
  },*/
 
  methods: {
     ...mapMutations('TopBar',{
      f1:'setCount'
      }),
      ...mapMutations('NotifyBlock',['setText1','setSnackbar1']),
       ...mapMutations('DialogModals',['setShow','setShow1','setDialog','setDialog1','setHint','setHint1','setLogin','setPass']),
       ...mapMutations(['isLogged','setUsrName']),
  openDialog:function(){
         this.setDialog(true); this.setDialog1(false);
        this.setLogin('');this.setPass('');
    },
    openDialog1:function(){
          this.setDialog(false); this.setDialog1(true);
        this.setLogin('');this.setPass('');
    },

  },
 mounted: function () {
    this.f1(2)
    this.setText1("YOU HAVE NEW MESSAGES");
    this.setSnackbar1(true);
    
  },
 created() {
     var f=(function(status,user){if(status==200){ this.isLogged(true);this.setUsrName(user)}}).bind(this);
      check_auth(f);
     
        
    },

 /* watch: {
    
  },*/
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#app .v-btn--example {
        bottom: 0;
        left: 0;
        position: absolute;
        margin: 0 0 16px 16px;
    }

    .bar {
        margin: 20px 60px 20px 60px;
    }
</style>
