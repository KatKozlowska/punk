
import CardList from "../../components/CardList/CardList";
import { Beer } from "../../types/types";

type MainProps = {
    apibeers: Beer[];
}


const Main = ({apibeers}:MainProps) => {
    return(
        <main>
        <CardList apibeers={apibeers}/>
        </main>
    )
}

export default Main;