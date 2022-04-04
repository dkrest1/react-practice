const SearchItem = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="searchForm">
      <label htmlFor="search"></label>
      <input
        type="text"
        role="searchbox"
        id="search"
        placeholder="search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
