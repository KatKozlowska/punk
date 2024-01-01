import { ChangeEventHandler } from "react";
import "./FilterItem.scss";

type FilterItemProps = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
};
const FilterItem = ({ name, onChange, id }: FilterItemProps) => {
  return (
    <div>
      <input id={id} type="checkbox" onChange={onChange}></input>
      <label>{name}</label>
    </div>
  );
};

export default FilterItem;
