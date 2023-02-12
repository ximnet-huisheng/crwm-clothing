import { useContext } from 'react'

import { CategoriesContext } from '../../contexts/categories.context'

import CategoryPreview from '../../components/category-preview/category-preview.component'
const CategoriesPreview = () => {
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

export default CategoriesPreview
