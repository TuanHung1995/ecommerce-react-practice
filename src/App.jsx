import { Routes, Route } from 'react-router'

import HomePage from './pages/HomePage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import OrderPage from './pages/OrderPage.jsx'
import './App.css'
import TrackingPage from './pages/TrackingPage.jsx'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
