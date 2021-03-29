<template>
  <div class="Question">
    <b-container class="main-wrapper">
      <b-navbar class="header">
        <b-col class="text-center">
          <typical
            class="brandName"
            :steps="[
              500,
              '?',
              1500,
              'Quastionaire',
              1000,
              'Have a Luck 👍',
              2000,
              'Quastionaire',
              10000
            ]"
            :wrapper="'h1'"
            :loop="Infinity"
          ></typical>
        </b-col>
      </b-navbar>
      <b-row>
        <b-col>
          <b-container>
            <question-box
              :nextQuestion="nextQuestion"
              :currentQuestion="currentQuesitons[currentIndex]"
              :currentIndex="currentIndex"
            />
          </b-container>
        </b-col>
      </b-row>
      <b-row class="navBot" fixed="bottom">
        <b-nav>
          <b-col>
            <b-link class="text-light" href="https://github.com/MahykBurak"
              >My github page
            </b-link>
          </b-col>
        </b-nav>
        <b-nav class="ml-auto" disabled>
          <b-col class="text-right">
            <typical
              class="helloType"
              :steps="[
                ' ',
                500,
                '{',
                1000,
                '{Made',
                500,
                '{Made by',
                100,
                '{Made by Burak Mike ©}',
                1000
              ]"
              :wrapper="'div'"
            ></typical>
          </b-col>
        </b-nav>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import typical from 'vue-typical'
import QuestionBox from '@/components/inComponents/questionBox'
export default {
  props: {
    currentQuesitons: Array
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
    QuestionBox,
    typical
  },
  methods: {
    nextQuestion() {
      this.currentIndex++
    }
  }
}
</script>
<style>
.header {
  height: 100px;
}

.brandName {
  color: whitesmoke;
}

.helloType {
  color: navajowhite;
}

.main-wrapper {
  height: 100vh;
}

.Question {
  background-color: #242c3a;
}

.navBot {
  margin-bottom: 2px;
}
</style>
