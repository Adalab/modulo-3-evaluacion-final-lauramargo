function FilterBySpecies(props) {
    const handleFilterBySpecies = (ev) => {
        props.handleFilterBySpecies(ev.target.value);



    };
    return (
        <div>
            <label htmlFor="species">Filtro por especie</label>
            <ul>
                <li>
                    <label htmlfor="species">
                        <input type="text" value={props.species} onChange={handleFilterBySpecies}>

                        </input>
                    </label>
                </li>

            </ul>
        </div>

    )
}
export default FilterBySpecies;