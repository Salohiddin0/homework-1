import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import './App.css'

const Home = () => <h1>Home Page</h1>

const Product = () => <h1>Product Page</h1>

const ProductDetails = () => {
  const { id } = useParams()
  return <h1>Product Details Page - ID: {id}</h1>
}

const Cabinet = () => <h1>Cabinet Page</h1>

const CabinetSettings = () => <h1>Cabinet Settings Page</h1>

const CabinetDashboard = () => <h1>Cabinet Dashboard Page</h1>

const DashboardBalance = () => <h1>Dashboard Balance Page</h1>

const ProductSettingsDetails = () => {
  const { id } = useParams()
  return <h1>Product Settings Details Page - ID: {id}</h1>
}

const App = () => {
  return (
    <Router>
      <div className='container'>
        <nav className='sidebar'>
          <ul className='nav-links'>
            <li>
              <Link to='/' className='nav-item'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/product' className='nav-item'>
                Product
              </Link>
            </li>
            <li>
              <Link to='/cabinet' className='nav-item'>
                Cabinet
              </Link>
            </li>
            <li>
              <Link to='/cabinet/settings' className='nav-item'>
                Cabinet Settings
              </Link>
            </li>
            <li>
              <Link to='/cabinet/dashboard' className='nav-item'>
                Cabinet Dashboard
              </Link>
            </li>
            <li>
              <Link to='/cabinet/dashboard/balance' className='nav-item'>
                Dashboard Balance
              </Link>
            </li>
            <li>
              <Link to='/product/1/settings/details/4' className='nav-item'>
                Product Settings Details
              </Link>
            </li>
          </ul>
        </nav>
        <main className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cabinet' element={<Cabinet />} />
            <Route path='/cabinet/settings' element={<CabinetSettings />} />
            <Route path='/cabinet/dashboard' element={<CabinetDashboard />} />
            <Route
              path='/cabinet/dashboard/balance'
              element={<DashboardBalance />}
            />
            <Route
              path='/product/:id/settings/details/:detailsId'
              element={<ProductSettingsDetails />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
