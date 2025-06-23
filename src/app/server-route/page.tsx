import ServersideFunctions from "../utils/server-utils"

const ServerRoutePage =async () => {
	const result = ServersideFunctions()

  return (
    <div>
      <h1>Server Route Page</h1>
      <p>This page is rendered on the server.</p>
      <p>Server-side function result: {result}</p>
    </div>
  );
}
export default ServerRoutePage;
