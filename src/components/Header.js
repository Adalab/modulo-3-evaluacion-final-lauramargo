import Logo from "../images/logo.png";
import '../styles/components/Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <img className='header__img' src={Logo} title="logo" alt="logo" />

        </header>
    );
};
export default Header;