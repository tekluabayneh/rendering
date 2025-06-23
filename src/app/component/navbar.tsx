import NavLinks from "./nav-links";
import NavSearch from "./navSearch";
const NavBar = () => {
    return (
        <nav className=" navbar-expand-lg navbar-light bg-light fixed -top shadow-sm p-3 mb-5 bg-body rounded">
            <NavLinks />;
            <NavSearch />
        </nav>
    )
}
export default NavBar;
