<template>
  <div>
    <b-jumbotron class="bg-dark">
      <b-row align-h="center">
        <b-container fluid='true' class='question'
          ><div
            :class="
              currentQuestion.difficulty === 'hard'
                ? 'hardQuestion'
                : currentQuestion.difficulty === 'medium'
                ? 'mediumQuestion'
                : 'easyQuestion'
            "
          >
            {{ encodedQuestion }}
          </div></b-container
        >
      </b-row>
      <b-row align-h="center" class="answers">
        <b-list-group>
            <b-list-group-item
              class=""
              v-for="(answer, index) in shuffledAnswers"
              :key="index"
              @click="selectIndex(index)"
            >
              {{ answer }}
            </b-list-group-item>
        </b-list-group>
      </b-row>
      <b-row align-h="center">
        <b-button
          class="Selectbtn"
          @click="submitAnswer"
          variant="outline-success"
          :disabled="isAnswered"
          >Submit Answer
        </b-button>
        <b-button
          class="Selectbtn"
          @click="nextQuestion"
          variant="outline-primary"
          :disabled="currentIndex == $store.state.questions.length - 1"
          >Next Question
        </b-button>
      </b-row>
    </b-jumbotron>
  </div>
</template>

<script>
//import typical from 'vue-typical'
import { mapState } from 'vuex'
import lodash from 'lodash'

export default {
  props: {
    nextQuestion: Function,
    currentQuestion: Object,
    currentIndex: Number
  },
  data() {
    return {
      selectedIndex: null,
      encodedQuestion: '',
      correctIndex: null,
      isAnswered: false,
      shuffledAnswers: []
    }
  },
  components: {
    //typical
  },
  computed: {
    ...mapState(['questions'])
  },
  methods: {
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ]
      this.shuffledAnswers = lodash.shuffle(answers)
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      )
      this.shuffledAnswers = this.shuffledAnswers.map((v) => {
        return v
          .replace(/(&#039;)/g, "'")
          .replace(/(&quot;)/g, '"')
          .replace(/(&amp;)/g, '&')
      })
    },
    selectIndex(index) {
      this.selectedIndex = index
    },
    submitAnswer() {
      let isCorrect = false
      if (this.selectedIndex == this.correctIndex) isCorrect = true
      this.isAnswered = true
      this.$store.commit('resultUpdater', isCorrect)
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.encodedQuestion = this.currentQuestion.question
          .replace(/(&#039;)/g, "'")
          .replace(/(&quot;)/g, '"')
          .replace(/(&amp;)/g, '&')
        this.selectedIndex = null
        this.shuffleAnswers()
        this.correctIndex = null
        this.isAnswered = false
      }
    }
  }
}
</script>

<style>
.answers {
  margin: 40px;
}
.Selectbtn {
  margin: 0 30px;
}
.question{
  font-size: 24px;
}
.list-group-item:hover{
  background:rgb(223, 230, 231);
  cursor: pointer;
}
.list-group{
 color: #27354c;
}
.hardQuestion {
  color: #e35f5f;
}

.mediumQuestion {
  color: #e9e98d;
}

.easyQuestion {
  color: #63d763;
}

.tydeneme {
  color: black;
}
</style>
