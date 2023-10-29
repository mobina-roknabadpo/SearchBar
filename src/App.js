import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/index.jsx";
import getData from "./Services/fetchMovies";
import SearchResult from "./components/SearchResult/index.jsx";
import EmptyState from "./components/EmptyState/index.jsx";
import Loading from "./components/Loading/Loading.jsx";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [type, setType] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasMore(false);
    if (!query) {
      setData([]);
    }

    const timeOut = setTimeout(() => {
      if (query.trim().length > 0) {
        setHasMore(true);
        getMovies();
      }
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    setData([]);
    setPage(1);

    if (!data.length) {
      return;
    }

    getMovies();
  }, [type]);

  useEffect(() => {
    if (page === 1 && !data.length) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [page]);

  let selectedType = type.length === 0 || type.length === 2 ? "all" : type[0];

  async function getMovies() {
    const { items } = await getData(selectedType, 1, query);
    setData(items);
    setIsLoading(false);
  }

  const handleScroll = async () => {
    setPage((prev) => prev + 1);
    const { items, total } = await getData(selectedType, page + 1, query);
    if (!items) return;
    if (data.length < total) {
      setData((prev) => [...prev, ...items]);
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  };

  if (!query) {
    return (
      <Layout type={type} setType={setType} query={query} setQuery={setQuery}>
        <EmptyState />
      </Layout>
    );
  }

  return (
    <Layout type={type} setType={setType} query={query} setQuery={setQuery}>
      {!isLoading ? (
        <SearchResult
          data={data}
          handleScroll={handleScroll}
          hasMore={hasMore}
        />
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default App;
