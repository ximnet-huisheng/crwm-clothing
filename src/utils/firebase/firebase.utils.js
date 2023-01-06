// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC5ZrZN4OsCIeLIZYdhrQIKI-M536jYPk0',
	authDomain: 'crwn-clothing-db-huislaw.firebaseapp.com',
	projectId: 'crwn-clothing-db-huislaw',
	storageBucket: 'crwn-clothing-db-huislaw.appspot.com',
	messagingSenderId: '231478917106',
	appId: '1:231478917106:web:cef20ac9fc141044415d6b',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
