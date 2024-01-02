import Card from "../Card/Card";
import { Beer } from "../../types/types";
import "./CardList.scss";

type CardListProps = {
  apibeers: Beer[];
  onSelect: (value: null | Beer) => void;
};

const CardList = ({ apibeers, onSelect }: CardListProps) => {
  const handleClick = (beer: Beer) => {
    onSelect(beer);
  };
  if (apibeers.length === 0)
    return (
      <div className="failed-search">
        <p>Oops! There are not beverages that match your search.</p>
      </div>
    );

  return (
    <div className="card-list">
      {apibeers.map((beer) => (
        <Card
          key={beer.id}
          id={beer.id}
          name={beer.name}
          img={beer.image_url}
          tagline={beer.tagline}
          abv={beer.abv}
          brewed={beer.first_brewed}
          handleClick={() => handleClick(beer)}
        />
      ))}
    </div>
  );
};
export default CardList;
