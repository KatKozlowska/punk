import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  search: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  placeholder: string;
};

const SearchBox = ({ search, handleInput, placeholder }: SearchBoxProps) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onInput={handleInput}
      />
    </div>
  );
};

export default SearchBox;
