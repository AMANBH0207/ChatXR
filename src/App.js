import './App.css'
import Nav from './Components/Nav.js';
import SignInPage from './Components/SignInPage.js';
import { Route,Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';


function App() {
  return (<>
  <Nav/>
  <Routes>
        <Route path="/" element={<HomePage/>}></Route>
				<Route path="/SignInPage" element={<SignInPage />} />
			</Routes>
  </>
  )
}

export default App;
