import React from "react";
import styles from "./style.module.css";
import Card from "../Card/index.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import QueryNotFound from "../QueryNotFound/index.jsx";

const SearchResult = ({ data = [], handleScroll, hasMore }) => {
  if (!data.length) {
    return <QueryNotFound />;
  }
  
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={handleScroll}
      hasMore={hasMore}
    >
      <div className={styles.container}>
        {data.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            imageUrl={card.imageURL}
            url={card.url}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default SearchResult;
