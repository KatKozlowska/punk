import CardList from "../../components/CardList/CardList";
import { Beer } from "../../types/types";

type MainProps = {
  apibeers: Beer[];
  onSelect: (value: null | Beer) => void;
};

const Main = ({ apibeers, onSelect }: MainProps) => {
  return (
    <main>
      <CardList apibeers={apibeers} onSelect={onSelect} />
    </main>
  );
};

export default Main;
