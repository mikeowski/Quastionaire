<template>
  <div>
    <b-jumbotron
      style="
        background-color: #151a23;
        box-shadow: 5px 10px;
        border-radius: 12px;
      "
    >
      <b-row align-h="center">
        <b-container fluid="true" class="question">
          <div
            :class="
              currentQuestion.difficulty === 'hard'
                ? 'hardQuestion'
                : currentQuestion.difficulty === 'medium'
                ? 'mediumQuestion'
                : 'easyQuestion'
            "
          >
            {{ encodedQuestion }}
          </div>
        </b-container>
      </b-row>
      <hr class="my-4" style="background-color: #2d4564" />
      <b-row align-h="center" class="answers">
        <b-list-group>
          <b-list-group-item
            v-for="(answer, index) in shuffledAnswers"
            :key="index"
            id="question-list"
            style="background-color: #181a1b"
            :class="answerClass(index)"
            @click="selectIndex(index)"
            :disabled="isAnswered"
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
          :disabled="isAnswered || selectedIndex === null"
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
          .replace(/(&eacute;)/g, 'é')
          .replace(/(&ldquo;)/g, '“')
          .replace(/(&hellip;)/g, '...')
          .replace(/(&rdquo;)/g, '”')
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
    },
    answerClass(index) {
      let aclass = ''
      if (this.selectedIndex === index && !this.isAnswered)
        aclass = 'selectedAnswer'
      else if (this.isAnswered && index == this.correctIndex)
        aclass = 'bg-success text-light'
      else if (this.isAnswered && this.selectedIndex == index)
        aclass = 'bg-danger text-light'
      return aclass
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
          .replace(/(&eacute;)/g, 'é')
          .replace(/(&ldquo;)/g, '“')
          .replace(/(&hellip;)/g, '...')
          .replace(/(&rdquo;)/g, '”')
        this.selectedIndex = null
        this.correctIndex = null
        this.shuffleAnswers()
        this.isAnswered = false
      }
    }
  }
}
</script>

<style scoped>
.answers {
  margin: 40px;
  font-min-size: 16px;
  font-max-size: 20px;
}
#question-list:focus {
  background-color: red;
  border: 2px solid #4da9c8;
}
.Selectbtn {
  margin: 5px 30px;
}

.question {
  padding: 0 25px;
  font-size: 24px;
}

.list-group-item:hover {
  box-shadow: 0.5px 0.5px #8c8787;
  cursor: pointer;
}

.list-group-item {
  margin-bottom: 1.5px;
  border: 1px solid #8c8787;
  background-color: #181a1b;
  color: whitesmoke;
}

.selectedAnswer {
  color: #4da9c8;
}

.correctAnswer {
  border: 3px solid rgb(76, 172, 76);
  color: black;
}

.wrongAnswer {
  border: 3px solid rgb(194, 73, 73);
  color: black !important;
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
