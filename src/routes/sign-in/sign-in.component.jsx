//import { useEffect } from 'react'
//import { getRedirectResult } from 'firebase/auth'
import { useState } from 'react'
import {
	//	auth,
	signInWithGooglePopup,
	//	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from './../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
	// useEffect(() => {
	// 	async function getRedirectResult2() {
	// 		// You can await here
	// 		const response = await getRedirectResult(auth)
	// 		console.log(response)
	// 		if (response) {
	// 			const userDocRef = await createUserDocumentFromAuth(response.user)
	// 		}
	// 		// ...
	// 	}
	// 	getRedirectResult2()
	// }, [])

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup()
		//console.log(user);
		const userDocRef = await createUserDocumentFromAuth(user)
	}

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			{/* <button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button> */}
			<SignUpForm />
		</div>
	)
}

export default SignIn
