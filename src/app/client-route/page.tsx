"use client"

import ServerSideFunction from "../utils/server-utils"
import { useTheme } from "../component/theme-provider";
const clientroutePage = () => {
    const result = ServerSideFunction();
	const theme = useTheme()
    return (
        <div style={{background: theme.colors.primary}}>
            <h1>Client Route Page</h1>
            <p style={{color: theme.colors.seconday}}>This page is rendered on the client side.</p>
            <p>Server-side function result: {result}</p>
        </div>
    );
}
export default clientroutePage;
