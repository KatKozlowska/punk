import Card from "../Card/Card";
import { Beer } from "../../types/types";

type CardListProps = {
    beers: Beer[];
}

const CardList = ({beers}:CardListProps) => {
    return(
    <div>
        {beers.map(beer=> <Card 
        id={beer.id}
        name={beer.name}
        img={beer.image_url}
        tagline={beer.tagline} 
        abv={beer.abv} 
        brewed={beer.first_brewed} />)}
    </div>
    
    )
}
 export default CardList;
