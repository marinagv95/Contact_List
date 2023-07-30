import { useContext, useState } from "react";
import { ContactContext } from "../../../providers/contactProviders/contactContext";
import { SearchIcon, SearchInput } from "./style";

const SearchForm = () => {
  const { setSearch } = useContext(ContactContext);
  const [searchValue, setSearchValue] = useState("");

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearch(searchValue);

    setSearchValue("");
  };

  return (
    <form onSubmit={submit}>
      <SearchInput
        type="text"
        placeholder="Digitar pesquisa"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchForm;
