<template>
  <div class="finisher">
    <b-container
      ><flipper
        class="flipper"
        height="480px"
        :flipped="flipped"
        @click="flip"
        style="margin: 50px auto"
      >
        <div
          slot="back"
          style="
            background-color: #151a23;
            height: 350px;
            border-radius: 12px;
            padding: 15px 10px;
          "
        >
          <b-row align-h="center" style="text-align: center">
            <div style="width: 100%">
              <h2 class="resultMessage">Check Your Results!</h2>
            </div>
          </b-row>
          <b-container class="mt-5 p-5">
            <b-row style="text-align: center" class="mb-2">
              <b-col>
                <typical
                  v-if="flipped"
                  class="correctAnswer"
                  :steps="[500, 'Correct Answers:']"
                  :wrapper="'div'"
                ></typical>
              </b-col>
              <b-col class="correctAnswer">
                {{ $store.state.correctAnswers }}</b-col
              >
            </b-row>

            <b-row style="text-align: center">
              <b-col>
                <typical
                  v-if="flipped"
                  class="wrongAnswer"
                  :steps="[500, 'Wrong Answers:']"
                  :wrapper="'div'"
                ></typical>
              </b-col>
              <b-col class="wrongAnswer">
                {{ $store.state.wrongAnswers }}</b-col
              >
            </b-row>

            <b-row style="text-align: center">
              <b-col>
                <typical
                  v-if="flipped"
                  class="passed"
                  :steps="[500, 'Passed Answers:']"
                  :wrapper="'div'"
                ></typical>
              </b-col>
              <b-col class="passed"> {{ passed }}</b-col>
            </b-row>
          </b-container>
        </div>

        <div slot="front" align="center">
          <b-container fluid="true" style="margin: auto; width: auto">
            <img :src="$store.state.gifUrl" alt="Your Gif Baby" class="img" />
          </b-container>
        </div>
      </flipper>
    </b-container>
    <b-row align-h="center" class="mt-5 p-3">
      <b-container style="margin-bottom: 15px">
        <div style="width: auto; text-align: center">
          <typical
            class="clickMessage"
            :steps="[
              500,
              'Click Gif',
              500,
              'Click Gif and See Your Results',
              1500
            ]"
            :wrapper="'h1'"
            :loop="Infinity"
          ></typical>
        </div>
      </b-container>
      <b-button @click="$store.commit('reloader')" variant="outline-info"
        >Try it Again!!! <ph-repeat :size="24"
      /></b-button>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Flipper from 'vue-flipper'
import typical from 'vue-typical'
import { PhRepeat } from 'phosphor-vue'
export default {
  components: {
    Flipper,
    typical,
    PhRepeat
  },
  data() {
    return {
      flipped: false,
      passed:
        this.$store.state.questions.length -
        (this.$store.state.correctAnswers + this.$store.state.wrongAnswers),
      gifName: null
    }
  },
  computed: {
    ...mapState(['gif']),
    ...mapMutations(['reloader']),
    getGif() {
      let gifUrl
      gifUrl = this.gif.data[0].images.downsized_medium.url
      console.log(gifUrl)
      return gifUrl
    }
  },
  methods: {
    flip() {
      this.flipped = !this.flipped
    }
  }
}
</script>

<style scoped>
@import '~vue-flipper/dist/vue-flipper.css';
.resultMessage {
  color: #4da9c8;
}
.correctAnswer {
  font-size: 1.5rem;
  color: #47bc5d;
}
.passed {
  font-size: 1.5rem;
  color: #8c8787;
}
.wrongAnswer {
  font-size: 1.5rem;
  color: #c81f1f;
}
.clickMessage {
  color: #e06060;
  font-size: 1.5rem;
}
.img {
  margin: auto auto;
  max-width: 500px;
  max-height: 500px;
}
</style>
