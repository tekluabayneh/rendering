import ServerComponentOne from "../component/server-component-one"

const interlivingpage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Interliving Page</h1>
            <ServerComponentOne />
        </div>
    );
}
export default interlivingpage;

