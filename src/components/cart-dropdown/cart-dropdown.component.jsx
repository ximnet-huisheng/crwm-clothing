import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
const CartDropDown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{[].map(() => (
					<CartItem></CartItem>
				))}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	)
}

export default CartDropDown
