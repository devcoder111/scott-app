import Vue from 'vue'
import { LocalStorage, uid, Notify, Loading } from 'quasar'
import { firebaseDb, firebaseAuth, firebaseStore } from 'boot/firebase'
import firestore from 'firebase/firestore'

const state = {

    friends: {},
    files: {},

}

const mutations = {
    addFriend(state, payload) {
        payload.friend.friendID = payload.docRefid
        console.log("add", payload)
        Vue.set(state.friends, payload.docRefid, payload.friend)
        console.log('friendstate', state.friends)
    },
    addFile(state, payload) {
        console.log("add", payload)
        Vue.set(state.files, payload.docRefid, payload.file)
        console.log('friendstate', state.file)
    },
    updateFriend(state, payload) {
        console.log('previousState', state.friends)
        console.log("edit", payload, state.friends[payload.docRefid], payload.updates)
        Object.assign(state.friends[payload.docRefid], {
            firstName: payload.updates.firstName,
            lastName: payload.updates.lastName,
            email: payload.updates.email,

        })
        console.log('updateState', state.friends)
    },
}

const actions = {

    // Initial, reading the friends list
    fbReadFriends({ commit }, friend) {
        let userId = firebaseAuth.currentUser.uid
        let ref = firebaseStore.collection('user').doc(userId).collection('friends')
        ref.onSnapshot(snap => {
            // this.todos = [];
            snap.forEach(doc => {
                var friend = doc.data();
                console.log("friend", friend)
                let payload = {
                    docRefid: doc.id,
                    friend: friend
                }
                commit('addFriend', payload)

            });
        })
    },

    // Initial, reading the mp3 file list
    fbReadFiles({ commit }) {
        let userId = firebaseAuth.currentUser.uid
        let ref = firebaseStore.collection('user').doc(userId).collection('files')
        ref.onSnapshot(snap => {
            // this.todos = [];
            snap.forEach(doc => {
                var file = doc.data();
                console.log("file", file)
                let payload = {
                    docRefid: doc.id,
                    file: file
                }
                commit('addFile', payload)

            });
        })
    },

    // Adding the new friend
    addFriend({ dispatch }, friend) {
        dispatch('fbAddFriend', friend)
    },
    fbAddFriend({ commit }, friend) {
        let userId = firebaseAuth.currentUser.uid
        let ref = firebaseStore.collection('user').doc(userId).collection('friends')
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

    // updating existing friend
    updateFriend({ dispatch, commit }, payload) {

        // dispatch('fbUpdateFriend', payload)
        let userId = firebaseAuth.currentUser.uid
        let docId = payload.id
        let updateref = firebaseStore.collection('user').doc(userId).collection('friends').doc(docId)
        console.log("dd", updateref, payload)
        let payload1 = {
            docRefid: docId,
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

    // Adding the mp3 file 
    addFile({ dispatch, commit }, payload) {
        let userId = firebaseAuth.currentUser.uid
        let ref = firebaseStore.collection('user').doc(userId).collection('files')
        ref.add({
            filename: payload.filename,
            filePath: payload.filePath,
            downloadurl: payload.downloadurl
        })
    }


}

const getters = {
    friends: state => {

        return state.friends
    },
    files: state => {

        return state.files
    },

}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}