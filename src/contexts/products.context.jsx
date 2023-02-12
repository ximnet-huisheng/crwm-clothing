import { createContext, useState, useEffect } from 'react'

import {
	//addCollectionAndDocuments,
	getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils.js'
import SHOP_DATA from '../shop-data.js'

export const ProductsContext = createContext({
	products: [],
})

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([])
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA)
	// }, [])
	useEffect(() => {
		const getCategories = async () => {
			const categoryMap = await getCategoriesAndDocuments()
			console.log(JSON.stringify(categoryMap))
		}
		getCategories()
	}, [])
	const value = { products }
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	)
}
