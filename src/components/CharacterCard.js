import photoDefault from ".././images/photoDefault.png";
function CharacterCard(props) {
    if (props.character.photo === "") {
        props.character.photo = photoDefault;
    }

    return (
        <li className="">

            <img
                className=""
                src={props.character.image}
                alt={`foto de ${props.character.name}`}
                title={`foto de ${props.character.name}`}></img>
            <h4 className="">{props.character.name}</h4>
            <p className="">{props.character.species}</p>


        </li>
    )

}

export default CharacterCard;