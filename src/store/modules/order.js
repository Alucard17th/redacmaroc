import firebase from "firebase/app";
// const functions = require('firebase-functions');
import 'firebase/firestore'
import { db } from '../../main.js';
// get Firestore database instance


/* eslint-disable */
export const orders = {
    state: {
        order: null,
    },
    actions: {
        // REGISTER NEW USER
        async makeOrder({ commit }, form) {
            for (const element of form.order) {
                console.log("MY FORM DATA  :  ")
                console.log(element)
                let user_id = firebase.auth().currentUser.uid

                const res = await db.collection('orders').add({
                    orderId: element.orderId,
                    deliveryDate: element.deliveryDate,
                    textTitle: element.textTitle,
                    wordsCount: element.wordsCount,
                    language: element.language,
                    mainKeyWord: element.mainKeyWord,
                    secondaryKeyWord: element.secondaryKeyWord,
                    textQuality: element.textQuality,
                    consigne: element.consigne,
                    user_id: user_id,
                    statu:'Pending'
                });
            }



            // return db.collection("orders").doc(res.user.uid).set({
            //     email: res.user.email,
            //     role: customClaims
            // })
        },



    },
    mutations: {
        SET_USER(state, user) {

        },
    },
    getters: {
        getOrders: state => state.order,
    }
}