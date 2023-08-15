<template>
<v-row

>
  <v-col
        cols="12"
        md="9"
         
      >
<v-container  >
<v-card outlined
          tile class="pa-7 rounded-lg"  style="height: 740px;" :elevation="7">
  <v-alert
      shaped
      outlined
      type="success"
      v-if="msg!=''"
    >
      {{msg}}
    </v-alert>

    <v-col
          cols="12"
          sm="6"
          md="3"
          
        >
          <v-text-field
            label="Outlined"
            outlined
            @input="updInp"
          ></v-text-field>
        </v-col>
        <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-autocomplete
            v-model="sel"
                :items="items"
                cache-items
                class="mx-4"
                outlined
                hide-no-data
                hide-details
                label="Choose your country"
    ></v-autocomplete>
      </v-col>
        </v-card ></v-container></v-col>

  <v-col
       
      >
        <v-container>
          <v-card outlined
          tile class="pa-7 rounded-lg"  style="height: 740px;" :elevation="7">
        hhh
        </v-card >
        </v-container>
        </v-col>
</v-row>
</template>

<script>
import { mapState ,mapActions,mapGetters} from 'vuex';
import { getContryList} from '../data/api_handler';
export default {
  name: 'IndexPage',
  data(){
    return { sel:""};
  },
 /* props: {
    sel: {
      type: String,
      default: 'Russia'
    }
  },*/
  computed: {
    ...mapState({
            msg: state => state.IPage.msg,
            input: state => state.IPage.input,
           }
        ),
      ...mapGetters('IPage',{
          
           items: 'items'
           }
        ),
   /* msg() {
      // Accessing the Vuex state
      console.log(this.$store.getters.msg);
      return this.$store.getters.msg;
    }*/
  },
  methods: {
    /*setMsg(requestPayload) {
      this.$store.dispatch('setMsg', requestPayload);
    }*/
    ...mapActions('IPage',{
      setM:'setMsg',
      updInp:'updateInput',
      initItemArr:"init"
    }
    ),
  },
  created() {
        getContryList(this.initItemArr);
        
    },
    watch: {
    // эта функция запускается при любом изменении вопроса
    sel: function (newS) {
        console.log(newS);
    }
  },
 /* mounted: function () {
     this.setMsg(this.title);
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
