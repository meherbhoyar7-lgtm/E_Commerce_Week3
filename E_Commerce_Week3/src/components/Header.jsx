import '../App.css';
import logo from '/images/logo.png';  

function Header() {
    return (
        <div className="header-common">
            <img src={logo} alt="KLU Store Logo" />
            <span>KLU Store</span> 
        </div>
    );
}
export default Header;
