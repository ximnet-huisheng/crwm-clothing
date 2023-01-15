import { createContext, useState, useEffect } from 'react'
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils'

//as the actual value your want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
})

//provider is the actual component
export const UserProvider = ({ children }) => {
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user)
			}
			setCurrentUser(user)
		})

		return unsubscribe
	}, [])

	const [currentUser, setCurrentUser] = useState(null)
	const value = { currentUser, setCurrentUser }
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
