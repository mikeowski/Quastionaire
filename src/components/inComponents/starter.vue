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
            <b-button class="diffBtn" variant="primary" @click="setDifficult(0)"
              >Any Difficulty</b-button
            >
            <b-button class="diffBtn" variant="success" @click="setDifficult(1)"
              >Easy</b-button
            >
            <b-button class="diffBtn" variant="warning" @click="setDifficult(2)"
              >Medium
            </b-button>
            <b-button class="diffBtn" variant="danger" @click="setDifficult(3)"
              >Difficult
            </b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <b-row class="options" id="setAmount">
        <b-col>
          <h3 class="text-center">Amount</h3>
          <b-form-spinbutton
            d="demo-sb"
            v-model="amount"
            min="10"
            max="50"
          ></b-form-spinbutton>
        </b-col>
      </b-row>
      <b-row class="startButton" align-h="center">
        <b-button variant="outline-info" href="#"><h2>Start</h2></b-button>
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
      difficulty: 0,
      amount: 10
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
  margin: 0 3px;
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
