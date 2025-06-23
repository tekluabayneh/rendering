import fs from 'fs';
import SercerSideComponentTow from './server-component-two';
const ServerComponentOne = () => {
    fs.readFileSync("src/component/ServerComponent.tsx", "utf8")
    return (
        <div>
            <h1>Server Component</h1>
            <p>This is a server-rendered component.</p>
            <p>Server components can read files directly from the file system.</p>
            <SercerSideComponentTow />
        </div>
    );
}
export default ServerComponentOne;
