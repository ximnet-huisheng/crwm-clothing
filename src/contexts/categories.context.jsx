import { createContext, useState, useEffect } from 'react'

import {
	//addCollectionAndDocuments,
	getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils.js'
import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
	categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setcategoriesMap] = useState({})
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA)
	// }, [])
	useEffect(() => {
		const getCategories = async () => {
			const categoryMap = await getCategoriesAndDocuments()
			setcategoriesMap(categoryMap)
		}
		getCategories()
	}, [])
	const value = { categoriesMap }
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	)
}
