import NavBar from "../component/navbar";

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <NavBar />
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
            <p className="text-lg mb-8">This is a simple landing page built with Next.js and Tailwind CSS.</p>
            <a href="/about" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Learn More
            </a>
        </div>
    );
}
export default LandingPage;
