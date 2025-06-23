"use client"

import ServerSideFunction from "../utils/server-utils"

const clientroutePage = () => {
    const result = ServerSideFunction();
    return (
        <div>
            <h1>Client Route Page</h1>
            <p>This page is rendered on the client side.</p>
            <p>Server-side function result: {result}</p>
        </div>
    );
}
export default clientroutePage;
