import { SignInButton } from "@clerk/nextjs";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-lg font-bold">
      <div className="text-lg font-bold">
	  <h1 className="text-2xl">MyApp</h1>
      </div>
      <div className="text-lg font-bold">
	
      </div>
     <SignInButton mode="modal"/>

      </div>
      </nav>
)
}
export default Navigation;
