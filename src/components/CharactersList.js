
import CharacterCard from "./CharacterCard"
import "../styles/components/CharacterList.scss";
function CharacterList(props) {


    const userCharacters = props.character.map((character) => {
        return (
            <CharacterCard character={character} key={character.id} />

        );
    });

    return (
        <section className='container' >
            <ul className="container__list">
                {userCharacters}

            </ul>
        </section>
    )
};
export default CharacterList;