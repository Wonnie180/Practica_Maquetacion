import "./SearchBar.css";
import SearchIcon from "../../Assets/Icons/SearchIcon.svg";

const isEnterKeyPressed = (event) => {
  return event.keyCode === 13;
};

export const SearchBar = ({
  onSearch,
  searchText,
  onTextChange,
  searchPlaceholder,
}) => {
  const handleChange = (event) => {
    if (isEnterKeyPressed(event)) onSearch();
  };

  return (
    <div className="search__container">
      <img src={SearchIcon} alt="SearchIcon" className="search__icon" />
      <input
        type="text"
        className="search__input"
        placeholder={searchPlaceholder}
        value={searchText}
        onChange={(event) => onTextChange(event.target.value)}
        onKeyDown={handleChange}
      ></input>
    </div>
  );
};
