"use client";
import { useFormStatus} from "react-dom";
const Submit = () =>{
const {pending} = useFormStatus()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Submit Your Form</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
	<div className="mb-4">
	  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
	  <input
	    type="text"
	    id="name"
	    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
	    placeholder="Enter your name"
	  />
	</div>
	<div className="mb-4">
	  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
	  <input
	    type="email"
	    id="email"
	    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
	    placeholder="Enter your email"
	  />
	</div>
	<button
	  type="submit"
	  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
				disabled={pending}
	>
	  Submit
	</button>
      </form>
    </div>
  );

 }
 export default Submit;
