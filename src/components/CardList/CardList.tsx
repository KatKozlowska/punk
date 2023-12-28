import Card from "../Card/Card";
import { Beer } from "../../types/types";

type CardListProps = {
    apibeers: Beer[];
}

const CardList = ({apibeers}:CardListProps) => {
    return(
    <div>
        {apibeers.map(beer=> <Card 
        key={beer.id}
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
