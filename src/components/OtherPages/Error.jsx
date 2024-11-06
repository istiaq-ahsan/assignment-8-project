
const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
                <p className="text-lg text-gray-700">Sorry, the page you’re looking for doesn’t exist.</p>
                <p className="text-sm text-gray-500 mt-2">Please check the URL or go back to the homepage.</p>
            </div>
        </div>
    );
};

export default Error;