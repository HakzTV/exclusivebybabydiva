// // src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import ProductListing from './Pages/ProductListing';
import ProductDetailContent from './Pages/ProductDetailPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ImageUpload from './components/PageContent';
import TeamPage from './Pages/TeamPage';
import BookingForm from './components/BookinForm';
import ProductUploadForm from './components/ProductUploadForm';
import ServicesPage from './Pages/ServicesPage';
import GalleryUploader from './components/GalleryUploader';
import GalleryOverview from './Pages/GalleryOverview';
import GalleryDetail from './Pages/ImgGallery';
import TestimonialUploader from './Pages/TestimonialUploader';
import ContactContent from './Pages/ContactPage';
import LoadingScreen from './components/LoadingScreen';
import FaqPage from './Pages/FaqPage';
import MaleProducts from './Pages/MaleProducts';
import FemaleProducts from './Pages/FemaleProducts';
import KidsProducts from './Pages/KidsProducts';
import SearchPage from './Pages/SearchPage';
import Checkout from './components/Checkout';
import ErrorPage from './Pages/ErrorPage';

// function App() {
//   const [loading, setLoading] = useState(true); // Loading state

//   return (
//     <>
//       {loading && <LoadingScreen setLoading={setLoading} />} {/* Display LoadingScreen if loading */}
//       {!loading && (
//         <Router>
//           <Routes>
//             <Route path="/" element={<Homepage />} />
//             <Route path="/aboutUs" element={<AboutPage />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/uploadGal" element={<GalleryUploader />} />
//             <Route path="/bookNow" element={<BookingForm />} />
//             <Route path="/about-team" element={<TeamPage />} />
            
//             <Route path="/gallery" element={<GalleryOverview />} />
//             <Route path="/testimonialUpload" element={<TestimonialUploader />} />
//             <Route path="/gallery/:id" element={<GalleryDetail />} />
//             <Route path="/pageUpload" element={<ImageUpload />} />
//             <Route path="/contact" element={<ContactContent />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/male" element={<MaleProducts />} />
//             <Route path="/female" element={<FemaleProducts />} />
//             <Route path="/kids" element={<KidsProducts />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/search" element={<SearchPage />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/faq" element={<FaqPage />} />
//           </Routes>
//         </Router>
//       )}
//       <Router>
//         <Routes>
//             <Route path="/products/:id" element={<ProductDetailContent />} />
//             <Route path="/products" element={<ProductListing />} />
//             <Route path="/pro-upload" element={<ProductUploadForm />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen setLoading={setLoading} />}
      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutUs" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/uploadGal" element={<GalleryUploader />} />
            <Route path="/bookNow" element={<BookingForm />} />
            <Route path="/about-team" element={<TeamPage />} />
            <Route path="/gallery" element={<GalleryOverview />} />
            <Route path="/testimonialUpload" element={<TestimonialUploader />} />
            <Route path="/gallery/:id" element={<GalleryDetail />} />
            <Route path="/pageUpload" element={<ImageUpload />} />
            <Route path="/contact" element={<ContactContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/male" element={<MaleProducts />} />
            <Route path="/female" element={<FemaleProducts />} />
            <Route path="/kids" element={<KidsProducts />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/products/:id" element={<ProductDetailContent />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/pro-upload" element={<ProductUploadForm />} />
            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
