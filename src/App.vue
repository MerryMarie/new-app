<template>
    <v-app>
    <!--<ProgressBar :key="$route.fullPath"></ProgressBar>-->
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="success"
      outlined
    >
      {{ text }}
    </v-snackbar>
    <v-app-bar app class="my-5 mx-10 rounded-lg ">
        <v-toolbar-title>FIRENOTE</v-toolbar-title>
    
        <nav>
        <router-link to="/">Index</router-link> |
        <router-link to="/about">About</router-link>
        
        </nav>
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
        <v-btn  plain fab small @click.stop="drawer = !drawer">
       
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
        <v-dialog v-model="dialog" persistent width="400" transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-on="on" plain fab small v-bind="attrs">
                                <v-icon color="teal darken-4">fa fa-sign-in</v-icon>
                    </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">LOG IN</span>
                        <v-spacer></v-spacer>
                    <v-card-actions>
                        
                        
                        <v-btn x-small plain fab @click="dialog = false">
                            <v-icon>fa fa-times</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card-title>
                <v-card-text>
                  <v-col cols="12">
                <v-text-field
                v-model="login"
                  label="Login*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                v-model="pass"
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
                </v-card-text>
                 <v-card-actions>
                        
                    
                    <v-btn class="font-weight-bold"
                        text
                        @click="log_in"
                    >
                        Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog></div>
        <div v-else>
         <template >
                <v-btn @click="log_out" plain fab small>
                                <v-icon color="teal darken-4">fa fa-sign-out</v-icon>
                    </v-btn>
            </template>
        </div>
                       


    </v-app-bar>
     <v-main app class="my-10 mx-7 rounded-lg ">
   

      <!-- If using vue-router -->
      <router-view></router-view>

     </v-main>

  
      <v-navigation-drawer
      v-model="drawer"
      right
      absolute
      bottom
      temporary
      width="400"
    >
     <v-card >
     <v-card-title left class="pt-8 ">SETTINGS</v-card-title>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
      
        <!-- <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>--> 
        </v-list-item-group>
      </v-list></v-card>
    </v-navigation-drawer>

  </v-app>
</template>
<script>
//import ProgressBar from './components/ProgressBar.vue'
  import { mapActions} from 'vuex';
import { reg,log,unlog,check_auth} from './data/api_handler';
export default {
  name: 'App',
 // components: { ProgressBar },
  data(){
    return {  
        dialog: false,
        bg: "#888b7a21",
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        // dateFormatted: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu2: false,
        login:'',
        pass:'',
        logged:false,
        user_name:'',
        count:0,
         snackbar: false,
        text: '',
        timeout: 1500,
        drawer: false,
      group: null,
  };
  },
 computed: {
    dateFormatted() {
      return this.formatDate(this.date)
    },
  },
  methods: {
     ...mapActions('IPage',{
      setM:'setMsg'
    }),
    is_logged:function(){
        return !this.logged;
    },

    register:function(){
        if(this.login!=='' && this.pass!==''){
            reg(this.login,this.pass);
            this.text="You're logged in";
            this.snackbar=true
            //this.setM("You're logged in");
        }
    },
    log_in:function(){
        var f=(function(user){
            this.dialog= false; this.logged=true;this.user_name=user;
            //this.setM("You're logged in");
             this.text="You're logged in";
            this.snackbar=true
            }).bind(this);
        if(this.login!=='' && this.pass!==''){
            log(this.login,this.pass,f);
        }
    },
    log_out:function(){
        var f=(function(status){if(status==200){this.dialog= false; this.logged=false;
         this.text="You're logged out";
            this.snackbar=true
        //this.setM("You're logged out");
        }
        }).bind(this);
        unlog(this.login,this.pass,f);
    },
    weekDay(date) {
      return new Date(date).toLocaleString('ru-RU', { weekday: 'short' });
    },
    titleDate(dates) {
      return dates
        .map(n => new Date(n).toLocaleString('ru-RU', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        }))
        .join(' - ');
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}-${month}-${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
 created() {
     var f=(function(status,user){if(status==200){ this.logged=true;this.user_name=user}}).bind(this);
      check_auth(f);
     
        
    },
  watch: {
     group () {
        this.drawer = false
      },
    date() {
      this.dateFormatted = this.formatDate(this.date)
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
