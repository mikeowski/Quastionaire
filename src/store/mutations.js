import lodash from 'lodash'
export default {
  starter(state, payload) {
    state.questions = payload.results
    state.isStart = true
  },

  resultUpdater(state, payload) {
    payload ? state.correctAnswers++ : state.wrongAnswers++
    console.log(state.wrongAnswers, state.correctAnswers)
  },
  finisher(state, payload) {
    state.gif = payload
    let gitNumber = lodash.random(0, 10)
    state.gifUrl = payload.data[gitNumber].images.downsized_medium.url
    state.isFinished = true
    console.log(state.gif.data[gitNumber], state.gifUrl)
  },
  reloader(state) {
    state.isStart = false
    state.isFinished = false
    state.questions = []
    state.gif = []
    state.gifUrl = null
    state.wrongAnswers = 0
    state.correctAnswers = 0
    state.try++
  }
}
