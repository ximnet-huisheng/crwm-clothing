import Home from './routes/home/home.component'
import { Route, Routes } from 'react-router-dom'
const App = () => {
	return (
		<Routes>
			<Route path='/home' element={<Home />}></Route>
		</Routes>
	)
}

export default App
