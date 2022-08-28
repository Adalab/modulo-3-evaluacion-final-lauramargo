import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";

function Filters(props) {
    const handleReset = (ev) => {
        ev.preventDefault();
        props.resetBtn();
    };

    return (
        <>
            <button
                type="button" onClick={handleReset}
                resetBtn={props.resetBtn}
                /*value={props.houseFilter}*/
                className="page__reset">Reset</button>
            <FilterByName filterByName={props.filterByName}
                handleFilterByName={props.handleFilterByName}></FilterByName>
            <FilterByHouse filterByHouse={props.filterByHouse}
                handleFilterByHouse={props.handleFilterByHouse}>
            </FilterByHouse>
        </>
    )
};
export default Filters;