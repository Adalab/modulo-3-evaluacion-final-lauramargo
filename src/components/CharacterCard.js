import photoDefault from ".././images/photoDefault.png";
import { Link } from "react-router-dom";

function CharacterCard(props) {
    if (props.character.image === "") {
        props.character.image = photoDefault;
    }


    return (
        <li className="">
            <Link to={`/character/${props.character.id}`}>


                <img
                    className=""
                    src={props.character.image}
                    alt={`foto de ${props.character.name}`}
                    title={`foto de ${props.character.name}`}></img>
                <h4 className="">{props.character.name}</h4>
                <p className="">{props.character.species}</p>
            </Link>


        </li>
    )

}

export default CharacterCard;