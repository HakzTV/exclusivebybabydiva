
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const ErrorPage = () => {
  return (
    <div className="container">
        <div className="page error-content">
<div className="logo">
                            <img src={Logo} alt="Logo" />
                     
                    </div>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link className='btn well' to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back to Homepage
      </Link>
    </div>
        </div>
    </div>
  );
};

export default ErrorPage;
