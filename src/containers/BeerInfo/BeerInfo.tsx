import { useParams } from "react-router-dom";
import { Beer } from "../../types/types";
import "./BeerInfo.scss"

type BeerInfoProps = {
    apibeers:Beer[];
};

const BeerInfo = ({apibeers}:BeerInfoProps) => {
    const {beerName} = useParams();
    const beer = apibeers.find((beer) => (beer.name) === beerName)
    if(beer === undefined) return <p>Can not find this beer</p>
    return (
        <div className="beer">

            <div>
            <img className="beer__img beer__img--first" src={beer.image_url ?? undefined} />
            </div>
           <div className="beer__info">
                <h2 className="beer__info--heading">{beer.name}</h2>
                <p>{beer.description}</p>
                <h2>Other tidbits</h2>
                
                    <p>{beer.tagline}</p>
                    <p>ABV:{beer.abv}%</p>
                    <p>Food pairings: </p>
                    <ul>{beer.food_pairing.map(food=> <li>{food}</li>)}</ul>
                  
               
            </div>

            <div>
            <img className="beer__img beer__img-last" src={beer.image_url ?? undefined} />
            </div>

        </div>
    )
}

export default BeerInfo;