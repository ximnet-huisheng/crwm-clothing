//import { useEffect } from 'react'
//import { getRedirectResult } from 'firebase/auth'
//import { useState } from 'react'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import './authentication.styles.scss'

const Authentication = () => {
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

	return (
		<div className='authentication-container'>
			{/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
			{/* <button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect

			</button> */}

			<SignInForm />
			<SignUpForm />
		</div>
	)
}

export default Authentication
