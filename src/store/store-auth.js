import { LocalStorage, Loading, uid, Notify } from 'quasar'
import { firebaseAuth, firebaseDb } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = {
    loggedIn: false,
    loggedInUser: ''
}

const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value
    },
    setLoggedInUser(state, value) {
        state.loggedInUser = value
    }
}

const actions = {
    registerUser({ dispatch }, payload) {
        Loading.show()
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                console.log('response: ', response)
                payload.uid = response.user.uid
                let userId = uid()
                payload.id = userId

                console.log("payl", payload)

            })
            .catch(error => {
                showErrorMessage(error.message)
            })
    },
    loginUser({ commit }, payload) {
        Loading.show()
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                console.log('response: ', response)
                commit('setLoggedInUser', response.user.email)
            })
            .catch(error => {
                showErrorMessage(error.message)
            })
    },
    logoutUser({ commit }) {
        console.log('logoutUser')
        firebaseAuth.signOut()
            // commit('settings/cleanUser', null, { root: true })


    },
    handleAuthStateChange({ commit, dispatch }) {
        firebaseAuth.onAuthStateChanged(user => {
            Loading.hide()
            if (user) {
                commit('setLoggedIn', true)
                LocalStorage.set('loggedIn', true)
                this.$router.push('/friends')

                dispatch('settings/fbReadFriends', null, { root: true })
                dispatch('settings/fbReadFiles', null, { root: true })

            } else {

                commit('setLoggedIn', false)
                LocalStorage.set('loggedIn', false)
                this.$router.replace('/auth')
            }
        })
    },

}

const getters = {
    loggedInUser: state => {
        return state.loggedInUser
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}