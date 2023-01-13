import { useState } from 'react'
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
}

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { displayName, email, password, confirmPassword } = formFields
	const handleChange = (event) => {
		const { name, value } = event.target
		setFormFields({ ...formFields, [name]: value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (password === confirmPassword) {
			const UserCredential = await createAuthUserWithEmailAndPassword(
				email,
				password
			)
			console.log(UserCredential.user)
			const userDocRef = await createUserDocumentFromAuth(UserCredential.user)
		}
	}

	return (
		<div className='sign-up-container'>
			<h1>Sign up with email and password</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<FormInput
					label='Confirm Password'
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	)
}

export default SignUpForm
