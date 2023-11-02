import React, { useEffect, useRef, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const ReactSearchAutocompleteComponent = ({
  suggestions,
  handleSoftwearDevelopmentAddTag,
  index,
  tags,
}) => {
  // const [inputSearchString, setInputSearchString] = useState("");
  const [items, setItems] = useState(
    suggestions.map((item, index) => {
      return { id: index, name: item };
    })
  );
  const handleOnSearch = (string, results) => {
  };

  const [inputRef, setInputRef] = useState(null);

  const handleOnHover = (result) => {
  };

  useEffect(() => {
    let filteredItems = suggestions
      .map((item, index) => {
        return { id: index, name: item };
      })
      .filter((item) => {
        let findItem = tags.find((tag) => tag === item.name);
        if (!findItem) {
          return item;
        }
      });

    setItems(filteredItems);
  }, [tags]);

  const handleOnSelect = (item) => {
    handleSoftwearDevelopmentAddTag(item.name, index);
  };

  const handleOnFocus = (e) => {
    setInputRef(e.target);
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left", zIndex: 20 }}>
          {item.name}
        </span>
      </>
    );
  };

  return (
    <>
      {" "}
      <ReactSearchAutocomplete
        // ref={closeBtnRef}
        items={items}
        onSearch={handleOnSearch}
        placeholder="Add skill tags (e.g React, Swift)"
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        formatResult={formatResult}
        // inputSearchString={inputSearchString}
        inputDebounce={0}
      />
    </>
  );
};

export default ReactSearchAutocompleteComponent;
