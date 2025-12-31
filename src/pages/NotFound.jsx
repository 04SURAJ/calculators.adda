// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 text-danger mb-3">404 - Page Not Found!</h1>
      <p className="lead mb-4">
        Sorry, the page you tried to access is not available.
      </p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
}
