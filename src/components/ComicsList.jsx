import Cards from "./Cards"
//data comics
import comics from "../data/comics"



export default function ComicsList() {
    return (

        <div className="container_main">

            <div className="row">
                <Cards id={0} />
                <Cards id={1} />
                <Cards id={2} />
                <Cards id={3} />
                <Cards id={4} />
                <Cards id={5} />
            </div>
            <div className="row">
                <Cards id={6} />
                <Cards id={7} />
                <Cards id={8} />
                <Cards id={9} />
                <Cards id={10} />
                <Cards id={11} />
            </div>

            <input
                name=""
                id=""
                class="btn"
                type="button"
                value="LOAD MORE"
            />


        </div>
    )
}
