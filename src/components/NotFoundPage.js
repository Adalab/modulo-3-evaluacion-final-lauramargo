import { Link } from "react-router-dom";

function NotFoundPage() {

    return (
        <>
            <p>El personaje que buscas no existe</p>
            <Link to='/' className="notFound">
                <p className="">Home</p>
            </Link>
        </>
    )
};
export default NotFoundPage;