import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyDgkR3-h37tPlJVmzImRlJzK_Gq0Mftkuw",
    authDomain: "iron-a8d8e.firebaseapp.com",
    databaseURL: "https://iron-a8d8e.firebaseio.com",
    projectId: "iron-a8d8e",
    storageBucket: "iron-a8d8e.appspot.com",
    messagingSenderId: "857271309319"
};
firebase.initializeApp(config);

const db = firebase.firestore()
const userRef = db.collection('users')


/*Authenticartion*/
export const signup = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(r => {
            const user = {
                uid: r.user.uid,
                email: r.user.email,
                username: r.user.displayName || r.user.email,
                photoURL: r.user.photoURL || '',
                type:'operations'
            }
            userRef.doc(r.user.uid).set(user)
                .then(res => {
                    console.log(res)
                }).catch(e => {
                    console.log(e)
                })
            return user
        }).catch(e => {
            throw e
        })
}

export const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(r => {
            return r
        }).catch(e => {
            throw e
        })
}

export const logout = () => {
    return firebase.auth().signOut()
        .then(r => {
            return r
        }).catch(e => {
            throw e
        })
}