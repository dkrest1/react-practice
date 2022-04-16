import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "../context/DataContext";
const Home = () => {
  const { fetchError, isLoading, searchResult } = useContext(DataContext);
  return (
    <main className="Home">
      {/* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No post to display</p>
      )} */}

      {isLoading && <p className="statusMsg">Loading Posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResult.length ? (
          <Feed posts={searchResult} />
        ) : (
          <p className="statusMsg">No Post to display.</p>
        ))}
    </main>
  );
};

export default Home;
