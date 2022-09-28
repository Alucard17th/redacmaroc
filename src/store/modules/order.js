// import firebase from "firebase/app";
// const functions = require('firebase-functions');
import 'firebase/firestore'
import { db } from '../../main.js';
// get Firestore database instance


/* eslint-disable */
export const orders = {
    state: {
        order: null,
        currentUser: {},
    },
    actions: {
        // REGISTER NEW USER
        async makeOrder({ commit }, form){
            // orderId: '',
            // deliveryDate: '',
            // textTitle: '',
            // wordsCount: '',
            // language: '',
            // mainKeyWord: '',
            // secondaryKeyWord: '',
            // textQuality: 2,
            // consigne:''
           
            console.log("MY FORM DATA  :  ")
            console.log(form)
            const res = await db.collection('orders').add({
                orderId: form.order.orderId,
                deliveryDate: form.order.deliveryDate,
                textTitle: form.order.textTitle,
                wordsCount: form.order.wordsCount,
                language: form.order.language,
                mainKeyWord: form.order.mainKeyWord,
                secondaryKeyWord: form.order.secondaryKeyWord,
                textQuality: 2,
                consigne:form.order.consigne
              });
              
            // return db.collection("orders").doc(res.user.uid).set({
            //     email: res.user.email,
            //     role: customClaims
            // })
        },

      

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
        getOrders: state => state.currentUser,

    }
}