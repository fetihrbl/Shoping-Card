
function SearchComponent({ searchCourse, courseSearchUserFunction }) {

    return (
        <header className="App-header">
            <h1> 🛒 Shopping Cart</h1>
            <div className="search-bar">
                <label htmlFor="search-input" className="visually-hidden">
                    Search
                </label>
                <input
                    id="search-input"
                    type="text"
                    placeholder="🔍 Search..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                    aria-label="Search..."
                />
            </div>
        </header>
    )
}

export default SearchComponent;