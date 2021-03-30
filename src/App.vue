<template>
  <div id="app">
    <Welcome v-if="!isStart && !isFinished" />
    <Question v-if="isStart && !isFinished" :currentQuesitons="getQuestions" />
    <result v-if="isFinished" />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import { mapState } from 'vuex'
import Question from '@/components/Question'
import Result from '@/components/Result'
export default {
  name: 'App',
  components: {
    Result,
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
  background-color: #242c3a;
}
.main-wrapper {
  height: 100vh;
}
body,
html {
  padding: 0;
  margin: 0;
  background-color: #242c3a;
  width: 100% !important;
  min-height: 100vh !important;
}
</style>
