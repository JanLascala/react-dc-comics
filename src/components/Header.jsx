export default function Header() {
    return (
        <header className="container_header">
            <img className="logo_header" src="/img/dc-logo.png" alt="" />

            <nav>
                <ul>
                    <li><a href="/characters">Characters</a></li>
                    <li><a href="/comics">Comics</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/tv">TV</a></li>
                    <li><a href="/games">Games</a></li>
                    <li><a href="/collectibles">Collectibles</a></li>
                    <li><a href="/videos">Videos</a></li>
                    <li><a href="/fans">Fans</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/shop">Shop</a></li>
                </ul>
            </nav>
        </header>
    )

}