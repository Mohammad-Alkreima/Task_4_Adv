import { useState } from "react";
import "./NavBar.css"

interface NavBarProps {
    logo: string;
    items: Array<string>;
    btn: string;
    burger: string;
    close: string
}

const NavBar = ({logo, items, btn, burger, close} : NavBarProps) => {
    const [show, setShow] = useState<boolean>(false)
    const showHandle = () => {
        setShow(!show)
    }
    return (
        <>
            <nav>
                <img src={logo} alt="flora logo" />
                <ul>
                    {items.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
                <button className="login">{btn}</button>
                {/* <img className="burgerIcon" onClick={showHandle} src={burger} alt="burger icon" /> */}
                <img className="burgerIcon" onClick={showHandle} src={show ? close : burger} alt="burger icon & close icon" />
            </nav>
            <div className={`navMenu ${show ? "show" : ""}`}>
                <img src={close} alt="close" />
                <ul>
                    {items.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
                <button className="login">{btn}</button>
            </div>
        </>
    )
}

export default NavBar
