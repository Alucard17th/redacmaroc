import firebase from "firebase/app";
// const functions = require('firebase-functions');
import 'firebase/firestore'
import { db } from '../../main.js';
// get Firestore database instance

import { router } from "../../main.js"

/* eslint-disable */
export const users = {
    state: {
        user: null,
        currentUser: {},
    },
    actions: {
        // REGISTER NEW USER
        async registerUser({ commit }, form) {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(form.email, form.password)
                .then((res) => {
                    const customClaims = {
                        role: form.role,
                    };

                    return db.collection("roles").doc(res.user.uid).set({
                        email: res.user.email,
                        role: customClaims
                    })
                })
                .catch((error) => {
                    alert(error.message);
                });
        },

        // USERS LOGIN
        async loginUser({ dispatch }, form) {
            await firebase
                .auth()
                .signInWithEmailAndPassword(form.login, form.password)
                .then((res) => {
                    dispatch('setRole', res.user)
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },

        // GET THE LOGGED IN USER ROLE FROM ROLES COLLECTION
        async setRole({ commit }, user) {
            // REDIRECT AFTER LOGIN
            router.push("/user-dashboard");
            const citiesRef = db.collection('roles');
            const snapshot = await citiesRef.doc(user.uid).get();
            const role = snapshot.data()["role"]["role"]
            commit('SET_USER', { 'data': user, 'role': role })
            commit('SET_LOCAL_STORAGE_USER', { 'data': user, 'role': role })

        },

        async setUserOnRefresh({ commit }, user) {
            const citiesRef = db.collection('roles');
            const snapshot = await citiesRef.doc(user.uid).get();
            const role = snapshot.data()["role"]["role"]
            console.log('CUURENT USER : ')
            console.log(user)
            commit('SET_USER', { 'data': user, 'role': role })
        },

        // USER LOGOUT 
        async userLogout({ commit }) {
            await firebase.auth().signOut().then(() => {
                // Sign-out successful.
                commit('SET_EMPTY_USER')
                commit('SET_EMPTY_LOCAL_STORAGE_USER')

                // REDIRECT AFTER LOGOUT
                router.push("/");

            }).catch((error) => {
                // An error happened.
                console.log(error.message)
            });
        },

        // SEND RESET PASSWORD EMAIL
        async resetPassword({ commit }, email) {
            await firebase.auth().sendPasswordResetEmail(email)
                .then(() => {
                    console.log("EMAIL SUCCES")
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                });
        },

        // EDIT USER PROFILE DATA/INFO
        async editUser({ commit }, form) {
            var user = firebase.auth().currentUser;
            user.updateProfile({ 
                displayName: form.name, 
                photoURL: "https://example.com/jane-q-user/profile.jpg",
                email: form.email
            })
                .then(function () {
                    alert(user.displayName)
                })
                .catch(function (error) {
                    alert(error.message)
                });
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.currentUser = {
                id: user.data.uid,
                name: user.data.name,
                role: user.role,
                email: user.data.email,
                photoURL: user.data.picture
            }
        },
        SET_LOCAL_STORAGE_USER(state, user) {
            localStorage.setItem('currentUz', JSON.stringify({
                id: user.data.uid,
                name: user.data.name,
                role: user.role,
                email: user.data.email,
                photoURL: user.data.picture
            }))
        },
        SET_EMPTY_USER(state) {
            state.currentUser = {}
        },
        SET_EMPTY_LOCAL_STORAGE_USER() {
            localStorage.removeItem('currentUz');
        }
    },
    getters: {
        getCurrentUser: state => state.currentUser,
    }
}