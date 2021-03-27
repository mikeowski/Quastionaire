export default {
  starter(state, payload) {
    state.questions = payload.results
    state.isStart = true
  },
  resultUpdater(state, payload) {
    if (payload != 'pass')
      payload ? state.correctAnswers++ : state.wrongAnswers++
    else state.passedQuestions++
    console.log('çalıştı')
  }
}
