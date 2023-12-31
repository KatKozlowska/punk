import { Beer } from "../../types/types";
import "./BeerInfo.scss"
import blackCross from "../../assets/black-cross.png"

type BeerInfoProps = {
    selectedBeer:Beer;
    onSelect: (value: null | Beer) => void;
};

const BeerInfo = ({selectedBeer, onSelect}:BeerInfoProps) => {

    const clearSelection = () => {
        onSelect(null);
    }

    if(selectedBeer === undefined) return <p>Can not find this beer</p>
    return (
        <div className="container">
        <div className="beer">
            <div className="beer__black-cross">
                <img className="beer-cross" src={blackCross} onClick={clearSelection} />
            </div>
            <div className="beer__img beer__img--first">
            <img  className="beer__img" src={selectedBeer.image_url ?? undefined} />
            </div>
           <div className="beer__info">
                <h2 className="beer__info--heading">{selectedBeer.name}</h2>
                <p>{selectedBeer.description}</p>
                <h2>Other tidbits</h2>
                
                    <p>{selectedBeer.tagline}</p>
                    <p>ABV:{selectedBeer.abv}%</p>
                    <p>Food pairings: </p>
                    <ul>{selectedBeer.food_pairing.map(food=> <li>{food}</li>)}</ul>
                  
               
            </div>

            <div className="beer__img beer__img--last">
            <img className="beer__img" src={selectedBeer.image_url ?? undefined} />
            </div>

        </div>
        </div>
    )
}

export default BeerInfo;