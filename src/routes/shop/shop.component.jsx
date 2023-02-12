import SHOP_DATA from '../../shop-data.json'
import { Fragment, useContext } from 'react'

import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from './../../components/product-card/product-card.component'
import './shop.styles.scss'
import CategoryPreview from '../../components/category-preview/category-preview.component'
const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext)

	return (
		<div className='shop-container'>
			{
				//convert object keys to array and map
				Object.keys(categoriesMap).map((title) => {
					const product = categoriesMap[title]
					return (
						<CategoryPreview
							key={title}
							title={title}
							product={product}
						></CategoryPreview>
					)
				})
			}
		</div>
	)
}

export default Shop
