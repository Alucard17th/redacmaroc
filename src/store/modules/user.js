import firebase from "firebase/app";
// const functions = require('firebase-functions');
import 'firebase/firestore'
import { db } from '../../main.js';
// get Firestore database instance


/* eslint-disable */
export const users = {
    state: {
        user: null,
        currentUser: {},
    },
    actions: {
        // REGISTER NEW USER
        async registerUser({ commit }, form){
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
        async loginUser({ dispatch }, form){
            await  firebase
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
        async setRole({commit}, user){
            const citiesRef = db.collection('roles');
            const snapshot = await citiesRef.doc(user.uid).get();
            const role = snapshot.data()["role"]["role"]
            commit('SET_USER', {'data': user, 'role': role})
            console.log("ROLES : ")
            console.log(role)
        }

    },
    mutations: {
        SET_USER(state, user) {
            state.currentUser = {
                id:user.data.uid,
                name:user.data.displayName,
                role: user.role,
                email:user.data.email
            }
        },
    },
    getters: {
        getCurrentUser: state => state.currentUser,

    }
}