"use client";

const ClientComponentTow = () => {
    const [name, setName] = useState < string > ('Batman');
    return (
        <div>
            <h1>Client Component Tow</h1>
            <p>This is a client-side component.</p>
        </div>
    );
}
export default ClientComponentTow; 
