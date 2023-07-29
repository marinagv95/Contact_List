import { MdSearch } from "react-icons/md";
import { useContext, useState } from "react";
import { ContactContext } from "../../../providers/contactProviders/contactContext";

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
      <input
        type="text"
        placeholder="Digitar pesquisa"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">
        <MdSearch />
      </button>
    </form>
  );
};

export default SearchForm;
