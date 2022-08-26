import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";

function Filters(props) {
    return (
        <>
            <FilterByName filterByName={props.filterByName}
                handleFilterByName={props.handleFilterByName}></FilterByName>
            <FilterByHouse filterByHouse={props.filterByHouse}
                handleFilterByHouse={props.handleFilterByHouse}>
            </FilterByHouse>
        </>
    )
};
export default Filters;