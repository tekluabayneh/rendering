'use client';


const ClientComponentOne = () => {
    const [name, setName] = useState < string > ("Batman");
    return (
        <div>
            <h1>Client Component One</h1>
            <p>This is a client-side component.</p>
        </div>
    );
}
export default ClientComponentOne;
