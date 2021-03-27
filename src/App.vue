<template>
  <div id="app">
    <Welcome v-if='!isStart && !isFinished'/>
    <Question v-if='isStart && !isFinished'/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'

import { mapState } from 'vuex'
import Question from '@/components/Question'
export default {
  name: 'App',
  components: {
    Question,
    Welcome
  },
  computed:{
    ...mapState(['isStart','isFinished'])
  }
}
</script>
<style></style>
