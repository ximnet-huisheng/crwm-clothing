import SHOP_DATA from '../../shop-data.json'
import { Fragment, useContext } from 'react'

import { Route, Routes } from 'react-router-dom'
import './shop.styles.scss'
import CategoriesPreview from './../category-preview/category-preview.components'

const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
		</Routes>
	)
}

export default Shop
