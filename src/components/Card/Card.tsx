import "./Cards.scss";

type CardProps = {
  id: number;
  name: string;
  img: string;
  tagline: string;
  abv: number;
  brewed: string;
  handleClick: () => void;
};

const Card = ({
  id,
  name,
  img,
  tagline,
  abv,
  brewed,
  handleClick,
}: CardProps) => {
  return (
    <div className="card" id={id.toString()} onClick={handleClick}>
      <img className="card__img" src={img} />
      <div className="card__info">
        <p className="card__info--heading">{name}</p>
        <p className="card__info--tagline">{tagline}</p>
        <p className="card__info--info">ABV:{abv}%</p>
        <p>Est.{brewed}</p>
      </div>
    </div>
  );
};

export default Card;
