import Cards from "./Cards"
//data comics
import comics from "../data/comics"



export default function ComicsList() {


    const sayLoad = () => {
        alert("load more");
    }

    return (


        <div className="container_main">

            <div className="row">
                {comics.slice(0, 6).map((comic, index) => (
                    <Cards key={index} id={index} />
                ))}
            </div>
            <div className="row">
                {comics.slice(6, 12).map((comic, index) => (
                    <Cards key={index + 6} id={index + 6} />
                ))}
            </div>

            <button className="btn" onClick={sayLoad}>Load more</button>





        </div>
    )
}
