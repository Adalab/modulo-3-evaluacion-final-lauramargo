import photoDefault from ".././images/photoDefault.png";
import { Link } from "react-router-dom";
import "../styles/components/CharacterCard.scss";

function CharacterCard(props) {
    if (props.character.image === "") {
        props.character.image = photoDefault;
    }


    return (
        <li className="card">
            <Link to={`/character/${props.character.id}`}>
                <article className="card__article">


                    <img
                        className="card__article--img"
                        src={props.character.image}
                        alt={`foto de ${props.character.name}`}
                        title={`foto de ${props.character.name}`}></img>
                    <h4 className="card__article--title">{props.character.name}</h4>
                    <p className="card__article--text">{props.character.species}</p>
                </article>
            </Link>


        </li>
    )

}

export default CharacterCard;