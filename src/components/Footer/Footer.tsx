import React from "react";
import "./Footer.css";
import CopyRight from "../CopyRight/CopyRight";

type LinkItem = {
    label: string,
    href: string
}

type Section = {
    title: string,
    links?: LinkItem[],
    text?: string
}

type SocialLink = {
    icon: string,
    href: string
}

type FooterProps = {
    logo: string,
    description: string,
    sections: Section[],
    socialLinks: SocialLink[]
}

const Footer: React.FC<FooterProps> = ({ logo, description, sections, socialLinks }) => {
    return (
        <footer className="paddingLeftRight">
            <div className="footer-container">
                {/* Logo and Description */}
                <div className="footer-logo">
                    <img src={logo} alt="Logo" className="footer-logo-img" />
                    <p className="footer-desc">{description}</p>
                </div>
                {/* Sections */}
                {sections.map((section, index) => (
                <div key={index} className="footer-section">
                    <h4>{section.title}</h4>
                    {section.links && (
                    <ul>
                        {section.links.map((link, i) => (
                        <li key={i}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                        ))}
                    </ul>
                    )}
                    {section.text && <p>{section.text}</p>}
                    {/* Social */}
                    {index === sections.length - 1 && socialLinks && (
                        <div className="footer-social">
                            {socialLinks.map((social, i) => (
                                <a key={i} href={social.href} target="_blank" rel="noreferrer">
                                    <div className="img">
                                        <img src={social.icon}></img>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                ))}            
            </div>
            <CopyRight copy="Copyright 2024 flora. All Rights Reserved"
                        terms="Terms & Conditions"
                        policy="Privacy Policy"
            />
        </footer>
    );
};

export default Footer;
