import { useParams } from "react-router-dom";
import { Beer } from "../../types/types";
import "./BeerInfo.scss"
import blackCross from "../../assets/black-cross.png"

type BeerInfoProps = {
    apibeers:Beer[];
    onClose: () => void;
};

const BeerInfo = ({apibeers, onClose}:BeerInfoProps) => {
    const {beerName} = useParams();
    const beer = apibeers.find((beer) => (beer.name) === beerName)
    if(beer === undefined) return <p>Can not find this beer</p>
    return (
        <div className="container">
        <div className="beer">
            <div className="beer__black-cross">
                <img className="beer-cross" src={blackCross} onClick={onClose} />
            </div>
            <div className="beer__img beer__img--first">
            <img  className="beer__img" src={beer.image_url ?? undefined} />
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

            <div className="beer__img beer__img--last">
            <img className="beer__img" src={beer.image_url ?? undefined} />
            </div>

        </div>
        </div>
    )
}

export default BeerInfo;