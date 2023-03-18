import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.scss'
const CategoryPreview = ({ title, product }) => {
	return (
		<div className='category-preview-container'>
			<h2>
				<Link className='title' to={title}>
					{title.toUpperCase()}
				</Link>
			</h2>
			<div className='preview'>
				{
					//filter 4 product then map
					product
						.filter((_, idx) => idx < 4)
						.map((product) => (
							<ProductCard key={product.id} product={product}></ProductCard>
						))
				}
			</div>
		</div>
	)
}

export default CategoryPreview
