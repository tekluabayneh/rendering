'use client';
const NavSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="nav-search">
            <input
                value={searchQuery}
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="search-input"
            />
            <button className="search-button">Search</button>
        </div>
    );
}
export default NavSearch;
