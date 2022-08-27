function CharacterDetail(props) {

    return (
        <section className="">
            <article className="">
                <img
                    className=""
                    src={props.character.image}
                    alt={`foto de ${props.character.name}`}
                    title={`foto de ${props.character.name}`}></img>
                <h4 className="">{props.character.name}</h4>
                <p className="">{props.character.species}</p>
                <p className="">{props.character.alternateNames}</p>
                <p className="">{props.character.gender}</p>
                <p className="">{props.character.house}</p>
                <p className="">{props.character.alive}</p>
            </article>
        </section>
    )
};
export default CharacterDetail;