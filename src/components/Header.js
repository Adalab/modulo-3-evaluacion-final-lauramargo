import Logo from "../images/logo.png";
import '../styles/components/Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__h1'>La magia de react</h1>
            <img className='header__img' src={Logo} title="logo" alt="logo" />

        </header>
    );
};
export default Header;