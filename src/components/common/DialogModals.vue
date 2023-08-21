<template>
<v-container>
<v-dialog v-model="dialog" persistent width="400" >
            <v-card>
                <v-card-title>
                    <span class="text-h5">LOG IN</span>
                        <v-spacer></v-spacer>
                    <v-card-actions>
                        
                        
                        <v-btn x-small plain fab @click="setDialog(false)">
                            <v-icon>fa fa-times</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card-title>
                <v-card-text>
                    
                  <v-col cols="12">
                <v-text-field
                v-model="login"
                  label="Login*"
                  :error-messages="hint"
               
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                v-model="pass"
                  label="Password*"
                  
                  :error-messages="hint1"
                  required


                   :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        
                  :type="show ? 'text' : 'password'"        
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
                </v-card-text>
                Have no account? <a
                        text
                        @click="openDialog1"
                    >
                        Register
                    </a>
                 <v-card-actions>
                        
                    
                    <v-btn class="font-weight-bold"
                        text
                        @click="log_in"
                    >
                        Login
                    </v-btn>
                  
                </v-card-actions>
            </v-card>
        </v-dialog>

<v-dialog v-model="dialog1" persistent width="400" >
            <v-card>
                <v-card-title>
                    <span class="text-h5">REGISTER</span>
                        <v-spacer></v-spacer>
                    <v-card-actions>
                        
                        
                        <v-btn x-small plain fab @click="setDialog1(false)">
                            <v-icon>fa fa-times</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card-title>
             <v-card-text>
              <v-col cols="12">
                <v-text-field
               
                  label="Nickname"
                  
               
                  required
                ></v-text-field>
              </v-col>
                  <v-col cols="12">
                <v-text-field
                v-model="login"
                  label="Login*"
                  :error-messages="hint1"
                :rules="[rules.required,rules.len]"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                v-model="pass"
                  label="Password*"
                  :rules="[rules.required,rules.val,rules.len]"
                  :error-messages="hint1"
                  required


                   :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        
                  :type="show1 ? 'text' : 'password'"        
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
                </v-card-text>
                Have a account? <a
                        text
                         @click="openDialog"
                    >
                        Login
                    </a>
                 <v-card-actions>
                        
                    
                    <v-btn class="font-weight-bold"
                        text
                        @click="register"
                    >
                        Register
                    </v-btn>
                  
                </v-card-actions>
            </v-card>
        </v-dialog>
        
</v-container>


</template>
 <script>
import { reg,log} from '../../data/api_handler';
import { mapState ,mapMutations/*,mapGetters*/} from 'vuex';
export default {
  name: 'DialogModals',
  data(){
    return {
        rules: {
            required: value => !!value || 'Required',
            len: value => value.length >= 5 || 'Min 5 chars',
            val: function (value) {
            var re = /^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{1,}$/;
            return re.test(value) || 'Must contain only latin chars,numbers and spesial chars';
            }
            
        }


    };
  },
  computed: {
    ...mapState({
          
        show00: state => state.DialogModals.show,
        show11: state => state.DialogModals.show1,
        dialog: state => state.DialogModals.dialog,
        dialog1: state => state.DialogModals.dialog1,
        hint: state => state.DialogModals.hint,
        hint1: state => state.DialogModals.hint1,
        loginS: state => state.DialogModals.login,
        passS: state => state.DialogModals.pass,
        logged:state => state.logged




           }
        ),
       login: {
           get(){
             return this.loginS;
           },
           set(newName){
             return  this.setLogin(newName);
           } 
        },      
         pass: {
           get(){
             return this.passS;
           },
           set(newName){
             return  this.setPass(newName);
           } 
        },
        show: {
           get(){
             return this.show00;
           },
           set(newName){
             return  this.setShow(newName);
           } 
        },
        show1: {
           get(){
             return this.show11;
           },
           set(newName){
             return  this.setShow1(newName);
           } 
        }

  },
   methods: {
   ...mapMutations('DialogModals',['setShow','setShow1','setDialog','setDialog1','setHint','setHint1','setLogin','setPass']),
    ...mapMutations(['isLogged','setUsrName']),
    ...mapMutations('NotifyBlock',['setText1','setSnackbar1','setSnackbarErr','setError']),
  openDialog:function(){
         this.setDialog(true); this.setDialog1(false);
        this.setLogin('');this.setPass('');
    },
    openDialog1:function(){
          this.setDialog(false); this.setDialog1(true);
        this.setLogin('');this.setPass('');
    },
    register:function(){
      var f=(function(status,user,err){
          if(status==200){
           this.setDialog(false); this.isLogged(true);this.setUsrName(user);
             this.setText1("You're registered");
            this.setSnackbar1(true);
          }else{
            this.setError(err);
            this.setSnackbarErr(true);
            this.setLogin('');this.setPass('');
          }
            }).bind(this);
        if(this.login!=='' && this.pass!==''){
            reg(this.login,this.pass,f);
        }
        if(this.pass!==''){
            this.setHint1("Password is required");
        }
         if(this.login!==''){
            this.setHint("Login is required");
        }
    },
    log_in:function(){
        var f=(function(status,user,err){
          if(status==200){
             this.setDialog(false); this.isLogged(true);this.setUsrName(user);
              this.setText1("You're logged in");
            this.setSnackbar1(true)
          }else{
            this.setError(err);
            this.setSnackbarErr(true);
           this.setLogin('');this.setPass('');
          }
            }).bind(this);
        if(this.login!=='' && this.pass!==''){
            log(this.login,this.pass,f);
        }

    },
  },
   watch: {
    login(){
      this.setHint("");
    },
    pass(){
      this.setHint1("");
    },
  },
}
</script>