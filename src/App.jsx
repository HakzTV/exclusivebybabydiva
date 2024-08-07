
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import ProductListing from './Pages/ProductListing';
import ProductUploadForm from './components/ProductUploadForm';
import ProductDetailContent from './Pages/ProductDetailPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import ImageUpload from './components/PageContent';


function App() {


  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/aboutUs" element={<AboutPage />} />
    <Route path="/products" element={<ProductListing />} />
    <Route path="/pro-upload" element={<ProductUploadForm />} />
    {/* <Route path="/pageUpload" element={<ImageUpload />} /> */}
    <Route path="/product/:id" element={<ProductDetailContent />} /> 
    <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
    </Routes>
  </Router>
  )
}

export default App
