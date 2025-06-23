import Link from "next/link";

const NavLinks = () => {
    return (
        <ul className="flex space-x-4">
            <li>
                <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            </li>
            <li>
                <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
            </li>
            <li>
                <Link href="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
            </li>
            <li>
                <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
            </li>
        </ul>
    );
}
export default NavLinks;
