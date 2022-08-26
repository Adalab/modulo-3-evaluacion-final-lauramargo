function FilterByHouse(props) {
    const handleChange = (ev) => {
        props.handleFilterByHouse(ev.target.value)
    }
    return (
        <>
            <label
                className=""
                for="gender">Género:</label>
            <select
                class="form__input-text"
                name="gender"
                id="gender"
                value={props.FilterByHouse}
                onChange={handleChange}>


                <option value="Gryffindor" selected>Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="">Vacio</option>

            </select>
        </>

    );
}
export default FilterByHouse;