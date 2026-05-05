import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide hover:text-indigo-200 transition-colors">
          ✍️ QuoteGen
        </Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/create" className="text-sm bg-white text-indigo-600 px-3 py-1.5 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                + New Quote
              </Link>
              <span className="text-sm text-indigo-200">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-indigo-200 hover:text-white transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm hover:text-indigo-200 transition-colors">
                Login
              </Link>
              <Link to="/register" className="text-sm bg-white text-indigo-600 px-3 py-1.5 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
