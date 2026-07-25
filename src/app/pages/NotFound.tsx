import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-rich-black text-white text-center px-4">
      <h1 className="text-9xl font-serif text-gold-500 mb-4 opacity-50">404</h1>
      <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-gray-400 mb-10 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-gold-500 text-rich-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
