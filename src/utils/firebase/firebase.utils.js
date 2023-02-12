// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore'

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

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
//export const signInWithGoogleRedirect = () =>signInWithGoogleRedirect(auth, googleProvider)

export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd,
	field
) => {
	const batch = writeBatch(db)
	const collectionRef = collection(db, collectionKey)

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object[field].toLowerCase())
		batch.set(docRef, object)
	})

	await batch.commit()
	console.log('batch done')
}

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories')
	const q = query(collectionRef)

	const querySnapshot = await getDocs(q)
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data()

		acc[title.toLowerCase()] = items
		return acc
	}, {})
	return categoryMap
}

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return

	const userDocRef = doc(db, 'users', userAuth.uid)
	//console.log(userDocRef)
	const userSnapShot = await getDoc(userDocRef)
	//console.log(userSnapShot)
	//console.log(userSnapShot.exists())

	//check if user exist
	if (!userSnapShot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			})
		} catch (error) {
			console.log('Error creating user', error.message)
		}
	}

	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) {
		return
	}
	return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) {
		return
	}
	return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback)
