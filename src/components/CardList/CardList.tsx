import Card from "../Card/Card";
import { Beer } from "../../types/types";
import {Link} from "react-router-dom";
import "./CardList.scss";

type CardListProps = {
    apibeers: Beer[];
}

const CardList = ({apibeers}:CardListProps) => {
    return(
    <div className="card-list">
        {apibeers.map(beer=> (
        <Link to={`/apibeers/${beer.name}`} key={beer.id} style={{textDecoration: "none"}}>
        <Card 
        key={beer.id}
        id={beer.id}
        name={beer.name}
        img={beer.image_url}
        tagline={beer.tagline} 
        abv={beer.abv} 
        brewed={beer.first_brewed} />
        </Link>))}
    </div>
    
    )
}
 export default CardList;
