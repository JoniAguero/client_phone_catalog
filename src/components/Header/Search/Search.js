import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react'
import { Search as SearchSU } from "semantic-ui-react";
import { size } from "lodash";

export default function Search() {

  const [search, setSearch] = useState(null);
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   if (size(data?.search) > 0) {
  //     const phones = [];
  //     data.search.forEach((user, index) => {
  //       phones.push({
  //         key: index,
  //         title: user.name,
  //         username: user.username,
  //         avatar: user.avatar,
  //       });
  //     });
  //     setResults(phones);
  //   } else {
  //     setResults([]);
  //   }
  // }, [data]);

  const onChange = (e) => {
    if (e.target.value) setSearch(e.target.value);
    else setSearch(null);
  };

  const handleResultSelect = () => {
    setSearch(null);
    setResults([]);
  };

  return (
    <div className="search">
      {/* <SearchSU
        className="search-users"
        fluid
        input={{ icon: "search", iconPosition: "left" }}
        loading={loading}
        value={search || ""}
        onSearchChange={onChange}
        onResultSelect={handleResultSelect}
        results={results}
        resultRenderer={(e) => <ResultSearch data={e} />}
      /> */}
      <Button circular icon='search' />
    </div>
  )
}

function ResultSearch(props) {
  const { data } = props;

  return (
    <Link className="search-users__item" to={`/${data.username}`}>
      {/* <Image src={data.avatar || ImageNoFound} /> */}
      <Image src={data.avatar} />
      <div>
        <p>{data.title}</p>
        <p>{data.username}</p>
      </div>
    </Link>
  );
}
