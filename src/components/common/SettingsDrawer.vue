<template>
<v-navigation-drawer
      v-model="drawer"
      right
      absolute
      bottom
      temporary
      width="400"
    >
     <v-card >
     <v-card-title left class="pt-8 ">SETTINGS
     <v-spacer></v-spacer>
     <v-card-actions>
   
                        <v-btn x-small plain fab @click="drawer=false">
                            <v-icon>fa fa-times</v-icon>
                        </v-btn>
                    </v-card-actions></v-card-title>
      <v-list
        nav
        dense
      >
        
      </v-list></v-card>
    </v-navigation-drawer>
</template>


<script>
import {mapMutations,mapState} from 'vuex';
export default {
  name: 'SettingsDrawer',
  data(){
    return {};
  },
  computed: {
     ...mapState({
          
        dr: state => state.DialogModals.drawer,
       




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
    ...mapMutations('DialogModals',['setDrawer']),
  },
}
</script>