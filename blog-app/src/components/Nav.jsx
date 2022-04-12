import { Link } from "react-router-dom";
const Nav = ({ Search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts </label>
        <input
          type="text"
          id="search"
          value={Search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Posts"
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="post">Posts</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
