import NavBar from "../NavBar/NavBar"
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <NavBar logo="/Task_4_Adv/assets/img/logo.png"
                items={["Home", "About", "Services", "New Property", "Contact"]}
                btn="Login"
                burger="/Task_4_Adv/assets/img/burger.svg"
                close="/Task_4_Adv/assets/img/Vector.svg"
            />
        </header>
    )
}

export default Header
