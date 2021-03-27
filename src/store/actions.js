//import axios from 'axios'

export default {
  starter({ commit }, payload) {
    //prepared APİ
    let api = 'https://opentdb.com/api.php?type=multiple'
    if (payload.difficulty != null) {
      api = api + `&difficulty=${payload.difficulty}`
    }
    if (payload.selectedCategory != null) {
      api = api + payload.selectedCategory
    }
    api = api + `&amount=${payload.currentAmount}`
    // get data from APİ
    fetch(api, {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        commit('starter', jsonData)
      })
  }
}
