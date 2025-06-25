"use client"

const ErrorPage = ({ error }: { error: Error }) => {

    useEffect(() => {
        console.error("An error occurred while fetching users.");
    }, []);
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
                <p className="text-gray-700">{error.message}</p>
                <p className="mt-4 text-gray-500">Please try again later.</p>
            </div>
        </div>
    )

}
export default ErrorPage;
