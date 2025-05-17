

const Error = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-8xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        Oops!
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        404 - PAGE NOT FOUND
      </h2>
      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
      >
        GO TO HOMEPAGE
      </a>
    </div>
        </div>
    );
};

export default Error;