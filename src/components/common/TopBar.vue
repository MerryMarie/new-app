<template>
 <v-app-bar >
    <v-toolbar-title>FIRENOTE</v-toolbar-title>

    <!-- <nav>
   <router-link to="/">Index</router-link> |
    <router-link to="/about">About</router-link>
    
    </nav>-->
    <v-spacer></v-spacer>
    <v-btn  plain fab small>
    <v-badge
    :content="count"
    :value="count"
    x-small
    color="red"
    dot
    overlap
    >
    <v-icon >
        fa fa-bell
    </v-icon>
    </v-badge>
</v-btn> 
 <v-btn  plain fab small @click.stop="drawer=!drawer">
       
        <v-icon >
         fa fa-cog
        </v-icon>
      
       </v-btn>
 <v-chip v-if="logged"
            class="ma-2"
            color="teal darken-3"
            outlined
            pill
            >
            {{user_name}}
            <v-icon right>
                mdi-account-outline
            </v-icon>
    </v-chip>
<div  v-if="!logged">
<v-btn  plain fab small @click="openDialog">
                                <v-icon color="teal darken-4">fa fa-sign-in</v-icon>
</v-btn>
</div>
        <div v-else>
         
                <v-btn @click="log_out" plain fab small>
                                <v-icon color="teal darken-4">fa fa-sign-out</v-icon>
                    </v-btn>
        </div>
</v-app-bar>

 </template>
<script>
import { unlog} from '../../data/api_handler';
import { mapState ,mapMutations,mapGetters} from 'vuex';
export default {
  name: 'TopBar',
  data(){
    return {};
  },
  computed: {
    ...mapState({
            count: state => state.TopBar.count,
            logged: state => state.logged,
            user_name: state => state.user_name,
            dr: state => state.DialogModals.drawer,
           }
        ),
      ...mapGetters('TopBar',{
          
           count: 'count'
           }
        ),
         drawer: {
           get(){
             return this.dr;
           },
           set(newName){
             return  this.setDrawer(newName);
           } 
        }

  },
   methods: {
    ...mapMutations('TopBar',['setCount']),
    ...mapMutations('DialogModals',['setShow','setShow1','setDialog','setDialog1','setHint','setHint1','setLogin','setPass','setDrawer']),
     ...mapMutations(['isLogged']),
     ...mapMutations('NotifyBlock',['setText1','setSnackbar1']),
     openDialog:function(){
         this.setDialog(true); this.setDialog1(false);
        this.setLogin('');this.setPass('');
    },
    openDialog1:function(){
          this.setDialog(false); this.setDialog1(true);
        this.setLogin('');this.setPass('');
    },
    is_logged:function(){
        return this.isLogged(false);
    },
    log_out:function(){
        var f=(function(status){if(status==200){this.setDialog( false); this.isLogged(false);
         this.setText1("You're logged out");
            this.setSnackbar1(true)
        //this.setM("You're logged out");
        }
        }).bind(this);
        unlog(this.login,this.pass,f);
    },
  },
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