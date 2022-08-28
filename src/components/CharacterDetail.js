import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";
function CharacterDetail(props) {
    const getAlive = (character) => {

        if (character.alive !== "true") {
            return 'Desapacerio mágicamente de este mundo';
        } return true;
    }
    return (
        <section className="detail">
            <Link to='/' className=''>
                <p className='detail__link'>Home</p>
            </Link>
            <article className="detail__article">
                <img
                    className="detail__article--img"
                    src={props.character.image}
                    alt={`foto de ${props.character.name}`}
                    title={`foto de ${props.character.name}`}></img>
                <div className="detail__article--container">
                    <h4 className="detail__article--title">{props.character.name}</h4>
                    <p className="detail__article--text">{props.character.species}</p>
                    <p className="detail__article--text">{props.character.gender}</p>
                    <p className="detail__article--text">{props.character.house}</p>
                    <p className="detail__article--text">{getAlive(props.character)}</p>
                    <p className="detail__article--text">{props.character.alternateNames}</p>
                </div>
            </article>
        </section>
    )
};
export default CharacterDetail;