<template>
  <div id="app">
    <Welcome v-if="!isStart && !isFinished" />
    <Question v-if="isStart && !isFinished" :currentQuesitons="getQuestions" />
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
  computed: {
    ...mapState(['isStart', 'isFinished']),
    getQuestions() {
      return this.$store.state.questions
    }
  }
}
</script>
<style>
#app {
  background-color: #242C3A;

}
body, html {
  padding: 0;
  margin: 0;
  background-color: #242C3A;
  width: 100% !important;
  min-height: 100vh !important;
}
</style>
