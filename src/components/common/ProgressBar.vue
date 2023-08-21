<template>

 <v-progress-linear
        color="lime"
        v-model="value"               
></v-progress-linear>
</template>
<script>

export default {
  name: 'ProgressBar',
  data(){
    return {
        value: 100,
      bufferValue: 20,
      interval: 0,
    };
  },
 
  created() {
    },
    watch: {
    value (val) {
      if (val < 100) return

      this.value = 0
      this.bufferValue = 10
      this.startBuffer()
    },
  },
  mounted () {
    this.startBuffer()
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    startBuffer () {
      clearInterval(this.interval)

      this.interval = setInterval(() => {
        this.value -=0.5;
      }, 50)
    },
  },
}
</script>