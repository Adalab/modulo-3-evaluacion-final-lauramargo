
function CharacterCard(props) {

    return (
        <li className="">
            <a href="#">
                <img
                    className=""
                    src={props.character.image}
                    alt={`foto de ${props.character.name}`}
                    title={`foto de ${props.character.name}`}></img>
                <h4 className="">{props.character.name}</h4>
                <p className="">{props.character.species}</p>

            </a>
        </li>
    )

}

export default CharacterCard;