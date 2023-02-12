import SHOP_DATA from '../../shop-data.json'
import { Fragment, useContext } from 'react'

import { Route, Routes } from 'react-router-dom'
import './shop.styles.scss'
import CategoriesPreview from './../category-preview/category-preview.components'
import Category from './../category/category.component'

const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
			<Route path=':category' element={<Category />}></Route>
		</Routes>
	)
}

export default Shop
