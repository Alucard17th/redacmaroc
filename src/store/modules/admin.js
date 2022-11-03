import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/functions'
import { db } from '../../main.js';

/* eslint-disable */
export const manager = {
    state: {
        allOrders: [],
        allTests: [],

    },
    actions: {

        // ORDERS CRUD
        async getOrders({ commit }) {
            const snapshot = await firebase.firestore().collection('orders').get()
            // const orders = snapshot.docs.map(doc => doc.data())
            const orders = snapshot.docs.map(a => {
                const data = a.data();
                const id = a.id;
                return { id, ...data };
            });
            commit('SET_ORDERS', orders)
        },

        async editOrder({ commit, dispatch }, payload) {
            return db.collection("orders").doc(payload.item.id).update({
                consigne: payload.item.consigne,
                deliveryDate: payload.item.deliveryDate,
                // language: order.title,
                mainKeyWord: payload.item.mainKeyWord,
                orderId: "1",
                // secondaryKeyWord: "1",
                textQuality: payload.item.quality,
                textTitle: payload.item.title,
                // user_id: "MNOwTuyJGUb7nzH85FgQmhwoaXn2",
                wordsCount: payload.item.wordsCount,
            })
                .then(() => {
                    console.log("Document successfully edited!");
                    dispatch('showToast', payload)
                }).catch((error) => {
                    console.error("Error editing document: ", error);
                });
        },

        async deleteOrder({ commit, dispatch }, payload) {
            db.collection("orders").doc(payload.item).delete().then(() => {
                commit('REMOVE_ORDER', payload.item)
                dispatch('showToast', payload)
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        },


        // TESTS CRUD
        async getTests({ commit }) {
            const snapshot = await firebase.firestore().collection('tests').get()
            const tests = snapshot.docs.map(a => {
                const data = a.data();
                const id = a.id;
                return { id, ...data };
            });
            commit('SET_TESTS', tests)
        },

        async editTest({ commit, dispatch }, payload) {
            return db.collection("tests").doc(payload.item.id).update({ 
                testStatu: payload.item.statu
            })
            .then(() => {
                console.log("Test successfully edited!");
                dispatch('showToast', payload)
            }).catch((error) => {
                console.error("Error editing Test: ", error);
            });
        },

        async deleteTest({ commit, dispatch }, payload) {
            return db.collection("tests").doc(payload.item).delete().then(() => {
                commit('REMOVE_TEST', payload.item)
                dispatch('showToast', payload)
                console.log("Test successfully deleted!");
            }).catch((error) => {
                console.error("Error removing Test: ", error);
            });
        },

        async showToast({commit},payload ){
            payload.vm.$bvToast.toast(payload.text, {
                title : 'Notification',
                // variant : 'success',
                solid : true,
                toaster: 'b-toaster-bottom-left'
              })
        }

    },

    mutations: {
        SET_ORDERS(state, orders) {
            state.allOrders = orders
        },

        SET_TESTS(state, tests) {
            state.allTests = tests
        },
        REMOVE_ORDER(state, orderId) {
            const indexOfObject = state.allOrders.findIndex(object => {
                return object.id === orderId;
            });

            state.allOrders.splice(indexOfObject, 1);
        },
        REMOVE_TEST(state, testId) {
            const indexOfObject = state.allTests.findIndex(object => {
                return object.id === testId;
            });

            state.allTests.splice(indexOfObject, 1);
        }
    },

    getters: {
        getAllOrders: state => state.allOrders,
        getAllTests: state => state.allTests,
    }
}