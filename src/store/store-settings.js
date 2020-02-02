import Vue from 'vue'
import { LocalStorage, uid, Notify, Loading } from 'quasar'
import { firebaseDb, firebaseAuth, firebaseStore } from 'boot/firebase'
import firestore from 'firebase/firestore'

// import * as admin from 'firebase-admin'
// import * as functions from 'firebase-functions'

const state = {

    friends: {},

}

const mutations = {
    addFriend(state, payload) {
        payload.friend.friendID = payload.docRefid
        console.log("add", payload)
        Vue.set(state.friends, payload.docRefid, payload.friend)
        console.log('friendstate', state.friends)
    },
    updateFriend(state, payload) {
        console.log('updatepayload', payload.updates)
        console.log("edit", payload, state.friends[payload.id])

        Object.assign(state.friends[payload.id], {
            firstName: payload.updates.firstName,
            lastName: payload.updates.lastName,
            email: payload.updates.email,
            friendID: payload.id
        })
    },

}

const actions = {
    async fbReadFriends({ commit }, friend) {
        let userId = firebaseAuth.currentUser.uid
        let ref = await firebaseStore.collection('user').doc(userId).collection('friends')
        ref.onSnapshot(snap => {
            // this.todos = [];
            snap.forEach(doc => {
                var friend = doc.data();
                console.log("friend", friend)
                    // todo.id = doc.id;
                let payload = {
                    docRefid: doc.id,
                    friend: friend
                }
                commit('addFriend', payload)
                    // this.todos.push(todo);
            });
        })
    },

    addFriend({ dispatch }, friend) {
        dispatch('fbAddFriend', friend)
    },
    async fbAddFriend({ commit }, friend) {
        let userId = firebaseAuth.currentUser.uid
        let ref = await firebaseStore.collection('user').doc(userId).collection('friends')
        ref.add({
                firstName: friend.firstName,
                lastName: friend.lastName,
                email: friend.email,
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                Notify.create('Friend added!')
                let payload = {
                    docRefid: docRef.id,
                    friend: friend

                }
                commit('addFriend', payload)
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    },

    async updateFriend({ dispatch, commit }, payload) {

        // dispatch('fbUpdateFriend', payload)
        let userId = firebaseAuth.currentUser.uid
        let docId = payload.id
        let updateref = await firebaseStore.collection('user').doc(userId).collection('friends').doc(docId)
        console.log("dd", updateref, payload)
        let payload1 = {
            id: docId,
            updates: payload.updates
        }
        console.log("ee", payload1)
        commit('updateFriend', payload1)
        updateref.update({
                firstName: payload.updates.firstName,
                lastName: payload.updates.lastName,
                email: payload.updates.email,
            })
            .then(function() {
                Notify.create('Friend Updated!')

            })

    },


}

const getters = {
    friends: state => {

        return state.friends
    },

}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}