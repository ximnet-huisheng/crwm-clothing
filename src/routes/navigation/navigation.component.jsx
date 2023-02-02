import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import './navigation.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from './../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {
	const { currentUser } = useContext(UserContext)
	//console.log(currentUser)

	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<div>
						<CrwnLogo className='logo' />
					</div>
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>

					{currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}

					<CartIcon />
				</div>
				<CartDropDown></CartDropDown>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation
