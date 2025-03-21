//data comics
import comics from "../data/comics"

export default function Cards({ id }) {
    const comic = comics[id];

    return (
        <>
            <div className="col-2">
                <img className="cover_img" src={comic.thumb} alt={comic.series} />
                <h4 className="comics_series">{comic.series}</h4>
            </div>

        </>
    )
}