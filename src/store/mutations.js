export default {
  starter(state, payload) {
    state.isStart = true
    if (payload.selectedCategory != null)
      state.selectedCategory = payload.selectedCategory
    state.currentAmount = `&amount=${payload.currentAmount}`
    if (payload.difficulty == 0) state.difficulty = ''
    else if (payload.difficulty == 1) state.difficulty = '&difficulty=easy'
    else if (payload.difficulty == 2) state.difficulty = '&difficulty=medium'
    else if (payload.difficulty == 3) state.difficulty = '&difficulty=hard'
    console.log(state.difficulty, state.selectedCategory, state.currentAmount)
  }
}
