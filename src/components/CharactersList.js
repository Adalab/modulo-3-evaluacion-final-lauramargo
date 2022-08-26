import CharacterCard from "./CharacterCard"
function CharacterList(props) {

    const userCharacters = props.character.map((character) => {
        return (
            <CharacterCard character={character} />

        );
    });

    return (
        <section>
            <ul className="">
                {userCharacters}

            </ul>
        </section>
    )
};
export default CharacterList;