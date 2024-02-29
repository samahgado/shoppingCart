import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchInput.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type SearchInputProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ searchValue, setSearchValue }: SearchInputProps) => {
  return (
    <div className="search-bar-warapper">
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder=" Enter your search"
        autoFocus
        aria-label="search"
      />
    <button className="search-bar__submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>  
    </div>
    </div>
  );
};
export default SearchInput;
