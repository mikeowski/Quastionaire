require('dotenv').config({ path: '.env' })
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
  },

  finisher({ commit }, payload) {
    let result = payload

    console.log(process.env)
    const api_key = process.env.API_KEY
    const api = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${result}&rating=pg-13&limit=10`
    fetch(api, {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        commit('finisher', jsonData)
      })
  }
}
