import { ChangeEvent, useEffect, useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside/useClickOutside";
import "./SearchBar.scss";

const SearchBar = (): JSX.Element => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isClickOutside, reset } = useClickOutside();

  useEffect(() => {
    if (isClickOutside && searchKey === "") {
      setIsExpanded(false);
    } else if (isClickOutside === true) {
      reset();
    }
  }, [isClickOutside]);

  const onButtonClick = () => {
    if (!isExpanded) {
      reset();
      setIsExpanded(true);
    } else if (searchKey === "") {
      setIsExpanded(!isExpanded);
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  return (
    <div ref={ref} className={`search-bar ${isExpanded ? "active" : ""}`}>
      <div className="input">
        <input
          ref={input => input && input.focus()}
          type="text"
          onChange={handleOnChange}
          placeholder="Search all news"
          autoFocus
        />
      </div>
      <div className="icon" onClick={onButtonClick}></div>
    </div>
  );
};

export default SearchBar;
