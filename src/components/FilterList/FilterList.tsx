import FilterItem from "../FilterItem/FilterItem";
import { ChangeEventHandler } from "react";

type FilterListProps = {
    onChangeABV:ChangeEventHandler<HTMLInputElement>;
    onChangeClassic:ChangeEventHandler<HTMLInputElement>;
    onChangePh:ChangeEventHandler<HTMLInputElement>;
   
   
}
const FilterList = ({onChangeABV,onChangeClassic,onChangePh}:FilterListProps) => {

    return (
    <div>
    <FilterItem onChange={onChangeABV} name="High alcohol ABV (above 6)"/>
    <FilterItem onChange={onChangeClassic} name="Classic range (brewed before 2010)"/>
    <FilterItem onChange={onChangePh} name="High pH"/>
    </div>
)
}

export default FilterList;