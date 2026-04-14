import Link from "next/link";


const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        
        <h1 className="text-8xl font-extrabold text-gray-800">404</h1>

        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-700">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link href="/">
          <button className="mt-6 flex items-center  px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition mx-auto">
            
            
            🏠 Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;