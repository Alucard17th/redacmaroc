
import 'firebase/firestore'
import firebase from "firebase/app";
import { db } from '../../main.js';
// get Firestore database instance


/* eslint-disable */
export const tests = {
    state: {
        currentTest: {}
    },
    actions: {
        // REGISTER NEW USER
        async sendTest({ commit }, test) {
            // Add a new document with a generated id.
            let user_id = firebase.auth().currentUser.uid
            let statu = 'Pending'
            await db.collection("tests").add({
                testContent: test,
                user_id: user_id,
                testStatu: statu,
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef);
                    commit('SET_CURRENT_TEST', { 'docId': docRef.id, 'userId': user_id, 'content': test, 'statu': statu })
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        },
    },

    mutations: {
        SET_CURRENT_TEST(state, test) {
            state.currentTest = {
                testId: test.docId,
                userId: test.userId,
                testContent: test.content,
                testStatu: test.statu
            }
        },
    },

    getters: {
        getCurrentTest: state => state.currentTest,
    }
}