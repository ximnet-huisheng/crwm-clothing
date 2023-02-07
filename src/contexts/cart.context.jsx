import { createContext, useState } from 'react'

//helper function to check product
const addCartItem = (cartItems, productToAdd) => {
	//find if cartItem contain product
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	)

	//if found, increment quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		)
	}

	//return new array with modified cartItem / new cart item
	return [...cartItems, { ...productToAdd, quantity: 1 }]
}
export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
})

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd))
	}

	const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems }
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
