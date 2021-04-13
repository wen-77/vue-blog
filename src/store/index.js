import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import _ from 'lodash'
import { db } from './firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    searchKey: "",
    account: "wen",
    focusId: "",
    articleChanged: false
  },
  mutations: {
    fetchArticles: ( state, payload ) => {
      state.articles = payload
    },
    changeSearchKey: ( state, payload ) => {
      state.searchKey = payload
    },
    changeFocusId: ( state, payload ) => {
      state.focusId = payload
    },
    addArticle: ( state, payload ) => {
      state.articles = [payload, ...state.articles]
      state.articleChanged = !state.articleChanged
    },
    updateArticle:( state,{ id,newArticle } ) => {
      const index = state.articles.map( art => art.id ).indexOf( id )
      state.articles[ index ] = newArticle
      state.articleChanged = !state.articleChanged
    },
    deleteArticle:( state , payload ) => {
      const index = state.articles.map( art => art.id ).indexOf( payload )
      state.articles.splice( index,1 )
    }
  },
  actions: {
    fetchArticles: async ({ commit }) => {
      const Ref = db.collection("Articles")
      const result = await Ref.get()
      var payload = []

      result.forEach(art => {
        payload.push({ id:art.id,...art.data() })
      })
      commit('fetchArticles',payload)
    },
    //因為是從component傳值過來，所以後面要加payload
    changeSearchKey: ({ commit }, payload) => {
      commit('changeSearchKey', payload)
    },
    changeFocusId: ({ commit }, payload) => {
      commit('changeFocusId',payload)
    },
    addArticle: async ({ commit }, payload) => {
      const Ref = db.collection("Articles")
      const addRef = Ref.add( payload )
      commit('addArticle',{ id: addRef.id, ...payload })
      return addRef.id
    },
    updateArticle: async ({commit},payload) => {
      const docRef = db.collection("Articles").doc(payload.id)
      await docRef.update(payload.newArticle)
      commit('updateArticle',payload)
    },
    deleteArticle: async ({commit},payload) => {
      const docRef = db.collection("Articles").doc(payload)
      await docRef.delete()
      commit('deleteArticle',payload)
    }
  },
  getters: {
    //當文章title和搜尋文字一樣，文章才會出現
    filterBySearchKey: state => {
      if (state.articles.length) {
        if (state.searchKey === "") {
          return state.articles
        } else {
          return state.articles.filter(art => art.title === state.searchKey)
        }
      }
    },
    filterById: state => {
      if ( state.articles.length ) {
        return state.articles.filter( art => art.id === state.focusId )[ 0 ]
      }
    }
  }
})