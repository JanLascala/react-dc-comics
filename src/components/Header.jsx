import navLinks from "../data/navLinks";

export default function Header() {
    return (
        <header className="container_header">
            <img className="logo_header" src="/img/dc-logo.png" alt="DC Logo" />

            <nav>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.path}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
