<template>
  <div>
    <b-jumbotron class="jumbotron" bg-variant="dark">
      <b-row>
        <b-col class="options">
          <h3>Select Category</h3>
          <b-form-select
            class="bg-dark text-light border-light"
            v-model="selectedCategory"
            :options="categories"
          ></b-form-select>
        </b-col>
        <b-col align-self="center" class="options">
          <h3>Select Difficulty</h3>
          <b-button-group>
            <b-button
              class="diffBtn"
              size="sm"
              variant="primary"
              @click="setDifficult(null)"
              >Any Difficulty
            </b-button>
            <b-button
              class="diffBtn"
              size="sm"
              variant="success"
              @click="setDifficult('easy')"
              >Easy
            </b-button>
            <b-button
              class="diffBtn"
              size="sm"
              variant="warning"
              @click="setDifficult('medium')"
              >Medium
            </b-button>
            <b-button
              class="diffBtn"
              size="sm"
              variant="danger"
              @click="setDifficult('hard')"
              >Difficult
            </b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <b-row class="options" id="setAmount">
        <b-col>
          <h3 class="text-center">Number of Question</h3>
          <b-form-spinbutton
            d="demo-sb"
            v-model="currentAmount"
            min="10"
            max="50"
          ></b-form-spinbutton>
        </b-col>
      </b-row>
      <b-row class="startButton" align-h="center">
        <b-button
          @click="
            $store.dispatch('starter', {
              selectedCategory,
              difficulty,
              currentAmount
            })
          "
          variant="outline-info"
          href="#"
          ><h2>Start</h2></b-button
        >
      </b-row>
    </b-jumbotron>
  </div>
</template>
0
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selectedCategory: null,
      difficulty: null,
      currentAmount: 10
    }
  },
  computed: {
    ...mapState(['categories'])
  },
  methods: {
    setDifficult(difficulty) {
      this.difficulty = difficulty
    }
  }
}
</script>

<style>
.startButton {
  padding-top: 50px;
}

.diffBtn {
  margin: 0 5px;
}

.options {
  padding: 30px;
}

.options h3 {
  color: whitesmoke;
}

#setAmount {
  width: 300px;
  margin: auto;
}
</style>
