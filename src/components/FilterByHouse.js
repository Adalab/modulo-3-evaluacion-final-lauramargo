function FilterByHouse(props) {
    const handleChange = (ev) => {
        props.handleFilterByHouse(ev.target.value)

    }
    return (
        <>
            <label
                className=""
                htmlFor="house">Selecciona la casa:</label>
            <select
                className=""
                name="house"
                id="house"
                value={props.filterByHouse}
                onChange={handleChange}>


                <option value="Gryffindor" selected>Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="">Otros</option>
                <option value="Todas">Todas</option>

            </select>
        </>

    );
}
export default FilterByHouse;