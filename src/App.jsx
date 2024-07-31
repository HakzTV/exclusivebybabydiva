
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import ProductListing from './Pages/ProductListing';
import ProductUploadForm from './components/ProductUploadForm';
import ProductDetailContent from './Pages/ProductDetailPage';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {


  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/aboutUs" element={<AboutPage />} />
    <Route path="/products" element={<ProductListing />} />
    <Route path="/pro-upload" element={<ProductUploadForm />} />
    <Route path="/product/:id" element={<ProductDetailContent />} /> 
    <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
  )
}

export default App
